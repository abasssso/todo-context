import { BrowserRouter, Route, Routes } from "react-router-dom";
import Add from "./components/Add/Add";
import Counter from "./components/Counter/Counter";
import Edit from "./components/Edit/Edit";
import List from "./components/LIst/List";
import CounterContextProvider from "./context/counterContext";
import ToDoContextProvider from "./context/todoContext";

function App() {
  return (
    <ToDoContextProvider>
      <CounterContextProvider>
        <BrowserRouter>
          <Routes>
            {/* <Route path="/counter" element={<Counter />} /> */}
            <Route path="/add" element={<Add />} />
            <Route path="/list" element={<List />} />
            <Route path="/edit/:id" element={<Edit />} />
          </Routes>
        </BrowserRouter>
      </CounterContextProvider>
    </ToDoContextProvider>
  );
}

export default App;
