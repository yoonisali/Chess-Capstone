import React from "react";
import Tile from "../Tile/Tile";

const verticalAxis = ["1", "2", "3", "4", "5", "6", "7", "8"];
const horizontalAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];

const pieces = [];


//// WHITE PIECES-------------------------------------------------------

// White Pawns
for (let i = 0; i < 8; i++){
  pieces.push({ image: "./assets/img/wPawn.png", x: i, y: 1 });
}

// White Rooks
pieces.push({ image: "./assets/img/wRook.png", x: 7, y: 0});
pieces.push({ image: "./assets/img/wRook.png", x: 0, y: 0});


// White Knights
pieces.push({ image: "./assets/img/wKnight.png", x: 6, y: 0});
pieces.push({ image: "./assets/img/wKnight.png", x: 1, y: 0});

// White Bishops
pieces.push({ image: "./assets/img/wBishop.png", x: 5, y: 0});
pieces.push({ image: "./assets/img/wBishop.png", x: 2, y: 0});

// White King
pieces.push({ image: "./assets/img/wKing.png", x: 4, y: 0});

// White Queen 
pieces.push({ image: "./assets/img/wQueen.png", x: 3, y: 0});



//// BLACK PIECES-------------------------------------------------------

// Black Pawns
for (let i = 0; i < 8; i++){
  pieces.push({ image: "./assets/img/bPawn.png", x: i, y: 6 });
}

// Black Rooks
pieces.push({ image: "./assets/img/bRook.png", x: 0, y: 7});
pieces.push({ image: "./assets/img/bRook.png", x: 7, y: 7});

// Black Knights
pieces.push({ image: "./assets/img/bKnight.png", x: 6, y: 7});
pieces.push({ image: "./assets/img/bKnight.png", x: 1, y: 7});

// Black Bishops
pieces.push({ image: "./assets/img/bBishop.png", x: 5, y: 7});
pieces.push({ image: "./assets/img/bBishop.png", x: 2, y: 7});

// Black King
pieces.push({ image: "./assets/img/bKing.png", x: 4, y: 7});

// Black Queen 
pieces.push({ image: "./assets/img/bQueen.png", x: 3, y: 7});






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
