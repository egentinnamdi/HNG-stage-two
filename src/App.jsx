import Navbar from "./components/Navbar";
import NewCollecs from "./components/NewCollecs";
import Home from "./pages/Home";

function App() {
  return (
    <div className="min-h-screen bg-secondary text-white flex flex-col">
      <Home />
      {/* <div className="relative left-[40%] -top-24 text-black">
        <div className="position"></div>
        <div className="position"></div>
        <div className="position"></div>
      </div> */}
      <NewCollecs />
      <Navbar />
    </div>
  );
}

export default App;
