import React from "react";
import { connect } from "react-redux";
import { Card } from "@material-ui/core";

const count = ({ count }) => (
  <Card style={{ textAlign: "center" }}>
    <h1>{count}</h1>
  </Card>
);

const mapStateToProps = ({ counter: { count } }) => ({ count });

export default connect(mapStateToProps)(count);
