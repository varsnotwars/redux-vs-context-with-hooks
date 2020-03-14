import React, { useContext } from "react";
import { Card } from "@material-ui/core";
import { GlobalContext } from "./store/createStore";

export const Status = () => {
  const {
    state: {
      statusToggler: { active }
    }
  } = useContext(GlobalContext);

  return (
    <Card style={{ textAlign: "center" }}>
      <h2>{active ? "active" : "inactive"}</h2>
    </Card>
  );
};
