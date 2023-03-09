import React from "react";
import { PieceType, TeamType } from "../components/Chessboard/Chessboard";


export default class Referee {

  // tileIsOccupied(x, y, boardState) {
  //   return true;
  // }


  isValidMove(px, py, x, y, type, team, boardState) {
    console.log(`Previous Location: (${px}, ${py})`)
    console.log(`Current Location: (${x}, ${y})`)
    console.log(`Piece Type: ${type}`)
    console.log(`Team: ${team}`)

    if (type === PieceType.PAWN) {
      if (team === TeamType.OUR) {
        if (py === 1) {
        if (px === x && (y - py === 1 || y - py === 2)) {
          // if(!this.tileIsOccupied(x, y, boardState)) {
          //   return true;
          // }
          return true;
        } 
      
      } else {
        if(px === x && y - py === 1) {
          // if(!this.tileIsOccupied(x, y, boardState)) {
          //   return true;
          // }
          return true;
        }
      }
    } else {
      if (py === 6) {
        if (px === x && (y - py === -1 || y - py === -2)) {
          return true;
        }
      } else {
        if(px === x && y - py === -1) {
          return true;
        }
      }
    }
  }
    return false;
  }
}

