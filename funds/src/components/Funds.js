import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const Funds = ({ fund }) => {
    return (
      <Card className='mt-5 p-3 rounded'>
        <Card.Body>
        <Link to={`/fund/${fund.schemeCode}`}>
          <Card.Title as='div'>
            <strong>{fund.schemeName}</strong>
          </Card.Title>
          <Card.Text as='p'>Click To Learn More</Card.Text>
        </Link>
        </Card.Body>
      </Card>
    )
  }

  export default Funds;