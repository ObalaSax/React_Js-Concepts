import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./Components/Navigation";
import Calculator from "../src/Pages/Calculator";
import Increment from "../src/Pages/Increment";
import TodoApp from "../src/Pages/TodoApp";

function App() {
  return (
    <>
      {" "}
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route index element={<Calculator />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/todo-app" element={<TodoApp />} />
          <Route path="/increment-app" element={<Increment />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
