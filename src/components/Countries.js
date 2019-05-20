import React, { Component } from 'react';
import { fetchCountries } from '../actions/countries'
import { connect } from 'react-redux';
import Table from './Table';

class Countries extends Component {
  componentDidMount() {
    this.props.onFetchCountries(this.props.match.params.name)
  }

  render() {
    return (
      <div>
        <Table countries={this.props.countries} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  countries: state.countries,
  loader: state.loader
});

const mapActionsToProps = {
  onFetchCountries: fetchCountries
}


export default connect(mapStateToProps, mapActionsToProps)(Countries)
