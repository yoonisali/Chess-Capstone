import React, { useRef, useState } from "react";
import Tile from "../Tile/Tile";
import Referee from "../../referee/Referee";

const verticalAxis = ["1", "2", "3", "4", "5", "6", "7", "8"];
const horizontalAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];

const PieceType = {
  PAWN: 0,
  BISHOP: 1, 
  KNIGHT: 2,
  ROOK: 3,
  QUEEN: 4,
  KING: 5
} 

const initialBoardState = [];

//// WHITE PIECES-------------------------------------------------------

// White Pawns
for (let i = 0; i < 8; i++) {
  initialBoardState.push({ image: "./assets/img/wPawn.png", x: i, y: 1, type: PieceType.PAWN});
}

// White Rooks
initialBoardState.push({ image: "./assets/img/wRook.png", x: 7, y: 0, type: PieceType.ROOK});
initialBoardState.push({ image: "./assets/img/wRook.png", x: 0, y: 0, type: PieceType.ROOK });


// White Knights
initialBoardState.push({ image: "./assets/img/wKnight.png", x: 6, y: 0, type: PieceType.KNIGHT});
initialBoardState.push({ image: "./assets/img/wKnight.png", x: 1, y: 0, type: PieceType.KNIGHT });

// White Bishops
initialBoardState.push({ image: "./assets/img/wBishop.png", x: 5, y: 0, type: PieceType.BISHOP });
initialBoardState.push({ image: "./assets/img/wBishop.png", x: 2, y: 0, type: PieceType.BISHOP });

// White King
initialBoardState.push({ image: "./assets/img/wKing.png", x: 4, y: 0, type: PieceType.KING });

// White Queen 
initialBoardState.push({ image: "./assets/img/wQueen.png", x: 3, y: 0, type: PieceType.QUEEN});



//// BLACK PIECES-------------------------------------------------------

// Black Pawns
for (let i = 0; i < 8; i++) {
  initialBoardState.push({ image: "./assets/img/bPawn.png", x: i, y: 6, type: PieceType.PAWN});
}

// Black Rooks
initialBoardState.push({ image: "./assets/img/bRook.png", x: 0, y: 7, type: PieceType.ROOK });
initialBoardState.push({ image: "./assets/img/bRook.png", x: 7, y: 7, type: PieceType.ROOK});

// Black Knights
initialBoardState.push({ image: "./assets/img/bKnight.png", x: 6, y: 7, type: PieceType.KNIGHT});
initialBoardState.push({ image: "./assets/img/bKnight.png", x: 1, y: 7, type: PieceType.KNIGHT });

// Black Bishops
initialBoardState.push({ image: "./assets/img/bBishop.png", x: 5, y: 7, type: PieceType.BISHOP });
initialBoardState.push({ image: "./assets/img/bBishop.png", x: 2, y: 7, type: PieceType.BISHOP });

// Black King
initialBoardState.push({ image: "./assets/img/bKing.png", x: 4, y: 7, type: PieceType.KING });

// Black Queen 
initialBoardState.push({ image: "./assets/img/bQueen.png", x: 3, y: 7, type: PieceType.QUEEN });



function Chessboard() {

  // Moving and Dropping Pieces -------------------------------------
  const chessboardRef = useRef(null)
  const [activePiece, setActivePiece] = useState(null);
  const [gridX, setGridX] = useState(0);
  const [gridY, setGridY] = useState(0);
  const [pieces, setPieces] = useState(initialBoardState);
  const referee = new Referee();


  function grabPiece(e) {
    const element = e.target;
    if (element.classList.contains("chess-piece")) {
      setGridX(Math.floor((e.clientX - chessboardRef.current.offsetLeft) / 100))
      setGridY(Math.abs(Math.ceil((e.clientY - chessboardRef.current.offsetTop - 800) / 100))) 
      const x = e.clientX - 50;
      const y = e.clientY - 50;
      element.style.position = "absolute";
      element.style.left = `${x}px`;
      element.style.top = `${y}px`;

      setActivePiece(element) 
    }
  }

  function movePiece(e) {
    // if (activePiece) {
    //   console.log(e.target);
    // }
    const minX = chessboardRef.current.offsetLeft - 20;
    const minY = chessboardRef.current.offsetTop - 20;
    const maxX = chessboardRef.current.offsetLeft + chessboardRef.current.clientWidth - 70;
    const maxY = chessboardRef.current.offsetTop + chessboardRef.current.clientHeight - 70;
    const x = e.clientX - 50;
    const y = e.clientY - 50;
    activePiece.style.position = "absolute";

    if (x < minX) {
      activePiece.style.left = `${minX}px`;
    } else if (x > maxX) {
      activePiece.style.left = `${maxX}px`;
    } else {
      activePiece.style.left = `${x}px`;
    }

    if (y < minY) {
      activePiece.style.top = `${minY}px`;
    } else if (y > maxY) {
      activePiece.style.top = `${maxY}px`;
    } else {
      activePiece.style.top = `${y}px`;
    }
  }

  function dropPiece(e) {
    if (activePiece) {
      const x = Math.floor((e.clientX - chessboardRef.current.offsetLeft) / 100);
      const y = Math.abs(Math.ceil((e.clientY - chessboardRef.current.offsetTop - 800) / 100));

      

      setPieces((value) => {
        const pieces = value.map((p) => {
          if (p.x === gridX && p.y === gridY) {
            referee.isValidMove(gridX, gridY, x, y, p.type)
            p.x = x;
            p.y = y
          }
          return p;
        })
        return pieces;
      });
      setActivePiece(null)
    }
  }

  // Render -------------------------------------------------------
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

export { Chessboard, PieceType };