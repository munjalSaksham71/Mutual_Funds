import React, {useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux";
import { listFundDetails } from "../actions/fundsActions";
import Loader from '../components/Loader'
import Message from '../components/Message'
import '../App.css';

const FundDetailScreen = ({history, match }) => {
  const dispatch = useDispatch()
  
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const fundDetails = useSelector((state) => state.fundDetails)
  const {loading, error, fund } = fundDetails

  console.log(fund)
  useEffect(() => {
    if(!userInfo){
      history.push('/login')
    }
      dispatch(listFundDetails(match.params.id))
  }, [dispatch, match,userInfo, history])

    return (
        <div className="mt-5">
            {loading && <Loader />}
            {error && <Message variant='danger'>{error}</Message>}
            <h2>Detail About Mutual Fund</h2>
            <h3><span className="bolder" >Fund Name: </span>  {/*fund.meta.scheme_name} </h3> <br />
            <h3><span className="bolder">Fund Type: </span> {fund.meta.scheme_type} </h3> <br />
            <h3><span className="bolder">Fund house: </span> {fund.meta.fund_house} </h3> <br/>
            <h3><span className="bolder">Net Asset Value: </span> {fund.data[0].nav} </h3> <br/>
    <h3><span className="bolder">Last Update On: </span> {fund.data[0].date */} </h3>
        </div>
    )
}

export default FundDetailScreen
