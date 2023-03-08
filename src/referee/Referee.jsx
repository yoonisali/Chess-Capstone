import React from "react";
import { PieceType } from "../components/Chessboard/Chessboard";
import { TeamType } from "../components/Chessboard/Chessboard";

export default class Referee {
  isValidMove(px, py, x, y, type, team) {
    console.log(`Previous Location: (${px}, ${py})`)
    console.log(`Current Location: (${x}, ${y})`)
    console.log(`Piece Type: ${type}`)
    console.log(`Team: ${team}`)
    return true;
  }
}

