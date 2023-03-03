import React, { useRef } from "react";
import Tile from "../Tile/Tile";

const verticalAxis = ["1", "2", "3", "4", "5", "6", "7", "8"];
const horizontalAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];

const pieces = [];


//// WHITE PIECES-------------------------------------------------------

// White Pawns
for (let i = 0; i < 8; i++) {
  pieces.push({ image: "./assets/img/wPawn.png", x: i, y: 1 });
}

// White Rooks
pieces.push({ image: "./assets/img/wRook.png", x: 7, y: 0 });
pieces.push({ image: "./assets/img/wRook.png", x: 0, y: 0 });


// White Knights
pieces.push({ image: "./assets/img/wKnight.png", x: 6, y: 0 });
pieces.push({ image: "./assets/img/wKnight.png", x: 1, y: 0 });

// White Bishops
pieces.push({ image: "./assets/img/wBishop.png", x: 5, y: 0 });
pieces.push({ image: "./assets/img/wBishop.png", x: 2, y: 0 });

// White King
pieces.push({ image: "./assets/img/wKing.png", x: 4, y: 0 });

// White Queen 
pieces.push({ image: "./assets/img/wQueen.png", x: 3, y: 0 });



//// BLACK PIECES-------------------------------------------------------

// Black Pawns
for (let i = 0; i < 8; i++) {
  pieces.push({ image: "./assets/img/bPawn.png", x: i, y: 6 });
}

// Black Rooks
pieces.push({ image: "./assets/img/bRook.png", x: 0, y: 7 });
pieces.push({ image: "./assets/img/bRook.png", x: 7, y: 7 });

// Black Knights
pieces.push({ image: "./assets/img/bKnight.png", x: 6, y: 7 });
pieces.push({ image: "./assets/img/bKnight.png", x: 1, y: 7 });

// Black Bishops
pieces.push({ image: "./assets/img/bBishop.png", x: 5, y: 7 });
pieces.push({ image: "./assets/img/bBishop.png", x: 2, y: 7 });

// Black King
pieces.push({ image: "./assets/img/bKing.png", x: 4, y: 7 });

// Black Queen 
pieces.push({ image: "./assets/img/bQueen.png", x: 3, y: 7 });



function Chessboard() {

  // Moving and Dropping Pieces -------------------------------------
  const chessboardRef = useRef(null)

  let activePiece = null;

  function grabPiece(e) {
    const element = e.target;
    if (element.classList.contains("chess-piece")) {
      console.log(e.target);
    }
    const x = e.clientX - 50;
    const y = e.clientY - 50;
    element.style.position = "absolute";
    element.style.left = `${x}px`;
    element.style.top = `${y}px`;

    activePiece = element;
  }

  function movePiece(e) {
    if (activePiece) {
      console.log(e.target);
    }
    const minX = chessboardRef.current.offsetLeft - 20;
    const minY = chessboardRef.current.offsetTop - 20;
    const x = e.clientX - 50;
    const y = e.clientY - 50;
    activePiece.style.position = "absolute";
    // activePiece.style.left = `${x}px`;
    // activePiece.style.top = `${y}px`;

    if(x < minX) {
      activePiece.style.left = `${minX}px`;
    } else {
      activePiece.style.left = `${x}px`;
    }

    if(y < minY) {
      activePiece.style.top = `${minY}px`;
    } else {
      activePiece.style.top = `${y}px`;
    }
  }

  function dropPiece(e) {
    if (activePiece) {
      activePiece = null;
    }
  }

// Render ------------------------------------------------------
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
        image={image}
        key={`${j}, ${i}`} />);
    }
  }

  return (
    <div
      onMouseMove={movePiece}
      onMouseDown={grabPiece}
      onMouseUp={dropPiece}
      id="chessboard"
      ref={chessboardRef}
      >
      {board}
    </div>
  )
}

export default Chessboard;
