import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Timeline from "./components/Timeline";
import AboutParty from "./components/AboutParty";
import BuyTickets from "./components/BuyTickets";
import PhotoGallery from "./components/PhotoGallery";
import OurTeam from "./components/OurTeam";
import SponserLogo from "./components/SponserLogo";
import PreviousPics from "./components/PreviousPics";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EventDetail from "./components/EventDetail";


function App() {

  return (
    <div className="p-0 m-0">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<>
            <NavBar />
            <Hero />
            <PreviousPics />
            <AboutParty />
            <Timeline />
            <BuyTickets />
            <PhotoGallery />
            <OurTeam />
            <SponserLogo /></>}
          />
          <Route path="/event" element={<><NavBar/><EventDetail/></>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
