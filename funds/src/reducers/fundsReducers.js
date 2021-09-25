import { FUND_LIST_REQUEST,FUND_LIST_SUCCESS,FUND_LIST_FAIL, FUND_DETAILS_REQUEST, FUND_DETAILS_SUCCESS, FUND_DETAILS_FAIL, FUND_SEARCH_REQUEST, FUND_SEARCH_SUCCESS, FUND_SEARCH_FAIL } from "../constants/fundsConstants";

export const fundListReducer = (state = { funds: [] }, action) => {
    switch (action.type) {
      case FUND_LIST_REQUEST:
        return { loading: true, funds: [] };
      case FUND_LIST_SUCCESS:
        return { loading: false, funds: action.payload };
      case FUND_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };

  export const fundDetailsReducer = (
    state = { fund: { } },
    action
  ) => {
    switch (action.type) {
      case FUND_DETAILS_REQUEST:
        return { ...state };
      case FUND_DETAILS_SUCCESS:
        return { fund: action.payload };
      case FUND_DETAILS_FAIL:
        return {error: action.payload };
      default:
        return state;
    }
  };

  export const fundSearchListReducer = (state = { funds: [] }, action) => {
    switch (action.type) {
      case FUND_SEARCH_REQUEST:
        return { loading: true, funds: [] };
      case FUND_SEARCH_SUCCESS:
        return { loading: false, funds: action.payload };
      case FUND_SEARCH_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };