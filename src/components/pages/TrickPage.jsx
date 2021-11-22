import React, { useState, useEffect } from "react";
import { Link, BrowserRouter as Router, Route, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default () => {
    const allJugglingTricks = useSelector((state) => state.jugglingTrick.value)

    const {numBalls, trickName} = useParams()
    

    const [trick, setTrick] = useState();
 
    useEffect(() => {
        let balltricks = allJugglingTricks[numBalls]
        console.log(balltricks)
        let index;
        allJugglingTricks[numBalls].forEach((trick, i) => {
            if (trick.name === trickName ){
                index = i
            }
        })
        console.log(index)
        setTrick(balltricks[index])
    }, [trickName])

    console.log(trick)

    return (
        <div>
            <h1>{trick?.name}</h1>
            <h2>{trick?.id}</h2>
        </div>
    )
}