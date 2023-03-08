import React from "react";
import { PieceType } from "../components/Chessboard/Chessboard";

export default class Referee {
  isValidMove(px, py, x, y, type) {
    console.log(`Previous Location: (${px}, ${py})`)
    console.log(`Current Location: (${x}, ${y})`)
    console.log(`Piece Type: ${type}`)
    return true;
  }
}

