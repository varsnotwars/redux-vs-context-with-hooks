import React, { useContext } from "react";
import { Card } from "@material-ui/core";
import { GlobalContext } from "./store/createStore";

export const Status = () => {
  const { state } = useContext(GlobalContext);

  return (
    <Card style={{ textAlign: "center" }}>
      <h2>{"status"}</h2>
    </Card>
  );
};
