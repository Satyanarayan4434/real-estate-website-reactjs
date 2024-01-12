import "./App.css";
import LinksNavbar from "./components/LinksNavbar";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import { SpeedInsights } from "@vercel/speed-insights/next"

function App() {
  return (
    <div>
      <LinksNavbar />
      <Navbar/>
      <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
          </Route>
      </Routes>
      <SpeedInsights/>
    </div>
  );
}

export default App;
