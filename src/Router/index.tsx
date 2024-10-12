import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Homepage } from "../view/pages/Homepage";
import { Header } from "../view/components/Header";
import { Employees } from "../view/pages/Employees";

export function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/funcionarios" element={<Employees />} />
      </Routes>
    </BrowserRouter>
  )
}
