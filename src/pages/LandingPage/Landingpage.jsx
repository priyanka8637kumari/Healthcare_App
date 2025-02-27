import React from 'react'
import LandingNavBar from "../../components/LandingPage/LandingNavbar/LandingNavbar";
import LandingHero from "../../components/LandingPage/LandingHero/LandingHero";
import LandingRole from "../../components/LandingPage/LandingRole/LandingRole";

const Landingpage = () => {
  return (
    <div>
      <LandingNavBar />
      <LandingHero />
      <LandingRole />
    </div>
  )
}

export default Landingpage
