import React, { useEffect } from "react";
import Homepage from "./pages/Homepage";

function App() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <Homepage />
    </>
  );
}

export default App;
