import React from "react";
import { connect } from "react-redux";
import { ButtonGroup, Button } from "@material-ui/core";

import { increment, decrement } from "./actions/actionCreators";

const counter = ({ increment, decrement }) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }}
  >
    <ButtonGroup>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => decrement(1)}
      >
        decrement
      </Button>

      <Button variant="contained" color="primary" onClick={() => increment(1)}>
        increment
      </Button>
    </ButtonGroup>
  </div>
);

const mapDispatchToProps = { increment, decrement };

export default connect(null, mapDispatchToProps)(counter);
