import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CssBaseline, Container } from '@mui/material';
import Sidebar from './components/sidebar/Sidebar';
import Dashboard from './components/dashboard/dashboard';
import Header from './components/header/header';
import OCRProcesses from './components/OcrProcesses/OcrProcesses';

import Vendor from './components/OcrProcesses/ocrVendor';

function App() {
  const [open, setOpen] = useState(true);

  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <CssBaseline />
        <Header />
        <Sidebar open={open} handleDrawerOpen={handleDrawerOpen} />
        <Container style={{ marginTop: '80px', padding: '20px' }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/ocr-processes" element={<OCRProcesses />} />
            <Route path="/ocr-vendors" element={<Vendor />} />
            <Route path="/ocr-processes" element={<OCRProcesses />} />
            <Route path="/ocr-processes" element={<OCRProcesses />} />
            
          </Routes>
        </Container>
      </div>
    </Router>
  );
}

export default App;