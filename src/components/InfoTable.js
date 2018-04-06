import React from 'react'
import PropTypes from 'prop-types'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table'
import style from '../styles/style'

const InfoTable = (props) => {
  const {
    fixedHeader,
    tableRowKey,
    tableRowsContent,
    tableStructure,
    tableStyle,
    tableWrapperStyle,
  } = props

  return (
    <Table
      fixedHeader={fixedHeader}
      style={tableStyle}
      wrapperStyle={tableWrapperStyle}
    >
      <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
        <TableRow>
          {tableStructure.map(({ header, headerClass }) => (
            <TableHeaderColumn className={headerClass} key={header}>
              {header}
            </TableHeaderColumn>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody displayRowCheckbox={false} showRowHover>
        {tableRowsContent.map((rowData) => (
          <TableRow key={tableRowKey(rowData)}>
            {tableStructure.map(({ key, display, rowColumnClass }, index) => (
              <TableRowColumn
                className={rowColumnClass}
                key={rowData[key] || index}
              >
                {display(rowData[key], rowData)}
              </TableRowColumn>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

InfoTable.propTypes = {
  fixedHeader: PropTypes.bool,
  tableRowKey: PropTypes.func.isRequired,
  tableRowsContent: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  tableStructure: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      header: PropTypes.string || PropTypes.element,
      headerClass: PropTypes.string,
      display: PropTypes.func,
      rowColumnClass: PropTypes.string,
    })
  ).isRequired,
  tableStyle: PropTypes.shape({}),
  tableWrapperStyle: PropTypes.shape({}),
}

InfoTable.defaultProps = {
  fixedHeader: true,
  tableStyle: style.tableStyle,
  tableWrapperStyle: style.tableStyle,
}

export default InfoTable
