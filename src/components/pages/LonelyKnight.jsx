import React from "react";
import Board from "../atoms/Board";
import Knight from "../atoms/Knight";
import Square from "../atoms/Square";
import {observe} from "../atoms/Game"
import { useState } from "react";


export default function LonelyKnight(props) {
    
    
    return (
    <div style={{
        width: "500px",
        height: "500px"
    }}>
        <Board />
    </div>
    );
}