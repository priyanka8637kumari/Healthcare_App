import React from 'react'
import LandingNavBar from "../../components/LandingPage/LandingNavbar/LandingNavbar";
import LandingHero from "../../components/LandingPage/LandingHero/LandingHero";
import LandingRole from "../../components/LandingPage/LandingRole/LandingRole";
import LandingAbout from "../../components/LandingPage/LandingAbout/LandingAbout";

const Landingpage = () => {
  return (
    <div>
      <LandingNavBar />
      <LandingHero />
      <LandingRole />
      <LandingAbout />
    </div>
  )
}

export default Landingpage
