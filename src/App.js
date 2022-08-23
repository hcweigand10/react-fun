import './App.css';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Home from "./pages/Home"
import Content from "./pages/Content"
import Navbar from './components/Navbar';


function App() {

  const logMeout = () => {
    console.log("logout")
  }


  return (
    <>
      <Router>
        <Navbar logOut= {logMeout}/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/content" element={<Content/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
