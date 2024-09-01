import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import BuyTickets from "./components/BuyTickets";
import OurTeam from "./components/OurTeam";
import SponserLogo from "./components/SponserLogo";
import OurEvents from "./components/OurEvents";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div className="p-0 m-0">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={
            <>
              <NavBar />
              <Hero />
              <OurEvents />
              <BuyTickets />
              <OurTeam />
              <SponserLogo /> 
            </>
          }
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
