import React from 'react'
import { TextField,Button } from '@mui/material';

const Signup = () => {
  return (
      <div>
      <h1>SING UP FORM</h1>
      <TextField id="filled-basic" label="Name " variant="outlined" /><br />
      <TextField id="filled-basic" label="E-mail" variant="outlined" /><br />

      <TextField id="filled-basic" label="Password" variant="outlined" /><br />
      <TextField id="filled-basic" label="Phone Number" variant="outlined" /><br />

      <Button variant="text">Sign-up</Button><br />
    </div>
  )
}

export default Signup