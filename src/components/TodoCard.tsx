import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { FiTrash2, FiCheckSquare, FiRotateCcw } from "react-icons/fi";
import { useState } from "react";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

interface propsTypes {
  title: string;
  body: string;
  id: string;
  index: number;
  deleteTodo: any;
  editTodo: any;
}

export default function BasicCard(props: propsTypes) {
  const [done, setDone] = useState(false);
  return (
    <Card className="p-2 py-3 rounded-lg" sx={{ minWidth: 275 }}>
      <div className="flex gap-x-2">
        <FiTrash2 size={25} onClick={() => props.deleteTodo(props.id)} />
        <FiCheckSquare
          className={!props.title || !props.body || done ? "hidden" : ""}
          onClick={() => setDone(true)}
          size={25}
        />
        <FiRotateCcw
          onClick={() => setDone(false)}
          size={25}
          className={done ? "" : "hidden"}
        />
      </div>
      <CardContent>
        <div className="mb-1">Title</div>
        <textarea
          className={`mb-5 overflow-y-hidden appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border focus:shadow focus:shadow-outline ${
            done ? "line-through" : ""
          }`}
          value={props.title}
          disabled={done}
          onChange={(e) => props.editTodo(props.index, "title", e.target.value)}
          placeholder="Set Title"
        />

        <div className="mb-1">Body</div>
        <textarea
          className={`appearance-none overflow-y-hidden rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border focus:shadow focus:shadow-outline ${
            done ? "line-through" : ""
          }`}
          disabled={done}
          value={props.body}
          onChange={(e) => props.editTodo(props.index, "body", e.target.value)}
          placeholder="Set Body"
        />
      </CardContent>
    </Card>
  );
}
