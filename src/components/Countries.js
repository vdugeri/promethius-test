import React, { Component } from 'react';
import { fetchCountries, getCountry } from '../actions/countries'
import { connect } from 'react-redux';

class Countries extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {

  }

  componentDidMount() {
    this.props.onFetchCountries(this.props.match.params.name)
  }

  render() {
    return (
      <div>Countries</div>
    )
  }
}

const mapStateToProps = state => ({
  countries: state.countries,
  loader: state.loader
});

const mapActionsToProps = {
  onFetchCountries: fetchCountries,
  onGetCountry: getCountry,
}


export default connect(mapStateToProps, mapActionsToProps)(Countries)
