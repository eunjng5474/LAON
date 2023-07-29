import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'

import Landing from './pages/landing/Landing';

import Infield from './pages/before_match/Infield';
import Outfield from './pages/before_match/Outfield';
import Seat from './pages/before_match/Seat';
import Section from './pages/before_match/Section';
import SectionDetail from './pages/before_match/SectionDetail';
import StrikeZone from './templates/strike_zone/StrikeZone';
import Match from './pages/during_match/Match';
import Facilities from './pages/during_match/Facilities';
import LiveField from './templates/live_field/LiveField';

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={ <Landing/> } />
          <Route path="/seat" element={ <Seat/> } />
          <Route path="/seat/infield" element={ <Infield/> } />
          <Route path="/seat/outfield" element={ <Outfield/> } />
          <Route path="/section" element={ <Section/> } />
          <Route path="/section/section_detail" element={ <SectionDetail/> } />
          <Route path="/match" element={ <Match/> } />
          <Route path="/facilities" element={ <Facilities/> } />
          <Route path="/strike" element={ <StrikeZone/> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;