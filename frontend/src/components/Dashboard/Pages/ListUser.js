import * as React from 'react';

import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Button, Typography } from '@mui/material';

function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(
    0,
    'Francisco',
    'Alves',
    'Student',
    'alves@teste.com',
  ),
  createData(
    1,
    'Vitor',
    'Alves',
    'Student',
    'vitor@teste.com',
  ),
  createData(
    3,
    'Davi',
    'Gomes',
    'Student',
    'davi@teste.com',
  ),
  createData(
    4,
    'Wesley',
    'Nascimento',
    'Teacher',
    'wesley@teste.com',
  ),
  createData(
    4,
    'Leticia',
    'Farias',
    'Admin',
    'leticia@teste.com',
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function ListUser() {
  return (
    <React.Fragment>
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        List User
      </Typography>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Email</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell align="right">
                <Button to="#" color="inherit">
                  Edit
                </Button>
                <Button to="#" color="inherit">
                  Delet
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more listuser
      </Link>
    </React.Fragment>
  );
}