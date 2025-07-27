import { BrowserRouter, Routes, Route } from "react-router-dom";

//COMMON
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";

//PAGES
import Home from "./pages/Home";
import ProjectData from "./pages/ProjectData"; // adjust path as needed

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ProjectData/:title" element={<ProjectData />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
