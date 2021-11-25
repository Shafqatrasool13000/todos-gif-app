import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { InputAdornment } from "@material-ui/core";
import { green } from "@mui/material/colors";
import Icon from "@mui/material/Icon";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import EditIcon from "@mui/icons-material/Edit";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Todo = () => {
  const [InputData, setInputData] = useState("");
  const [items, setItems] = useState([]);
  const [Toggle, setToggle] = useState(true);
  const [EditItems, setEditItems] = useState(null);
  const [DelItems, setDelItems] = useState([]);
  console.log("DelItems", DelItems);

  const inputhandler = (e) => {
    setInputData(e.target.value);
  };
  toast.configure();
  //   Add Handler Data
  const AddHandler = () => {
    if (!InputData) {
      toast.error("Please Filled Empty Field", {
        position: toast.POSITION.TOP_CENTER,
      });
    } else if (InputData && !Toggle) {
      setItems(
        items.map((elem) => {
          if (elem.id === EditItems) {
            return { ...elem, name: InputData };
          }
          return elem;
        })
      );
      setToggle(true);
      setInputData("");
      setEditItems(null);
    } else {
      let idData = { id: new Date().getTime().toString(), name: InputData };
      console.log("id", idData);
      setItems([...items, idData]);
      setInputData("");
    }
  };
  //   Delete Handler
  const deletehandler = (index) => {
    let deletebtn = items.filter((ele) => {
      return index !== ele.id;
    });
    console.log("deletebtn", deletebtn);
    setItems(deletebtn);
    const SaveObject = DelItems.push(deletebtn);
    console.log("SaveObject", SaveObject);
  };
  //   Edit Handler
  //   First Get the id by find method
  const edithandler = (id) => {
    let editItems = items.find((elem) => {
      return elem.id === id;
    });
    //   Second Toggle button when on click
    setToggle(false);
    // Update the value of setinputs
    setInputData(editItems.name);
    // Check which items is selected by using ID
    setEditItems(id);
  };
  return (
    <div>
      <h2>Todo App</h2>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        {Toggle ? (
          <TextField
            id="outlined-search"
            label="Add Task"
            size="small"
            placeholder="Enter Task"
            value={InputData}
            onChange={inputhandler}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Button onClick={AddHandler}>
                    <Icon sx={{ color: green[500] }}>add_circle</Icon>
                  </Button>
                </InputAdornment>
              ),
            }}
          />
        ) : (
          <TextField
            id="outlined-search"
            size="small"
            value={InputData}
            onChange={inputhandler}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Button onClick={edithandler}>
                    <EditIcon />
                  </Button>
                </InputAdornment>
              ),
            }}
          />
        )}

        {items.map((value) => {
          return (
            <div key={value.id}>
              <TextField
                id="outlined-search"
                size="small"
                defaultValue={value.name}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Button onClick={() => deletehandler(value.id)}>
                        <DeleteRoundedIcon />
                      </Button>
                      <Button onClick={() => edithandler(value.id)}>
                        <EditIcon />
                      </Button>
                    </InputAdornment>
                  ),
                }}
              />
            </div>
          );
        })}
      </Box>
    </div>
  );
};

export default Todo;
