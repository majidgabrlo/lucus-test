import { TextField } from "@mui/material";
import React from "react";
import useInput from "../../hooks/useInput";
import axios from "../../axios/post.axios";

interface propsType{
    closeModal:()=>void
    refreshData:()=>void
}

function AddPost(props:propsType) {
  const [title, resetTitle]:any = useInput("");
  const [body, resetBody]:any = useInput("");
  const [userId, resetUserId]:any = useInput(0);
  const sendData =async () => {
    const data=await axios.post("/posts",{title:title.value,body:body.value,userId:userId.value})
    resetBody()
    resetTitle()
    resetUserId()
    
    props.closeModal()
    props.refreshData()
  };

  return (
    <>
      <div className="mb-5">Add Post</div>
      <input
        className="shadow appearance-none border rounded mb-2 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        {...title}
        placeholder="Title"
      />
      <input
        className="shadow appearance-none border rounded mb-2 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        {...body}
        placeholder="Body"
      />
      <input
        className="shadow appearance-none border rounded mb-2 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="number"
        {...userId}
        placeholder="UserId"
      />

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="button"
        onClick={sendData}
      >
        Add
      </button>
    </>
  );
}

export default AddPost;
