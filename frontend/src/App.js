import "./App.css";
import SignInSide from "./components/login/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Halls from "./components/halls/Halls";
import Home from "./components/home/Home";
import NoPage from "./components/notfound/Notfound";
import HomeRoutes from "./components/Routes/HomeRotes";
import Logout from "./components/Logout";



function App() {

  
  
  
  return (
    <Router>
      <main className="App">
        <Routes>
          <Route path="/" element={<SignInSide />}></Route>
          <Route path="halls" element={<Halls />}></Route>
          <Route path="h2" element={<Home/>}></Route>
          <Route exact path="/home/*"   element={<HomeRoutes/>}/>
          <Route path="/logout" element={<Logout/>}></Route>
          <Route path="/*" element={<NoPage/>}></Route>

        </Routes>
      </main>
    </Router>
  );
}

export default App;
