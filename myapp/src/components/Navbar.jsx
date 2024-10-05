import React from 'react'
import { AppBar, Toolbar, Button,Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
      <div>
          <AppBar>
              <Toolbar>
                  
                  <Typography variant="h6" sx={{ flexGrow:1}} >
                    HOME
                  </Typography>
                  <Link to='/lg'>
                      <Button color="error">Login</Button>
                  </Link>
                  <Link to='/sp'>
                      <Button color="error">Sign-Up</Button></Link>
                  <Link to='/sb'>
            <Button color="error">State</Button></Link>
          <Link to='/add'>
            <Button color='error'>Count</Button>
          </Link>
          <Link to='/p'>
            <Button color='error'>Print</Button>
          </Link>
          <Link to='/api'>
            <Button color='error'>Api</Button>
          </Link>
          <Link to='/poke'>
            <Button color='error'>Pockeymon</Button>
          </Link>
              </Toolbar>
          </AppBar>
    </div>
  )
}

export default Navbar