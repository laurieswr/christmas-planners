import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Accueil from './accueil/accueil';
import Cadeaux from './cadeaux/cadeaux';
import Footer from './footer/footer';
import Navbar from './navbar/navbar';
import MenuNoel from './menu/menu';
import Header from './header/header';
import ChristmasMusic from './christmas-music/music';

function App() {
  return (
    <>
      <div>
        <Header />
        <Accueil/>
        <Routes>
        <Route path="/accueil" element={<Accueil />} />
          <Route path="/cadeaux" element={<Cadeaux />} />
          <Route path="/menu" element={<MenuNoel />} />
          <Route path="/music" element={<ChristmasMusic />} />
        </Routes>
        <Navbar />
      </div>
      <Footer />
    </>
  );
}

export default App;