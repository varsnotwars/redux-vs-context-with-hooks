import React from "react";
import { connect } from "react-redux";
import { increment, decrement } from "./actions/actionCreators";

const counter = ({ increment, decrement }) => (
  <div>
    <button onClick={() => increment(1)}>increment</button>
    <button onClick={() => decrement(1)}>decrement</button>
  </div>
);

const mapDispatchToProps = { increment, decrement };

export default connect(null, mapDispatchToProps)(counter);
