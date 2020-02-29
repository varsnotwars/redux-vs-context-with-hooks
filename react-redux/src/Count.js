import React from "react";
import { connect } from "react-redux";

const count = ({ count }) => <div>{count}</div>;

const mapStateToProps = ({ counter: { count } }) => ({ count });

export default connect(mapStateToProps)(count);
