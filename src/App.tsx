import React from "react";
import "./App.css";
import SearchBox from "./SearchBox";

const App = () => <SearchBox requestSearch={console.log} />;

export default App;
