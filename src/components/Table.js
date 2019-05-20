import React, { Fragment, Component } from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TableHead from './TableHead';
import Country from './Country';
import { connect } from 'react-redux';
import { createData, stableSort, getSorting } from './table-utils';
import { GET_COUNTRY } from '../types';



const styles = theme => ({
  root: {
    width: '60%',
    marginTop: '10rem',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  table: {
    minWidth: '80%',
    marginLeft: '20px',
  },
  tableWrapper: {
    overflowX: 'auto',
  },
});

class EnhancedTable extends Component {
  state = {
    order: 'asc',
    orderBy: 'name',
    selected: [],
    page: 0,
    rowsPerPage: 5,
    showModal: false,
  };

  handleRequestSort = (event, property) => {
    const orderBy = property;
    let order = 'desc';

    if (this.state.orderBy === property && this.state.order === 'desc') {
      order = 'asc';
    }

    this.setState({ order, orderBy });
  };

  handleClick = (event, name) => {
    const { countries } = this.props;
    const payload = {
      name,
      countries
    };
    this.props.dispatch({ type: GET_COUNTRY, payload });
    this.setState({ showModal: true })
  };

  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
  };

  handleClose = () => {
    this.setState({ showModal: false });
  }

  isSelected = id => this.state.selected.indexOf(id) !== -1;

  render() {
    const { classes } = this.props;
    const { order, orderBy, rowsPerPage, page } = this.state;
    const data = createData(this.props.countries);
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);
    return (
      <Fragment>
        <Paper className={classes.root}>
          <div className={classes.tableWrapper}>
            <Table className={classes.table} aria-labelledby="tableTitle" padding="dense">
              <TableHead
                order={order}
                orderBy={orderBy}
                onRequestSort={this.handleRequestSort}
                rowCount={data.length}
              />
              <TableBody>
                {stableSort(data, getSorting(order, orderBy))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map(n => {
                    const isSelected = this.isSelected(n.id);
                    return (
                      <TableRow
                        hover
                        onClick={event => this.handleClick(event, n.name)}
                        role="checkbox"
                        aria-checked={isSelected}
                        tabIndex={-1}
                        key={n.id}
                        selected={isSelected}
                      >
                        <TableCell component="th" scope="row" padding="none">
                          {n.name}
                        </TableCell>
                        <TableCell align="left">{n.population}</TableCell>
                        <TableCell align="left">{n.density}</TableCell>
                      </TableRow>
                    );
                  })}
                {emptyRows > 0 && (
                  <TableRow style={{ height: 49 * emptyRows }}>
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={data.length}
            rowsPerPage={rowsPerPage}
            page={page}
            backIconButtonProps={{
              'aria-label': 'Previous Page',
            }}
            nextIconButtonProps={{
              'aria-label': 'Next Page',
            }}
            onChangePage={this.handleChangePage}
            onChangeRowsPerPage={this.handleChangeRowsPerPage}
          />

          {Object.keys(this.props.country).length ?
            <Country
              country={this.props.country}
              open={this.state.showModal} classes={classes}
              handleClose={this.handleClose}
            /> : null}
        </Paper>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  country: state.country
});

EnhancedTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(withStyles(styles)(EnhancedTable));
