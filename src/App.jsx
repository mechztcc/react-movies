import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import Login from "./pages/Login";
import Home from "./pages/Home";
import store from "./stores/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
