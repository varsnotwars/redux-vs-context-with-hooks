import React, { useContext } from "react";
import { Button } from "@material-ui/core";

import { GlobalContext } from "./store/createStore";

export const StatusToggler = () => {
  const {
    toggleStatus,
    state: {
      statusToggler: { active }
    }
  } = useContext(GlobalContext);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      <Button
        variant="contained"
        color="default"
        onClick={() => toggleStatus(!active)}
      >
        {!active ? "Activate" : "Deactivate"}
      </Button>
    </div>
  );
};
