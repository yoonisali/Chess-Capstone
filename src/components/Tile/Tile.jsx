import React from "react";
import PropTypes from "prop-types"

function Tile(props) {
  const styling = {
    backgroundImage: `url(${props.image})`
  }
  
  if (props.number % 2 === 0) {
    return (
      <div className="tile brown-tile">
        {props.image != null && <div className="chess-piece" style={styling}></div>}
      </div>
    )

  } else {
    return (
      <div className="tile cream-tile">
        {props.image != null && <div className="chess-piece" style={styling}></div>}
      </div>
    )
  }
}

Tile.propTypes = {
  number: PropTypes.number,
  image: PropTypes.string
}

export default Tile;