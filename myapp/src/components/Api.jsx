import React ,{useState} from 'react'
import axios from 'axios'
import { Table, TableHead, TableCell, TableRow, TableContainer, TableBody } from '@mui/material'

const Api = () => {
    var [user, setUser] = useState([])
    axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
            console.log(response.data)
            setUser(response.data)
    })
  return (
      <div>
          <TableContainer>
              <Table>
                  <TableHead>
                      <TableRow>
                          <TableCell>NAME</TableCell>
                          <TableCell>USSENAME</TableCell>
                          <TableCell>CITY</TableCell>
                      </TableRow>
                  </TableHead>
                  <TableBody>
                      {user.map((val) => {
                          return(
                      
                      <TableRow>
                                  <TableCell>{val.name}</TableCell>
                                  <TableCell>{val.username}</TableCell>
                                  <TableCell>{ val.address.city} </TableCell>
                              </TableRow>
                          )
                      })}
                     
                         

                  </TableBody>
              </Table>
          </TableContainer>
              
    </div>
  )
}

export default Api