import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Account from "./Account";
import { GlobalUserProvider } from "./GlobalContext";

const App = () => {
  return (
    <GlobalUserProvider>
      <BrowserRouter>
        {
          <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/Account" element={<Account />}></Route>
          </Routes>
        }
      </BrowserRouter>
    </GlobalUserProvider>
  );
};
export default App;
