import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Accueil from './accueil/accueil';
import Cadeaux from './cadeaux/cadeaux';
import Footer from './footer/footer';
import Navbar from './navbar/navbar';
import MenuNoel from './menu/menu';
import Header from './header/header';
import CompteRebours from './compte-rebours/compte-rebours';
import ChristmasMusic from './christmas-music/music';

function App() {
  return (
      <Router>
        <div>
          <Header />
          <ChristmasMusic />
          <Routes>
            <Accueil />
            <Route path="/accueil" element={<Accueil />} />
            <Route path="/cadeaux" element={<Cadeaux />} />
            <Route path='/menu' element={<MenuNoel />} />
            <Route path="/compte-rebours" element={<CompteRebours />} />
            <Route path="/music" element={<ChristmasMusic />} />
          </Routes>
          
          <Navbar />
        </div>
        <Footer />
      </Router>
  );
}

export default App;
