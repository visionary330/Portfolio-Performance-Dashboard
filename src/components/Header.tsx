import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { Calendar } from 'lucide-react';
import { holdingsData } from '../data/holdingsData'; // Adjust path as needed

const Header: React.FC = () => {

  const lastUpdated = new Date(
    Math.max(...holdingsData.map(h => new Date(h.lastUpdated).getTime()))
  );

  const lastUpdatedString = lastUpdated.toLocaleDateString();

  return (
    <AppBar position="static">
      <Toolbar
        className="
      w-[95%] lg:w-3/4 mx-auto
      flex justify-between items-center
      [max-width:450px]:grid [max-width:450px]:gap-2
    "
      >
        <Typography variant="h6">
          Portfolio Dashboard
        </Typography>

        <Typography
          className="
        flex items-center space-x-2
        [max-width:450px]:justify-start
      "
        >
          <Calendar className="w-4 h-4" />
          <span>Last updated: {lastUpdatedString}</span>
        </Typography>
      </Toolbar>
    </AppBar>


  );
};

export default Header;