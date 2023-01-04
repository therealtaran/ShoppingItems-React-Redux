import React from "react";
import Header from "./components/header";
import {BrowserRouter,Routes,Route, Switch} from 'react-router-dom'
import "./App.css";
import ProductList from "./components/productList";
import ProductDetails from "./components/productDetail";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Header/>
      <Routes>
      <Route exact path="/" element={<ProductList />} />
      <Route exact path="/product/:productID" element={<ProductDetails />} />
      <Route>404 Not Found</Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;