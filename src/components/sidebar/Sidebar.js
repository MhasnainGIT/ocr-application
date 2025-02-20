import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Collapse, IconButton } from '@mui/material';
import { Dashboard, Description, ExpandLess, ExpandMore, StarBorder, ListAlt, Menu } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

function Sidebar({ open, handleDrawerOpen }) {
  const [mastersOpen, setMastersOpen] = useState(false);
  const navigate = useNavigate();

  const handleMastersClick = () => {
    setMastersOpen(!mastersOpen);
  };

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <Drawer
      variant="permanent"
      open={open}
      sx={{
        width: open ? 60 : 60,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: open ? 240 : 60,
          // boxSizing: 'border-box',
          marginTop: '64px', // Adjust for header height
        },
      }}
    >
      <IconButton onClick={handleDrawerOpen} sx={{ margin: '10px' }}>
        <Menu />
      </IconButton>
      <List>
        <ListItem button onClick={() => handleNavigation('/')}>
          <ListItemIcon><Dashboard /></ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button onClick={() => handleNavigation('/ocr-processes')}>
          <ListItemIcon><Description /></ListItemIcon>
          <ListItemText primary="OCR Processes" />
        </ListItem>
        <ListItem button onClick={handleMastersClick}>
          <ListItemIcon><ListAlt /></ListItemIcon>
          <ListItemText primary="Masters" />
          {mastersOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={mastersOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button onClick={() => handleNavigation('/masters-vendors')} sx={{ pl: 4 }}>
              <ListItemIcon><StarBorder /></ListItemIcon>
              <ListItemText primary="Vendors" />
            </ListItem>
            <ListItem button onClick={() => handleNavigation('/ocr-items')} sx={{ pl: 4 }}>
              <ListItemIcon><StarBorder /></ListItemIcon>
              <ListItemText primary="Items" />
            </ListItem>
            <ListItem button onClick={() => handleNavigation('/ocr-procurement-categories')} sx={{ pl: 4 }}>
              <ListItemIcon><StarBorder /></ListItemIcon>
              <ListItemText primary="Procurement Categories" />
            </ListItem>
          </List>
        </Collapse>
      </List>
    </Drawer>
  );
}

export default Sidebar;