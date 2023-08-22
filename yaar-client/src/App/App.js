import Navbar from "../Common/Navbar";
import Dashboard from "../pages/Dashboard/Dashboard";

function App() {
  return (
    <div className="App overflow-hidden">
      <Navbar />
      <Dashboard />
      <preLoader />
      {/* <Footer/> */}
    </div>
  );
}

export default App;
