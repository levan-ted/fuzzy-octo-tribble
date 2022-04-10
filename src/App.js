import React, { useEffect } from 'react';
import { DataProvider } from './contexts/data-context';
import Homepage from './pages/Homepage';

function App() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    <>
      <DataProvider>
        <Homepage />
      </DataProvider>
    </>
  );
}

export default App;
