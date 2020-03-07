import React, { useContext } from "react";
import { ButtonGroup, Button } from "@material-ui/core";

import { GlobalContext } from "./store/createStore";

export const Counter = () => {
  const { increment, decrement } = useContext(GlobalContext);

  return (
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

        <Button
          variant="contained"
          color="primary"
          onClick={() => increment(1)}
        >
          increment
        </Button>
      </ButtonGroup>
    </div>
  );
};
