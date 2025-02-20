import React, { useState } from 'react';
import { Button, Grid, Paper, Typography } from '@mui/material';
import Vendor from './ocrVendor';
import PurchaseOrders from './ocrPurchaseOrders';
import GRNs from './OcrGRNs';
import Invoices from './OcrInvoices';

function OCRProcesses() {
  // State to track the active component
  const [activeComponent, setActiveComponent] = useState('vendor');

  // State to track checkbox selections
  const [isVendorSelected, setIsVendorSelected] = useState(false);
  const [isPurchaseOrderSelected, setIsPurchaseOrderSelected] = useState(false);
  const [isGRNSelected, setIsGRNSelected] = useState(false);

  // Handle button clicks
  const handleButtonClick = (component) => {
    setActiveComponent(component);
  };

  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" style={{ marginBottom: '20px', fontWeight: 'bold', color: '#1976d2' }}>
        OCR Processes
      </Typography>

      {/* Buttons for Vendor, Purchase Orders, GRNs, Invoices */}
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <Button
            variant="contained"
            fullWidth
            onClick={() => handleButtonClick('vendor')}
            disabled={false} // Vendor is always enabled
          >
            Vendor
          </Button>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Button
            variant="contained"
            fullWidth
            onClick={() => handleButtonClick('purchaseOrders')}
            disabled={!isVendorSelected} // Enabled only if Vendor is selected
          >
            Purchase Orders
          </Button>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Button
            variant="contained"
            fullWidth
            onClick={() => handleButtonClick('grns')}
            disabled={!isPurchaseOrderSelected} // Enabled only if Purchase Orders is selected
          >
            GRNs
          </Button>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Button
            variant="contained"
            fullWidth
            onClick={() => handleButtonClick('invoices')}
            disabled={!isGRNSelected} // Enabled only if GRNs is selected
          >
            Invoices
          </Button>
        </Grid>
      </Grid>

      {/* Render the active component */}
      <Paper style={{ marginTop: '20px', padding: '20px' }}>
        {activeComponent === 'vendor' && (
          <Vendor onCheckboxSelection={(selected) => setIsVendorSelected(selected)} />
        )}
        {activeComponent === 'purchaseOrders' && (
          <PurchaseOrders onCheckboxSelection={(selected) => setIsPurchaseOrderSelected(selected)} />
        )}
        {activeComponent === 'grns' && (
          <GRNs onCheckboxSelection={(selected) => setIsGRNSelected(selected)} />
        )}
        {activeComponent === 'invoices' && <Invoices />}
      </Paper>
    </div>
  );
}

export default OCRProcesses;