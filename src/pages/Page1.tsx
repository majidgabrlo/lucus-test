import { Pagination } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Button from "../components/Button";
import PostsTable from "../components/posts/PostsTable";

import Modal from "../components/Modal";
import ShowError from "../components/ShowError";
import { useAppDispatch } from "../store/hooks";
import { getAllPosts } from "../store/posts/postActions";
import { RootState } from "../store/store";
import AddPost from "../components/posts/AddPost";
import DeletePost from "../components/posts/DeletePost";
import EditPost from "../components/posts/EditPost";
import useDebounce from "../hooks/useDebouncer";

function Page2() {
  const [page, setPage] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState({ mode: "", id: 0 });
  const [filterByUser, setFilterByUser] = useState(0);
  const debouncedUserId = useDebounce<number>(filterByUser, 700);
  const dispatch = useAppDispatch();
  const { postsList, error } = useSelector((state: RootState) => state.post);

  const getData = (
    pageNumber: number = page,
    userId: number = debouncedUserId
  ) => {
    dispatch(getAllPosts({ userId, page: pageNumber }));
  };

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  useEffect(() => {
    getData(page, debouncedUserId);
  }, [page]);

  useEffect(() => {
    getData();
  }, [debouncedUserId]);

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
    if (command == "add")
      return (
        <AddPost refreshData={getData} closeModal={() => setModalOpen(false)} />
      );
    if (command == "delete" && id)
      return (
        <DeletePost
          refreshData={getData}
          closeModal={() => setModalOpen(false)}
          id={id}
        />
      );

    if (command == "edit" && id)
      return (
        <EditPost
          refreshData={getData}
          closeModal={() => setModalOpen(false)}
          id={id}
        />
      );
  };

  if (error) return <ShowError onRetry={getData}>{error}</ShowError>;

  return (
    <div className="flex flex-col" style={{ maxHeight: "95vh" }}>
      <div className="flex gap-x-3 mb-1">
        <Button
          className="bg-green-800 text-white px-2 py-1 rounded"
          onClick={() => openModal("add")}
        >
          Add
        </Button>

        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          value={filterByUser ? filterByUser : ""}
          onChange={(e) => setFilterByUser(Number(e.target.value))}
          placeholder="Title"
        />
      </div>

      <PostsTable postsList={postsList} openModal={openModal} />

      <Pagination
        className=""
        onChange={handleChange}
        count={Math.floor(100 / 7)}
      />
      <Modal isOpen={modalOpen} closeModal={() => setModalOpen(false)}>
        <div>{modalData(modalMode.mode, modalMode.id)}</div>
      </Modal>
    </div>
  );
}

export default Page2;
