import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import AddBook from "./pages/addBook/AddBook.jsx"
import EditBook from "./pages/editBook/EditBook.jsx"
import SingleBook from "./pages/singleBook/SingleBook.jsx";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/addBook" element={<AddBook/>}/>
          <Route path="/editBook" element={<EditBook/>}/>
          <Route path="/book/:id" element={<SingleBook/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
