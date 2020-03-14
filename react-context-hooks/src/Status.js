import React, { useContext } from "react";
import { Alert, AlertTitle } from "@material-ui/lab";
import { GlobalContext } from "./store/createStore";

export const Status = () => {
  const {
    state: {
      statusToggler: { active }
    }
  } = useContext(GlobalContext);

  const { title, severity, content } = {
    active: {
      title: "Active",
      severity: "success",
      content: "Status successfully activated"
    },
    inactive: {
      title: "Inactive",
      severity: "error",
      content: "Status successfully deactivated"
    }
  }[active ? "active" : "inactive"];

  return (
    <Alert severity={severity}>
      <AlertTitle>{title}</AlertTitle>
      {content}
    </Alert>
  );
};
