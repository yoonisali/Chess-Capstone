import React from "react";
import PropTypes from "prop-types"

function Tile(props) {
  if (props.number % 2 === 0) {
    return <div className="tile green-tile"><img src="./assets/img/bPawn.png"/></div>
  } else {
    return <div className="tile white-tile"><img src="./assets/img/wPawn.png"/></div>
  }
}

Tile.propTypes = {
  number: PropTypes.number
}

export default Tile;