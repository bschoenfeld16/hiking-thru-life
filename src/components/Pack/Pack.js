import React from "react";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import Paper from "@material-ui/core/Paper";
import classes from './Pack.module.css'
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Tooltip from '@material-ui/core/Tooltip';
import TableSortLabel from "@material-ui/core/TableSortLabel";

const headCells = [
    {id: 'name', numeric: false, label: 'name', enableSort: true},
    {id: 'quantity', numeric: true, label: 'Quantity', enableSort: true},
    {id: 'caloriesPerServing', numeric: true, label: 'Calories Per Serving', enableSort: true},
    {id: 'totalCalories', numeric: true, label: 'Total Calories', enableSort: true},
    {id: 'action', numeric: false, label: '', enableSort: false},
];

const desc = (a, b, orderBy) => {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
};

const stableSort = (array, cmp) => {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = cmp(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });
    return stabilizedThis.map(el => el[0]);
};

const getSorting = (order, orderBy) => {
    return order === 'desc' ? (a, b) => desc(a, b, orderBy) : (a, b) => -desc(a, b, orderBy);
};

const EnhancedTableHead = props => {
    const {order, orderBy, onRequestSort} = props;
    const createSortHandler = property => event => {
        onRequestSort(event, property)
    };

    const cells = headCells.map(headCell => (
        <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            sortDirection={orderBy === headCell.id ? order : false}>
            <TableSortLabel
                active={orderBy === headCell.id}
                hideSortIcon={!headCell.enableSort}
                direction={order}
                onClick={createSortHandler(headCell.id)}>
                {headCell.label}
            </TableSortLabel>
        </TableCell>
    ));

    return (
        <TableHead>
            <TableRow>
                {cells}
            </TableRow>
        </TableHead>
    )

};

const EnhancedTable = props => {
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('name');

    const requestSortHandler = (event, property) => {
        const isDesc = orderBy === property && order === 'desc';
        setOrder(isDesc ? 'asc' : 'desc');
        setOrderBy(property);
    };

    return (
        <TableContainer className={classes.TableContainer}>
            <Table stickyHeader size="small">
                <EnhancedTableHead
                    order={order}
                    orderBy={orderBy}
                    onRequestSort={requestSortHandler}
                />
                <TableBody>
                    {stableSort(props.packItems, getSorting(order, orderBy)).map(packItem => (
                        <TableRow hover key={packItem.id}>
                            <TableCell component="th" scope="row">{packItem.name}</TableCell>
                            <TableCell align="right">{packItem.quantity}</TableCell>
                            <TableCell align="right">{packItem.caloriesPerServing}</TableCell>
                            <TableCell align="right">{packItem.totalCalories}</TableCell>
                            <TableCell align="right">
                                <Tooltip title="Edit">
                                    <EditIcon/>
                                </Tooltip>
                                <Tooltip title="Delete">
                                    <DeleteIcon onClick={() => props.itemClicked(packItem.id)}/>
                                </Tooltip>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )

};

const pack = (props) => {

    let totalPackCalories = 0;
    props.packItems.map(packItem => (
        totalPackCalories += packItem.caloriesPerServing * packItem.quantity
    ));

    return (
        <Paper elevation={1} className={classes.PaperWrapper}>
            {props.children}
            <p><strong>Your Pack</strong></p>
            <EnhancedTable
                packItems={props.packItems}
                itemClicked={props.itemClicked}/>
            <p><strong>Total Calories:</strong> {totalPackCalories} </p>
        </Paper>
    )
};

export default pack
