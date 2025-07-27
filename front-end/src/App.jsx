import { BrowserRouter, Routes, Route } from "react-router-dom";

//COMMON
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";

//PAGES
import Home from "./pages/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
