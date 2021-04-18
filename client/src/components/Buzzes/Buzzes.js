import React from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import Buzz from "./Buzz/Buzz";
import useStyles from "./Styles";

import { useSelector } from "react-redux";

const Buzzes = ({ currentId, setCurrentId }) => {
  const buzzes = useSelector((state) => state.buzzes);
  const classes = useStyles();

  console.log(buzzes);

  return !buzzes.length ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={3}
    >
      {buzzes.map((buzz) => (
        <Grid item key={buzz._id} xs={12} sm={6}>
          <Buzz buzz={buzz} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Buzzes;
