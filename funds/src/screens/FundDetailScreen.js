import React, {useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux";
import { listFundDetails } from "../actions/fundsActions";
import '../App.css';

const FundDetailScreen = ({ match }) => {

  const dispatch = useDispatch()

  const fundDetails = useSelector((state) => state.fundDetails)
  const { fund } = fundDetails

  useEffect(() => {
    dispatch(listFundDetails(match.params.id))
  }, [dispatch, match])

    return (
        <div>
            <h2>Detail About Mutual Fund</h2>
            <h3><span className="bolder" >Fund Name: </span>{fund.meta.scheme_name} </h3> <br />
            <h3><span className="bolder">Fund Type: </span>{fund.meta.scheme_type}  </h3> <br />
            <h3><span className="bolder">Fund house: </span> {fund.meta.fund_house}  </h3> <br/>
            <h3><span className="bolder">Net Asset Value: </span>{fund.data[0].nav}  </h3> <br/>
            <h3><span className="bolder">Last Update On: </span>{fund.data[0].date}   </h3>
        </div>
    )
}

export default FundDetailScreen
