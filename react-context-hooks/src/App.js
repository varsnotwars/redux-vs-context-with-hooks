import React, { useContext } from "react";
import { GlobalContext } from "./global";

const App = () => {
  const { greeting, isProviderInTree } = useContext(GlobalContext);

  return <div className="App">{isProviderInTree || greeting}</div>;
};

export default App;
