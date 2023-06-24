import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import { useState } from "react";

function App() {


  const [darkMode, setDarkMode] = useState(false);
  const darkTheme = createTheme({
    palette: {
      mode: darkMode?"light":"dark",
    },
  });


  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="App">
        <ResponsiveAppBar check={darkMode} change={()=>setDarkMode(!darkMode)}/>
      </div>
    </ThemeProvider>
  );
}

export default App;
