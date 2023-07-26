import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Main from './pages/Main';
import InfieldSectionInfo from './pages/InfieldSectionInfo'
import OutfieldSectionInfo from './pages/OutfieldSectionInfo';
import SectionDetail from './pages/SectionDetail';
import LiveScore from './pages/LiveScore';
import './App.css'
import Nav from './Nav';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav/>
        <Routes>
          <Route path="/" element={ <Main/> } />
          <Route path="/infield" element={ <InfieldSectionInfo/> } />
          <Route path="/outfield" element={ <OutfieldSectionInfo/> } />
          <Route path="/sectiondetail" element={ <SectionDetail/> } />
          <Route path="/live" element={ <LiveScore/> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
