import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'
import Button from '../Button'

interface tableProps{
    postsList:any[]
    openModal:(command:string, id?:number)=>void
}


function PostsTable(props:tableProps) {
    return (
        <TableContainer
        // style={{ maxHeight: "85vh" }}
        className="overflow-y-auto mb-2 w-full"
        component={Paper}
      >
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="border" align="center">
                Title
              </TableCell>
              <TableCell className="border" align="center">
                UserId
              </TableCell>
              <TableCell className="border" align="center">
                Body
              </TableCell>
              <TableCell className="border" align="center">
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.postsList.map((post) => (
              <TableRow key={post.id}>
                <TableCell className="border" align="right">
                  {post.title}
                </TableCell>
                <TableCell className="border" align="right">
                  {post.userId}
                </TableCell>
                <TableCell className="border" align="right">
                  {post.body}
                </TableCell>
                <TableCell className="border" align="right">
                  <Button
                    className="bg-blue-400 w-full py-2 mb-1 rounded text-white"
                    onClick={() => props.openModal("edit", post.id)}
                  >
                    Edit
                  </Button>
                  <Button
                    className="bg-red-700 w-full py-2 rounded text-white"
                    onClick={() => props.openModal("delete", post.id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )
}

export default PostsTable
