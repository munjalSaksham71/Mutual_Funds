import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Funds from '../components/Funds'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { listFunds, searchFunds } from '../actions/fundsActions'
import '../App.css'

const HomeScreen = ({history, match}) => {
  const keyword = match.params.keyword;
  const dispatch = useDispatch()

  const fundList = useSelector((state) => state.fundList);
  const { loading, error, funds } = fundList;

  const fundSearchList = useSelector((state) => state.fundSearchList)
  const  fundSearch  = fundSearchList

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const slicedFund = funds.slice(0,5);

  useEffect(() => {
    if(!userInfo){
      history.push('/login');
    }
    if(keyword){
      dispatch(searchFunds(keyword))
    } else {
      dispatch(listFunds())
    }
  }, [dispatch, userInfo, history, keyword])

  return (
    <div className="App mt-5">
      <h1>Mutual Funds</h1>
      {loading && <Loader />}
      {error && <Message variant='danger'>{error}</Message>}
      { keyword ? (
        <Row>
          {fundSearch.funds.map((item) => (
          <Col key={item.schemeCode} sm={12} md={6} lg={4} xl={3}>
            <Funds key={item.schemeCode} fund={item} />
          </Col>
        ))}
      </Row>
        ) : (
        <Row>
          {slicedFund.map((fund) => (
            <Col key={fund.schemeCode} sm={12} md={6} lg={4} xl={3}>
              <Funds key={fund.schemeCode} fund={fund} />
            </Col>
          ))}
        </Row>
      )}
    </div>
  )
}

export default HomeScreen