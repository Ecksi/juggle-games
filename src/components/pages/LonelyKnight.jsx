import React from "react";
import Board from "../atoms/Board";
import Knight from "../atoms/Knight";
import Square from "../atoms/Square";
import {observe} from "../atoms/Game"


export default function LonelyKnight(props) {
    let knightPosition = [0,0]
    observe((knightPosition) => 
       { return (
            <div style={{
                width: "500px",
                height: "500px"
            }}>
                <Board knightPosition={knightPosition} />
            </div>
       )}
    )
  return (
    <div style={{
        width: "500px",
        height: "500px"
    }}>x
        <Board knightPosition={knightPosition} />
    </div>
  );
}