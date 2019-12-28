import React from "react";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import Paper from "@material-ui/core/Paper";
import classes from './Pack.module.css'

const pack = (props) => {
    return (
        <div className={classes.Pack}>
            <p><strong>Your Pack</strong></p>
            <Paper>
                <TableContainer style={{maxHeight: '200'}} component={Paper}>
                    <Table stickyHeader size="small" aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Food</TableCell>
                                <TableCell align="right">Quantity</TableCell>
                                <TableCell align="right">Total Calories</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {props.packItems.map(packItem => (
                                <TableRow hover key={packItem.id} onClick={() => props.itemClicked(packItem.id)}>
                                    <TableCell component="th" scope="row">{packItem.name}</TableCell>
                                    <TableCell align="right">{packItem.quantity}</TableCell>
                                    <TableCell align="right">{packItem.caloriesPerServing * packItem.quantity}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
            <p>Total</p>
        </div>
    )
};

export default pack
