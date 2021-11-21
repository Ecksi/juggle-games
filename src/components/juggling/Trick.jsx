import { ListItem } from '@material-ui/core'
import React from 'react'

export default function Trick({trick}) {

    return (
        <ListItem style= {{display: "flex"}}>
            <p>{trick.name}</p>
            <ul>
                {trick.pre.map( id => (
                    "prerequisites: " + id
                ))}
            </ul>
        </ListItem>
    )
}