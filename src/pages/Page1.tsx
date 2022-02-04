import {
  Pagination,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "../axios/post.axios";
import { useAppDispatch } from "../store/hooks";
import { setRouteAction, getAllPosts } from "../store/posts/postActions";
import { RootState } from "../store/store";
function Page2() {
  const [page, setPage] = useState(1);
  const dispatch = useAppDispatch();
  const { route, postsList } = useSelector((state: RootState) => state.post);

  useEffect(() => {
    const getData = () => {
      dispatch(getAllPosts(route));
    };
    getData();
  }, [route]);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    dispatch(setRouteAction(`?_page=${value}`));
  };

  return (
    <div>
      <TableContainer
        style={{ maxHeight: "90vh" }}
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
            {postsList.map((post) => (
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
                  Actions
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination onChange={handleChange} count={Math.floor(100/7)} />
    </div>
  );
}

export default Page2;
