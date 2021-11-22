import React, { useState, useEffect } from "react";
import { Link, BrowserRouter as Router, Route, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Trick from "../juggling/Trick";
import { List } from '@material-ui/core';

export default () => {
    const allJugglingTricks = useSelector((state) => state.jugglingTrick.value)

    const {numBalls, trickName} = useParams()
    

    const [trick, setTrick] = useState();
 
    useEffect(() => {
        let balltricks = allJugglingTricks[numBalls]
        let index;
        allJugglingTricks[numBalls].forEach((trick, i) => {
            if (trick.name === trickName ){
                index = i
            }
        })
        setTrick(balltricks[index])
    }, [trickName])

    console.log(trick)

    return (
        <div>
            <h1>{trick?.name}</h1>
            {trick?.animation && <h2>Animation</h2>}
            <img src={trick?.animation}></img>


            <h2>Prerequisites</h2>
        <List>
            {trick?.prereq.map(trickTuple => (
            <Trick trick={allJugglingTricks[trickTuple[0]][trickTuple[1]]} numBalls={trickTuple[0]} />
            ))}
        </List>
        </div>
    )
}