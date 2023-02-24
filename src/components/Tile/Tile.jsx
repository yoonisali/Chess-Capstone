import React from "react";
import PropTypes from "prop-types"

function Tile(props) {
  if (props.number % 2 === 0) {
    return <div className="tile green-tile">Hi</div>
  } else {
    return <div className="tile white-tile">Hello</div>
  }
}

Tile.propTypes = {
  number: PropTypes.number
}

export default Tile;