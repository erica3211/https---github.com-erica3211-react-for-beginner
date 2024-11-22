import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../../pages/Home";
import Coins from "../../pages/Coins";
import TodoList from "../../pages/ToDoList";
import UrlList from "./UrlList";

const Router = () => {
  const urlList = UrlList();
  return (
    <BrowserRouter>
      <Routes>
        {urlList.map((item) => (
          <Route path={item.url} element={item.page} />
        ))}
        {/* <Route path="/" element={<Home />} />
        <Route path="/coins" element={<Coins />} />
        <Route path="/todoList" element={<TodoList />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
