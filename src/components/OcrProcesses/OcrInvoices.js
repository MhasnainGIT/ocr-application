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

function IMGs({ onCheckboxSelection }) {
    const [selected, setSelected] = useState(null);

    // Handle checkbox selection
    const handleCheckboxClick = (id) => {
        setSelected(id);
        if (onCheckboxSelection) {
            onCheckboxSelection(true); // Notify parent that a checkbox is selected
        }
    };

    // Static data for the IMGs table
    const imgs = [
        {
            id: 1,
            imgId: 'IMG-001',
            name: 'Image 1',
            uploadDate: '2024-02-01',
            status: 'Success',
        },
        {
            id: 2,
            imgId: 'IMG-002',
            name: 'Image 2',
            uploadDate: '2024-02-02',
            status: 'Failure',
        },
        {
            id: 3,
            imgId: 'IMG-003',
            name: 'Image 3',
            uploadDate: '2024-02-03',
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
                        <TableCell sx={{ fontWeight: 'bold', fontSize: '1rem' }}>IMG ID</TableCell>
                        <TableCell sx={{ fontWeight: 'bold', fontSize: '1rem' }}>Name</TableCell>
                        <TableCell sx={{ fontWeight: 'bold', fontSize: '1rem' }}>Upload Date</TableCell>
                        <TableCell sx={{ fontWeight: 'bold', fontSize: '1rem' }}>Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {imgs.map((img) => (
                        <TableRow key={img.id}>
                            <TableCell>
                                <Checkbox
                                    checked={selected === img.id}
                                    onChange={() => handleCheckboxClick(img.id)}
                                />
                            </TableCell>
                            <TableCell>{img.id}</TableCell>
                            <TableCell>{img.imgId}</TableCell>
                            <TableCell>{img.name}</TableCell>
                            <TableCell>{img.uploadDate}</TableCell>
                            <TableCell>{img.status}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default IMGs;