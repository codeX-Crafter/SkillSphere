import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Cohorts from "./pages/Cohorts";
import About from "./pages/About";
import DSA from "./pages/domainSpecificPages/DSA";
import WebDev from "./pages/domainSpecificPages/WebDev";
import AppDev from "./pages/domainSpecificPages/AppDev";
import UIUX from "./pages/domainSpecificPages/UIUX";
import AIML from "./pages/domainSpecificPages/AIML";
import ARVR from "./pages/domainSpecificPages/ARVR";
import CompetitiveProgramming from "./pages/domainSpecificPages/CompetitiveProgramming";
import Cybersecurity from "./pages/domainSpecificPages/Cybersecurity";


export default function App() {
  return (
    // body
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex flex-col ">
        {/* Navbar */}
        <Navbar />

        <main className="pt-16 flex-grow">
          {" "}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Cohorts" element={<Cohorts />} />
            <Route path="/About" element={<About />} />
            <Route path="/DSA" element={<DSA />} />
            <Route path="/WebDevelopment" element={<WebDev />} />
            <Route path="/AppDevelopment" element={<AppDev />} />
            <Route path="/UIUX" element={<UIUX />} />
            <Route path="/AIML" element={<AIML />} />
            <Route path="/ARVR" element={<ARVR />} />
            <Route
              path="/CompetitiveProgramming"
              element={<CompetitiveProgramming />}
            />
            <Route path="/Cybersecurity" element={<Cybersecurity />} />

          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
      <Analytics />
    </BrowserRouter>
  );
}
