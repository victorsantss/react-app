import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Homepage } from "../view/pages/Homepage";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/funcionarios" element={<h1>Funcionarios</h1>} />
      </Routes>
    </BrowserRouter>
  )
}
