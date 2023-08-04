import { Routes, Route, useLocation } from 'react-router-dom';

import './App.css'

import Landing from './pages/landing/Landing';
import Seat from './pages/before_match/Seat';
import Section from './pages/before_match/Section';
import SectionDetail from './pages/before_match/SectionDetail';
import Match from './pages/during_match/Match';
import Facilities from './pages/during_match/Facilities';
import Navigation from './pages/during_match/Navigation';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom/dist';

function App() {
  return (
        <Routes>
          <Route path="/" element={ <Landing/> } />
          <Route path="/seat" element={ <Seat/> } />
          <Route path="/section" element={ <Section/> } />
          <Route path="/section/section_detail" element={ <SectionDetail/> } />
          <Route path="/match" element={ <Match/> } />
          <Route path="/facilities" element={ <Facilities/> } />
          <Route path="/navigation" element={ <Navigation/> } />
        </Routes>
  );
}

export default App;