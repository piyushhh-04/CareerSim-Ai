import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Onboarding from "../pages/Onboarding/Onboarding";
import CareerSelection from "../pages/CareerSelection/CareerSelection";
import Simulation from "../pages/Simulation/Simulation";
import Compare from "../pages/Compare/Compare";
import NotFound from "../pages/NotFound/NotFound";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/careers" element={<CareerSelection />} />
        <Route path="/simulation" element={<Simulation />} />
        <Route path="/compare" element={<Compare />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
