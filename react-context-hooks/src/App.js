import React from "react";
import { Grid } from "@material-ui/core";

import { Count } from "./Count";
import { Counter } from "./Counter";
import { Status } from "./Status";
import { StatusToggler } from "./StatusToggler";

const App = () => (
  <Grid
    style={{ height: "100vh" }}
    container
    justify="center"
    alignItems="center"
  >
    <Grid item xs={4}>
      <Status />
      <StatusToggler />
      <Count />
      <Counter />
    </Grid>
  </Grid>
);

export default App;
