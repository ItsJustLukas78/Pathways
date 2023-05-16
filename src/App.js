import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Sudoku from "./pages/Sudoku";
import SharedLayout from "./pages/Sudoku";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Sudoku />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
