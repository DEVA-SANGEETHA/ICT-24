import React, { useEffect, useState} from 'react'
import { Button, Typography, TextField } from '@mui/material'
const Print = () => {
    var [name, setName] = useState("")
    const Click1 = () => {
        setName("DEVA")
    }
    const Click2 = () => {
        setName("SREELU")
    }
    const Click3 = () => {
        setName("ANJU")
    }
    useEffect(() => {
        setName(" : Name Parayuuuuuu Guyyyzzzeee")
    },[])
  return (
      <div>
          <Typography variant='h3'>HELLOOOOO  {name}</Typography><br />
          <Button variant='contained' onClick={Click1}>DEVA</Button>&nbsp;&nbsp;
          <Button variant='contained' onClick={Click2}>SREELU</Button>&nbsp;&nbsp;
          <Button variant='contained' onClick={Click3}>ANJU</Button>
    </div>
  )
}

export default Print