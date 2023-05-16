import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Sudoku from "./pages/Sudoku";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Sudoku />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
