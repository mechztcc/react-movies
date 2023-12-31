import { Route, Routes } from "react-router-dom";
import "./App.css";

import { Provider } from "react-redux";
import Home from "./pages/Home";
import Login from "./pages/Login";
import store from "./stores/store";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
      </Routes>
    </Provider>
  );
}

export default App;
