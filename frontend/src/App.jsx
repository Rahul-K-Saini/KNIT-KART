import React from "react";
import { ThemeProvider } from "./context/ThemeProvider";
import Navbar from "./components/Navbar/Navbar";


function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Navbar />
    </ThemeProvider>
  );
}

export default App;
