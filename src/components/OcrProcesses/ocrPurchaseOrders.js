import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Checkbox,
  Paper,
} from '@mui/material';

function PurchaseOrders({ onCheckboxSelection }) {
  const [selected, setSelected] = useState(null);

  // Handle checkbox selection
  const handleCheckboxClick = (id) => {
    setSelected(id);
    onCheckboxSelection(true); // Notify parent that a checkbox is selected
  };

  // Static data for the purchase orders table
  const purchaseOrders = [
    {
      id: 1,
      poId: 'PO-001',
      name: 'Purchase Order 1',
      type: 'Manual',
      transDate: '2023-10-01',
      status: 'Success',
    },
    {
      id: 2,
      poId: 'PO-002',
      name: 'Purchase Order 2',
      type: 'Automated',
      transDate: '2023-10-02',
      status: 'Fail',
    },
    {
      id: 3,
      poId: 'PO-003',
      name: 'Purchase Order 3',
      type: 'Manual',
      transDate: '2023-10-03',
      status: 'Success',
    },
  ];

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: 'bold', fontSize: '1rem' }}>Select</TableCell>
            <TableCell sx={{ fontWeight: 'bold', fontSize: '1rem' }}>S.No</TableCell>
            <TableCell sx={{ fontWeight: 'bold', fontSize: '1rem' }}>PO ID</TableCell>
            <TableCell sx={{ fontWeight: 'bold', fontSize: '1rem' }}>Name</TableCell>
            <TableCell sx={{ fontWeight: 'bold', fontSize: '1rem' }}>Type</TableCell>
            <TableCell sx={{ fontWeight: 'bold', fontSize: '1rem' }}>Trans Date</TableCell>
            <TableCell sx={{ fontWeight: 'bold', fontSize: '1rem' }}>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {purchaseOrders.map((po) => (
            <TableRow key={po.id}>
              <TableCell>
                <Checkbox
                  checked={selected === po.id}
                  onChange={() => handleCheckboxClick(po.id)}
                />
              </TableCell>
              <TableCell>{po.id}</TableCell>
              <TableCell>{po.poId}</TableCell>
              <TableCell>{po.name}</TableCell>
              <TableCell>{po.type}</TableCell>
              <TableCell>{po.transDate}</TableCell>
              <TableCell>{po.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default PurchaseOrders;