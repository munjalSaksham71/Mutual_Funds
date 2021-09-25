import axios from 'axios';
import { FUND_LIST_REQUEST, FUND_LIST_SUCCESS, FUND_LIST_FAIL, FUND_DETAILS_REQUEST, FUND_DETAILS_SUCCESS, FUND_DETAILS_FAIL, FUND_SEARCH_REQUEST, FUND_SEARCH_SUCCESS, FUND_SEARCH_FAIL } from '../constants/fundsConstants';

export const listFunds = () => async (dispatch) => {
    try {
      dispatch({ type: FUND_LIST_REQUEST });
  
      const { data } = await axios.get("https://api.mfapi.in/mf");
      dispatch({
        type: FUND_LIST_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: FUND_LIST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

  export const listFundDetails = (secretCode) => async (dispatch) => {
    try {
      dispatch({ type: FUND_DETAILS_REQUEST });
  
      const { data } = await axios.get(`https://api.mfapi.in/mf/${secretCode}`);
      dispatch({
        type: FUND_DETAILS_SUCCESS,
        payload: data,
      });
      
    } catch (error) {
      dispatch({
        type: FUND_DETAILS_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

  export const searchFunds = (keyword='') => async (dispatch) => {
    try {
      dispatch({ type: FUND_SEARCH_REQUEST });
  
      const { data } = await axios.get(`https://api.mfapi.in/mf/search?q=${keyword}`);
      dispatch({
        type: FUND_SEARCH_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: FUND_SEARCH_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
