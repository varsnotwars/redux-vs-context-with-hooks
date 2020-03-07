import React, { useContext } from "react";
import { GlobalContext } from "./global";

const App = () => {
  const { greeting } = useContext(GlobalContext);

  return <div className="App">{greeting}</div>;
};

export default App;
