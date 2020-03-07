import React from "react";
import { Grid } from "@material-ui/core";

import { Count } from "./Count";
import { Counter } from "./Counter";

const App = () => {
  return (
    <Grid
      style={{ height: "100vh" }}
      container
      justify="center"
      alignItems="center"
    >
      <Grid item xs={4}>
        <Count />
        <Counter />
      </Grid>
    </Grid>
  );
};

export default App;
