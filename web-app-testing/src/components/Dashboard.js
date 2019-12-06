import React from "react";
import Button from "./Button";

const Dashborad = props => {
  return (
    <div className="dashboard">
      <Button type="strike" btnClicked={props.strike} />

      <Button type="ball" btnClicked={props.ball} />

      <Button type="foul" btnClicked={props.foul} />

      <Button type="hit" btnClicked={props.hit} />
    </div>
  );
};

export default Dashborad;
