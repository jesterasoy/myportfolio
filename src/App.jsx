import { BrowserRouter, Routes, Route } from "react-router-dom";

// COMMON
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";

// PAGES
import Home from "./pages/Home";
import ProjectData from "./pages/ProjectData";
import NotFound from "./pages/NotFound"; // <-- Import
import ScrollToTop from "./components/ScrollToTop";
import ToTheTop from "./common/ToTheTop";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <ToTheTop />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Home />
                <Footer />
              </>
            }
          />
          <Route
            path="/ProjectData/:title"
            element={
              <>
                <Navbar />
                <ProjectData />
                <Footer />
              </>
            }
          />
          <Route path="*" element={<NotFound />} />{" "}
          {/* No Navbar/Footer here */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
