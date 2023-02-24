import React from "react";
import Tile from "../Tile/Tile";

const verticalAxis = ["1", "2", "3", "4", "5", "6", "7", "8"];
const horizontalAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];

const pieces = [];

for (let i = 0; i < 8; i++){
  pieces.push({ image: "./assets/img/bPawn.png", x: i, y: 6 });
}

for (let i = 0; i < 8; i++){
  pieces.push({ image: "./assets/img/wPawn.png", x: i, y: 1 });
}

function Chessboard() {
  let board = [];

  for (let j = verticalAxis.length - 1; j >= 0; j--) {
    for (let i = 0; i < horizontalAxis.length; i++) {
      const number = j + i + 2;
      let image = undefined;

      pieces.forEach((p) => {
        if (p.x === i && p.y === j) {
          image = p.image;
        }
      });

      board.push(<Tile 
        number={number} 
        image={image} />);
    }
  }

  return <div id="chessboard">{board}</div>;
}

export default Chessboard;
