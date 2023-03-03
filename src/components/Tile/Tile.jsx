import React from "react";
import PropTypes from "prop-types"

function Tile(props) {
  if (props.number % 2 === 0) {
    return <div className="tile brown-tile"><img src={props.image}/></div>
  } else {
    return <div className="tile cream-tile"><img src={props.image}/></div>
  }
}

Tile.propTypes = {
  number: PropTypes.number,
  image: PropTypes.string
}

export default Tile;