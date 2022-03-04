import './App.css';
import SignInSide from './components/login/Login';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Halls from './components/halls/Halls'
import Home from './components/home/Home';
import NoPage from './components/notfound/Notfound'


function App() {
  return (
    <Router>
      <main className="App">
        <Routes>
              <Route path="/" element={<SignInSide />}></Route>
              <Route path="halls" element={<Halls />}></Route>
              <Route path="home" element={<Home />}></Route>
              <Route path="*" element={<NoPage />} />

        </Routes>
      </main>
    </Router>
    

  );
}

export default App;
