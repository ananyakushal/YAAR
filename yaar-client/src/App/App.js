import Landing from "../pages/Landing/Landing";
import PreLoader from "../pages/Landing/PreLoader";
function App() {
  return (
    
    <div className="App overflow-hidden"> 
     <PreLoader/> 
      {/* <Dashboard /> */}     
      {/* <Route exact path="/" element={<Landing/>} /> */}
      <Landing/>
    </div>
  );
}

export default App;
