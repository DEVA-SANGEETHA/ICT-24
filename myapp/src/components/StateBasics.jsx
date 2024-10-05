
import React, { useState } from 'react'
import { Button,Typography, TextField } from '@mui/material'
const StateBasics = () => {
  var [name, Setname] = useState("   DEVASANGEETHA")
  var [val,Setvalue]=useState()
    const Handleinput = (e) => {
        console.log(e.target.value)
        Setname(e.target.value)
    }
  const submitHandler = () => {
    Setvalue(name)

  }
  return (
      <div>
          <Typography variant='h3'>WELCOME   {val}</Typography>
      <TextField variant='outlined' onChange={Handleinput} />
      <Button variant='outlined' onClick={submitHandler}>Submit</Button>
    </div>
  )
}

export default StateBasics