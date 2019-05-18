import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import './styles.css';


export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      regions: [
        "Africa",
        "Asia",
        "Americas",
        "Europe",
        "Oceania",
      ]
    }
  }


  render() {
    const regions = this.state.regions.map((region, index) => {
      return <Button key={index} variant="outlined" color="primary" href={`/regions/${region}`} >{region}</Button >
    })

    return (
      <div className="home">
        <div className="hero">
          <h2 className="hero__header">You. Me. Everyone.</h2>
          <div className="regions">
            {regions}
          </div>
        </div>
      </div>
    )
  }
}

