import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Cohorts from "./pages/Cohorts";
import About from "./pages/About";
import DSA from "./pages/DSA";
import WebDev from "./pages/WebDev";
import AppDev from "./pages/AppDev";
import UIUX from "./pages/UIUX";
import AIML from "./pages/AIML";
import ARVR from "./pages/ARVR";
import CompetitiveProgramming from "./pages/CompetitiveProgramming";
import Cybersecurity from "./pages/Cybersecurity";

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
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}
