import logo from './logo.svg';
import './App.css';
import Videocall from './components/videocall';
import CreateMeeting from './components/createmeeting';
import {
  Routes,
  Route,
  BrowserRouter as Router,
} from 'react-router-dom';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CreateMeeting />}></Route>
        <Route path="/room" element={<Videocall />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
