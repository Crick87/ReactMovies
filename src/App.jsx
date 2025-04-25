import React from 'react';
import { Outlet } from 'react-router-dom';

import Footer from './components/Footer/Footer.jsx';

function App() {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
}

export default App;