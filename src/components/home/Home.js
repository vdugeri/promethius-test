import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import './styles.css';


export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {}
  }


  render() {
    return (
      <div className="home">
        <div className="hero">
          <h2 className="hero__header">You. Me. Everyone.</h2>
          <div className="regions">
            <Button variant="outlined" color="primary" href="/regions/africa">Africa</Button>
            <Button variant="outlined" color="primary">Asia</Button>
            <Button variant="outlined" color="primary">Caribbean</Button>
            <Button variant="outlined" color="primary">Central America</Button>
            <Button variant="outlined" color="primary">Europe</Button>
            <Button variant="outlined" color="primary">North America</Button>
            <Button variant="outlined" color="primary">Oceania</Button>
            <Button variant="outlined" color="primary">South America</Button>
          </div>
        </div>
      </div>
    )
  }
}

