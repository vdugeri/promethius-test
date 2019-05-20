import TableSortLabel from '@material-ui/core/TableSortLabel';
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Tooltip from '@material-ui/core/Tooltip';
import React from 'react';
import PropTypes from 'prop-types';


const rows = [
  { id: 'name', numeric: false, disablePadding: true, label: 'Name' },
  { id: 'population', numeric: true, disablePadding: false, label: 'Population' },
  { id: 'density', numeric: true, disablePadding: false, label: 'Population Density' },
];

class EnhancedTableHead extends React.Component {
  createSortHandler = property => event => {
    this.props.onRequestSort(event, property);
  };

  render() {
    const { order, orderBy } = this.props;

    return (
      <TableHead>
        <TableRow>
          {rows.map(
            row => (
              <TableCell
                key={row.id}
                align='left'
                padding={row.disablePadding ? 'none' : 'default'}
                sortDirection={orderBy === row.id ? order : false}
              >
                <Tooltip
                  title="Sort"
                  placement={row.numeric ? 'bottom-end' : 'bottom-start'}
                  enterDelay={300}
                >
                  <TableSortLabel
                    active={orderBy === row.id}
                    direction={order}
                    onClick={this.createSortHandler(row.id)}
                  >
                    {row.label}
                  </TableSortLabel>
                </Tooltip>
              </TableCell>
            ),
            this,
          )}
        </TableRow>
      </TableHead>
    );
  }
}

EnhancedTableHead.propTypes = {
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.string.isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

export default (EnhancedTableHead);
