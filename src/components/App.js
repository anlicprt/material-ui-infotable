import Chance from 'chance'
import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import InfoTable from './InfoTable'
import styleCss from '../styles/style.css'

const rowsContentMapper = () => {
  const contents = []
  const chance = new Chance()

  for (let i = 0; i < 100; i += 1) {
    contents.push({
      id: i,
      name: chance.name(),
      age: chance.integer({ min: 18, max: 100 }),
    })
  }
  return contents
}

const rowsContent = rowsContentMapper()

const structure = [
  {
    key: 'id',
    header: 'ID',
    headerClass: styleCss.headers,
    display: (colValue) => colValue,
    rowColumnClass: styleCss.rowHeight,
  },
  {
    key: 'name',
    header: 'Name',
    headerClass: styleCss.headers,
    display: (colValue) => colValue,
    rowColumnClass: styleCss.rowHeight,
  },
  {
    key: 'age',
    header: 'Age',
    headerClass: styleCss.headers,
    display: (colValue) => colValue,
    rowColumnClass: styleCss.rowHeight,
  },
]

const App = () => (
  <div className={styleCss.container}>
    <MuiThemeProvider>
      <InfoTable
        tableStructure={structure}
        tableRowKey={(rowData) => rowData.id}
        tableRowsContent={rowsContent}
      />
    </MuiThemeProvider>
  </div>
)

export default App
