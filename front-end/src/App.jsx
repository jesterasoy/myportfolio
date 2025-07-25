import Navbar from "./common/Navbar";
import FirstSection from "./components/FirstSection";
function App() {
  return (
    <>
      {/* This is the navbar */}
      <div className=" p-10 max-w-screen-2xl mx-auto min-h-screen">
        {/* Navigation Bar */}
        <Navbar />

        {/* Main Content */}
        <FirstSection />
      </div>
    </>
  );
}

export default App;
