import React from "react"
import NavBar from "./components/NavBar"
import Hero from "./components/Hero"
import PreviousPics from "./components/PreviousPics"
import Timeline from "./components/Timeline"
import AboutParty from "./components/AboutParty"
import BuyTickets from "./components/BuyTickets"
import PhotoGallery from "./components/PhotoGallery"
import OurTeam from "./components/OurTeam"
import SponserLogo from "./components/SponserLogo"

function App() {

  return (
    <div className="p-0 m-0">
      <NavBar/>
      <Hero/>
      <PreviousPics/>
      <AboutParty/>
      <Timeline/>
      <BuyTickets/>
      <PhotoGallery/>
      <OurTeam/>
      <SponserLogo/>
    </div>
  )
}

export default App
