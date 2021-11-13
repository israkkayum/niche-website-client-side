import React from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';


const ManageAllOrder = (props) => {

    const {title, name, email, price, status, _id} = props.product

    return (
        <TableRow
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
      >
        <TableCell component="th" scope="row">
          {name}
        </TableCell>
        <TableCell align="left">{email}</TableCell>
        <TableCell align="left">{title}</TableCell>
        <TableCell align="left">$ {price}</TableCell>
        <TableCell align="left">
        <Button sx={{mb: 1}} onClick={() => props.handleStatusProduct(_id)} variant="contained">{status}</Button> <br />
        <Button onClick={() => props.handleRemoveProduct(_id)} variant="contained">Remove</Button>

        </TableCell>
      </TableRow>
    );
};

export default ManageAllOrder;