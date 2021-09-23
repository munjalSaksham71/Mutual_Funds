import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Funds from '../components/Funds'
import { listFunds } from '../actions/fundsActions'
import '../App.css'

const HomeScreen = () => {
  const dispatch = useDispatch()

  const fundList = useSelector((state) => state.fundList);
  const { funds } = fundList;

  const slicedFund = funds.slice(0,5);

  useEffect(() => {
    dispatch(listFunds())
  }, [dispatch])

  return (
    <div className="App mt-5">
      <h1>Mutual Funds</h1>
      {(
        <Row>
          {slicedFund.map((fund) => (
            <Col key={fund.schemeCode} sm={12} md={6} lg={4} xl={3}>
              <Funds style={{display: 'flex', flexDirection: 'row'}} key={fund.schemeCode} fund={fund} />
            </Col>
          ))}
        </Row>
      )}
    </div>
  )
}

export default HomeScreen