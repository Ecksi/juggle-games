import { ListItem, Button } from '@material-ui/core'
import React from 'react'

export default function Trick({trick}) {

    return (
        <ListItem style= {{display: "flex"}}>
            <Button variant="contained">{trick.name}</Button>
        </ListItem>
    )
}