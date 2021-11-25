import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Todo from "../todo/Todo";
const Routing = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Todo />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Routing;
