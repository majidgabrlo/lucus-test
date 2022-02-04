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
import Button from "../components/Button";
import Modal from "../components/Modal";
import { useAppDispatch } from "../store/hooks";
import { setRouteAction, getAllPosts } from "../store/posts/postActions";
import { RootState } from "../store/store";
import AddPost from "../components/AddPost";
import DeletePost from "../components/DeletePost";
import EditPost from "../components/EditPost";

function Page2() {
  const [page, setPage] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState({ mode: "", id: 0 });
  const dispatch = useAppDispatch();
  const { route, postsList } = useSelector((state: RootState) => state.post);

  useEffect(() => {
    getData();
  }, [route]);

  const getData = () => {
    const getData = () => {
      dispatch(getAllPosts(route));
    };
    getData();
  };

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    dispatch(setRouteAction(`?_page=${value}`));
  };

  const openModal = (command: string, id?: number) => {
    setModalOpen(true);
    if (command == "add") {
      setModalMode({ mode: "add", id: 0 });
    }
    if (command == "edit" && id) {
      setModalMode({ mode: "edit", id });
    }
    if (command == "delete" && id) {
      setModalMode({ mode: "delete", id });
    }
  };

  const modalData = (command: string = "add", id?: number) => {
    if (command == "add") {
      return <AddPost refreshData={getData} closeModal={() => setModalOpen(false)} />;
    }
    if (command == "delete" && id) {
      return <DeletePost refreshData={getData} closeModal={() => setModalOpen(false)} id={id} />;
    }
    if (command == "edit" && id) {
      return <EditPost refreshData={getData} closeModal={() => setModalOpen(false)} id={id} />;
    }
  };

  return (
    <div>
      <Button
        className="bg-green-800 text-white px-2 py-1 rounded mb-3"
        onClick={() => openModal("add")}
      >
        Add
      </Button>
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
                  <Button
                    className="bg-blue-400 w-full py-2 mb-1 rounded text-white"
                    onClick={() => openModal("edit", post.id)}
                  >
                    Edit
                  </Button>
                  <Button
                    className="bg-red-700 w-full py-2 rounded text-white"
                    onClick={() => openModal("delete", post.id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Pagination onChange={handleChange} count={Math.floor(100 / 7)} />
      <Modal isOpen={modalOpen} closeModal={() => setModalOpen(false)}>
        <div>{modalData(modalMode.mode, modalMode.id)}</div>
      </Modal>
    </div>
  );
}

export default Page2;
