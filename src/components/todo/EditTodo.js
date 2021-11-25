import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { InputAdornment } from "@material-ui/core";
import { green } from "@mui/material/colors";
import Icon from "@mui/material/Icon";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DescriptionIcon from '@mui/icons-material/Description';
import { Link } from "react-router-dom";
const EditTodo = ({ todo }) => {
    const [description, setDescription] = useState("");
    const inputhandler = (e) => {

    };
    const AddHandler = () => {
        // if (!InputData) {
        //     toast.error("Please Filled Empty Field", {
        //         position: toast.POSITION.TOP_CENTER,
        //     });
        // }
    };
    return (
        <>
            <Box my={3}>
                <Box>
                    <h2>Edit Todo</h2>
                    <TextField
                        id="outlined-search"
                        label="Todo"
                        size="small"
                        placeholder="Edit Task"
                        value={todo}
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
                </Box>
                <Box my={3}>
                    <TextField
                        id="outlined-search"
                        label="Description"
                        size="small"
                        placeholder="Enter Description"
                        value={description}
                        onChange={inputhandler}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Button onClick={AddHandler}>
                                        <DescriptionIcon />
                                    </Button>
                                </InputAdornment>
                            ),
                        }}
                    />
                </Box>
                <Link to='/'>
                    <Button variant="contained">
                        Cancel
                    </Button>
                </Link>
            </Box>
        </>
    )
}
export default EditTodo
