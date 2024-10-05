import React from 'react'
import { Button, Typography, TextField } from '@mui/material'
import { useState } from 'react'

const Count = () => {
    var [add, setAdd] = useState(0)
    
    const addNumber = () => {
        setAdd(add+1)
    }
    const subNumber = () => {
        setAdd(add-1)
    }
  return (
      <div>
          <Typography variant='h3'> COUNT  { add}</Typography><br />
          <Button variant='outlined' onClick={addNumber}>+</Button>
          <Button variant='outlined' onClick={subNumber}>-</Button>
    </div>
  )
}

export default Count