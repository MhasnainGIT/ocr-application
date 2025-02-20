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

function Vendor({ onCheckboxSelection }) {
  const [selected, setSelected] = useState(null);

  // Handle checkbox selection
  const handleCheckboxClick = (id) => {
    setSelected(id);
    onCheckboxSelection(true); // Notify parent that a checkbox is selected
  };

  // Static data for the vendors table
  const vendors = [
    {
      id: 1,
      vendorId: 'voo1',
      name: 'Vendor 1',
      address: 'Address 1',
      transDate: '2023-10-01',
      phNo: '123-456-7890',
      contactPerson: 'John Doe',
      contactPersonPhNo: '987-654-3210',
    },
    {
      id: 2,
      vendorId: 'voo2',
      name: 'Vendor 2',
      address: 'Address 2',
      transDate: '2023-10-02',
      phNo: '234-567-8901',
      contactPerson: 'Jane Smith',
      contactPersonPhNo: '876-543-2109',
    },
    {
      id: 3,
      vendorId: 'voo3',
      name: 'Vendor 3',
      address: 'Address 3',
      transDate: '2023-10-03',
      phNo: '345-678-9012',
      contactPerson: 'Alice Johnson',
      contactPersonPhNo: '765-432-1098',
    },
  ];

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: 'bold', fontSize: '1rem' }}>Select</TableCell>
            <TableCell sx={{ fontWeight: 'bold', fontSize: '1rem' }}>S.No</TableCell>
            <TableCell sx={{ fontWeight: 'bold', fontSize: '1rem' }}>Vendor ID</TableCell>
            <TableCell sx={{ fontWeight: 'bold', fontSize: '1rem' }}>Name</TableCell>
            <TableCell sx={{ fontWeight: 'bold', fontSize: '1rem' }}>Address</TableCell>
            <TableCell sx={{ fontWeight: 'bold', fontSize: '1rem' }}>Trans Date</TableCell>
            <TableCell sx={{ fontWeight: 'bold', fontSize: '1rem' }}>Ph No</TableCell>
            <TableCell sx={{ fontWeight: 'bold', fontSize: '1rem' }}>Contact Person</TableCell>
            <TableCell sx={{ fontWeight: 'bold', fontSize: '1rem' }}>Contact Person Ph No</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {vendors.map((vendor) => (
            <TableRow key={vendor.id}>
              <TableCell>
                <Checkbox
                  checked={selected === vendor.id}
                  onChange={() => handleCheckboxClick(vendor.id)}
                />
              </TableCell>
              <TableCell>{vendor.id}</TableCell>
              <TableCell>{vendor.vendorId}</TableCell>
              <TableCell>{vendor.name}</TableCell>
              <TableCell>{vendor.address}</TableCell>
              <TableCell>{vendor.transDate}</TableCell>
              <TableCell>{vendor.phNo}</TableCell>
              <TableCell>{vendor.contactPerson}</TableCell>
              <TableCell>{vendor.contactPersonPhNo}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Vendor;