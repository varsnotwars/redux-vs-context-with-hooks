import React from "react";
import { Grid } from "@material-ui/core";

import Counter from "./Counter";
import Count from "./Count";

const App = () => (
  <Grid
    style={{ height: "100vh" }}
    container
    justify="center"
    alignItems="center"
  >
    <Grid item xs="4">
      <Count />
      <Counter />
    </Grid>
  </Grid>
);

export default App;
