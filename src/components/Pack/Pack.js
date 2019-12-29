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

    let totalPackCalories = 0;
    props.packItems.map(packItem => (
        totalPackCalories += packItem.caloriesPerServing * packItem.quantity
    ));

    return (
        <Paper elevation={1} className={classes.PaperWrapper}>
            {props.children}
            <p><strong>Your Pack</strong></p>
            <p style={{fontSize: '12px'}}>Click on a row to delete that item</p>
            <TableContainer className={classes.TableContainer}>
                <Table stickyHeader size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell>Item</TableCell>
                            <TableCell align="right">Quantity</TableCell>
                            <TableCell align="right">Calories Per Serving</TableCell>
                            <TableCell align="right">Total Calories</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.packItems.map(packItem => (
                            <TableRow hover key={packItem.id} onClick={() => props.itemClicked(packItem.id)}>
                                <TableCell component="th" scope="row">{packItem.name}</TableCell>
                                <TableCell align="right">{packItem.quantity}</TableCell>
                                <TableCell align="right">{packItem.caloriesPerServing}</TableCell>
                                <TableCell align="right">{packItem.caloriesPerServing * packItem.quantity}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <p><strong>Total Calories:</strong> {totalPackCalories} </p>
        </Paper>
        // </div>
    )
};

export default pack
