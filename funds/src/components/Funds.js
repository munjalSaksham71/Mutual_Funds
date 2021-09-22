import React from 'react'
import './Funds.css';
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const Funds = ({ fund }) => {
    return (
      <div className="center">
        <h3>{fund.schemeName}</h3>
        <Link to={`/fund/${fund.schemeCode}`}>Read in Detail</Link>
          
      </div>
    )
  }

  export default Funds;