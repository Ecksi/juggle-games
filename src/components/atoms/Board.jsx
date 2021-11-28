import React from "react"
import Square from "./Square"
import Knight from "./Knight"
import {canMoveKnight, moveKnight} from './Game'
import { useState } from "react";
import { useEffect } from "react";





export default function Board() {

  const [knightPosition, setKnightPosition] = useState([1,7]);

  useEffect(() =>{
      console.log("knightPosition in UseEffect")
      console.log(knightPosition)
  }, [knightPosition])

  function renderSquare(i, [knightX, knightY]) {
    const x = i % 8
    const y = Math.floor(i / 8)
    const isKnightHere = x === knightX && y === knightY
    const black = (x + y) % 2 === 1
    const piece = isKnightHere ? <Knight /> : null
    return <div onClick= {() => handleSquareClick(x, y)} key={i} style={{ width: '12.5%', height: '12.5%' }}>
    <Square black={black}>{piece}</Square>
  </div>
  }

  function handleSquareClick(toX, toY) {
    console.log("In handle click")
    console.log(toX +"," + toY)
    setKnightPosition([toX, toY])
  }

  const squares = []
  for (let i = 0; i < 64; i++) {
    squares.push(renderSquare(i, knightPosition))
  }

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexWrap: 'wrap'
      }}
    >
      {squares}
    </div>
  )
}