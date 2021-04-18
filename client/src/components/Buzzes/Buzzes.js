import React from "react";
import Buzz from "./Buzz/Buzz";
import useStyles from "./Styles";

import { useSelector } from "react-redux";

const Buzzes = () => {
  const buzzes = useSelector((state) => state.buzzes);
  const classes = useStyles();

  console.log(buzzes);

  return (
    <>
      <h1>BUZZES</h1>
      <Buzz />
      <Buzz />
    </>
  );
};

export default Buzzes;
