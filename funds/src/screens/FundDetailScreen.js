import React, {useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux";
import { listFundDetails } from "../actions/fundsActions";
import '../App.css';

const FundDetailScreen = ({history, match }) => {
  const dispatch = useDispatch()
  const fundDetails = useSelector((state) => state.fundDetails)
  const { fund } = fundDetails

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  useEffect(() => {
    if(!userInfo){
      history.push('/login')
    }
    dispatch(listFundDetails(match.params.id))
  }, [dispatch, match,userInfo, history])

  console.log(fund);
    return (
        <div>
            <h2>Detail About Mutual Fund</h2>
            <h3><span className="bolder" >Fund Name: </span></h3> <br />
            <h3><span className="bolder">Fund Type: </span>  </h3> <br />
            <h3><span className="bolder">Fund house: </span>  </h3> <br/>
            <h3><span className="bolder">Net Asset Value: </span>  </h3> <br/>
            <h3><span className="bolder">Last Update On: </span>  </h3>
        </div>
    )
}

export default FundDetailScreen
