import { ListItem, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
import React from 'react'

export default function Trick({trick, numBalls}) {

    return (
        <ListItem key={numBalls + trick.id} style= {{display: "flex"}}>
            <Link to={`/jugglingTricks/${numBalls}/${trick.name}`}>
            <Button variant="contained">{trick.name}</Button>
            </Link>
        </ListItem>
    )
}