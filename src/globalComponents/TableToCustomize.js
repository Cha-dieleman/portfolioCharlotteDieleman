import React from 'react'
import reactId from 'react-id-generator'

import { withStyles } from '@material-ui/core/styles'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from '@material-ui/core'

const styles = () => ({
  tableContainer: {
    width: '100%',
    height: 'auto',
    boxShadow: 'none',
    borderRadius: 0,
    fontFamily: 'helvetica-regular',
    marginBottom: 40
  },
  withBackgroundColor: {
    backgroundColor: '#f5f5f5',
    padding: '15px 15px 0px'
  },
  table: {
    fontFamily: 'helvetica-regular'
  },
  rowTableHead: {
    borderBottom: 'solid 2px #d4d5d7'
  },
  columns: {
    borderBottom: 'solid 1px #d4d5d7',
    padding: '5px 10px 5px 0',
    '&:first-child': {
        width: '30%',
        color: '#8fa3b4'
    },
    '&:last-child': {
        paddingRight: 0,
        width: '10%',
        textAlign: 'right'
    }
  },
  columnsTableHead: {
    color: '#B76E22',
    fontSize: 14,
    borderBottom: 'solid 1px #d4d5d7',
    padding: '0px 10px 0px 0',
    '&:first-child': {
        width: '30%'
    },
    '&:last-child': {
        paddingRight: 0,
        width: '10%',
        textAlign: 'right'
    }
  }
})
// le design de TableToCustomize est codé pour que la dernière colonne du tableau soit en textAlign: 'right'
// et que ses éléments soit alignés sur la fin des bordures de lignes :
// si on ne souhaite pas que les éléments de la dernière ligne du tableau soient alignés à droite,
// il faut créer un field de colonne vide et une valeur vide à la fin des datas envoyées à TableToCustomize
class TableToCustomize extends React.Component {
  constructor(props) {
    super(props)
    this.state={}
  }
 
  render() {
    const { classes, data, setBackgroundColor } = this.props

    // data attendues :
    // autant de colonneFields que de values :
    // const data = [
    //     [
    //         columnField1, // tableHead : champ de la colonne 1
    //         columnField2, // tableHead : champ de la colonne 2
    //         columnField3  // tableHead : champ de la colonne 3
    //     ],
    //     [
    //         [value1,value2,value3], // tableBody : ligne 1 du tableau
    //         [value1,value2,value3], // tableBody : ligne 2 du tableau
    //         [value1,value2,value3]  // tableBody : ligne 3 du tableau
    //     ]
    // ]
   
    return (
      <div>
        <TableContainer component={Paper} className={setBackgroundColor ? `${classes.tableContainer} ${classes.withBackgroundColor}` : classes.tableContainer}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead className={classes.rowTableHead}>
                    <TableRow>
                        {data[0].map((field) => (
                            <TableCell component="th" scope="row" className={classes.columnsTableHead} key={reactId()}>
                                {field}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data[1].map(data => (
                        <TableRow key={reactId()} >
                            {
                                data.map(row => (
                                    <TableCell key={reactId()} className={classes.columns}>
                                        {row}
                                    </TableCell>
                                ))
                            }
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        </div>
    )
  }
}

export default withStyles(styles)(TableToCustomize)