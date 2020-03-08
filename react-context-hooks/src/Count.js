import React, { useContext } from "react";
import { Card } from "@material-ui/core";
import { GlobalContext } from "./store/createStore";

export const Count = () => {
  const {
    state: {
      counter: { count }
    }
  } = useContext(GlobalContext);

  return (
    <Card style={{ textAlign: "center" }}>
      <h1>{count}</h1>
    </Card>
  );
};
