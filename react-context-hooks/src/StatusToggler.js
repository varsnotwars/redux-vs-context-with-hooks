import React, { useContext } from "react";
import { Button, ButtonGroup } from "@material-ui/core";

import { GlobalContext } from "./store/createStore";

export const StatusToggler = () => {
  const { activateUnrelated, deactivateUnrelated } = useContext(GlobalContext);
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
          color="default"
          onClick={() => deactivateUnrelated()}
        >
          Deactivate
        </Button>
        <Button
          variant="contained"
          color="default"
          onClick={() => activateUnrelated()}
        >
          Activate
        </Button>
      </ButtonGroup>
    </div>
  );
};
