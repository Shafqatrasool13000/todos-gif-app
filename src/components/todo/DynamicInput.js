import React, { useState } from 'react'
import { Button, InputAdornment, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { DeleteOutlineRounded } from '@mui/icons-material'
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';
const DynamicInput = () => {
    const [input, setInput] = useState([])
    const [deleted, setDeleted] = useState([])
    const inputHandle = () => {
        setInput([...input, ""])
    }
    console.log('input', input)
    const handleChange = (e, index) => {
        input[index] = e.target.value
        setInput([...input])
    }
    const deleteItem = (id) => {
        const update = input.filter((e, i) => i != id);
        const deletedItem = input.find(((e, i) => i === id))

        setDeleted([...deleted, deletedItem])

        // console.log("update",update)
        console.log("delete", deleted)
        setInput(update)
    }
    return (
        <>
            <Box mt={2}>
                <Button variant="contained" onClick={inputHandle}>
                    Add Todo
                </Button>
                {
                    input.map((e, index) => <Box my={2} key={index}>
                        <TextField
                            id="todo"
                            label="Add"
                            focused={true}
                            value={e}
                            onChange={(event) => handleChange(event, index)}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Button onClick={() => deleteItem(index)}>
                                            <DeleteOutlineRounded color="primary" />
                                        </Button>
                                        <Link to='/edit'>
                                            <EditIcon />
                                        </Link>
                                    </InputAdornment >
                                ),
                            }}
                        />
                    </Box>)
                }
            </Box>
            <Box mt={5}>
            <Typography variant="h4" color="initial">Deleted Todos</Typography>
            {deleted.map((e, i) => {
                return (
                   <Box key={i}>
                    <Typography variant="h4" color="initial" >{e}</Typography>
                   </Box>
                )
            })}
            </Box>
        </>
    )
}
export default DynamicInput
