import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';

// Static data for the cards
const cardData = [
  { title: 'No of PO', value: '5' },
  { title: 'No of GRN', value: '3' },
  { title: 'No of Invoice', value: '7' },
  { title: 'No of Failure GRN', value: '2' },
  { title: 'No of Failure Invoice', value: '1' },
];

// Card component
function Card({ title, value }) {
  return (
    <Paper
      elevation={3}
      style={{
        padding: '20px',
        textAlign: 'center',
        backgroundColor: '#f5f5f5',
        borderRadius: '10px',
      }}
    >
      <Typography variant="h6" style={{ fontWeight: 'bold', color: '#333' }}>
        {title}
      </Typography>
      <Typography variant="h4" style={{ color: '#1976d2', marginTop: '10px' }}>
        {value}
      </Typography>
    </Paper>
  );
}

// Dashboard component
function Dashboard() {
  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" style={{ marginBottom: '20px', fontWeight: 'bold', color: '#1976d2' }}>
        Dashboard
      </Typography>
      <Grid container spacing={3}>
        {cardData.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Card title={card.title} value={card.value} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Dashboard;