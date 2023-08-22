import Navbar from "../Common/Navbar";
import Dashboard from "../pages/Dashboard/Dashboard";
import PreLoader from "../pages/Landing/PreLoader";
function App() {
  return (
    <div className="App overflow-hidden">
      <Navbar />
      <Dashboard />
      <PreLoader/>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
