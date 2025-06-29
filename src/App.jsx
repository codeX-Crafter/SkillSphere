import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cohorts from "./pages/Cohorts";

export default function App() {
  return (
    // body
    <BrowserRouter>
      <div className="flex flex-col gap-10">
        {/* Navbar */}
        <Navbar />

        <main className="pt-16 flex-grow">
          {" "}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Cohorts" element={<Cohorts />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}
