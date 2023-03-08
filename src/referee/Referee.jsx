import React from "react";
import { PieceType } from "../components/Chessboard/Chessboard";
import { TeamType } from "../components/Chessboard/Chessboard";

export default class Referee {
  isValidMove(px, py, x, y, type, team) {
    console.log(`Previous Location: (${px}, ${py})`)
    console.log(`Current Location: (${x}, ${y})`)
    console.log(`Piece Type: ${type}`)
    console.log(`Team: ${team}`)

    if (type === PieceType.PAWN) {
      if (team === TeamType.OUR) {
        if (py === 1) {
        if (px === x && (y - py === 1 || y - py === 2)) {
          return true;
        } 
      
      } else {
        if(px === x && y - py === 1) {
          return true;
        }
      }
    }
  }
    return false;
  }
}

