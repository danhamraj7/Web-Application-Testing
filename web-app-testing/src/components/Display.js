import React from "react";

const Display = props => {
  return (
    <div className="display">
      <p>{props.displayType}</p>

      <span>{props.displayCount}</span>
    </div>
  );
};

export default Display;
