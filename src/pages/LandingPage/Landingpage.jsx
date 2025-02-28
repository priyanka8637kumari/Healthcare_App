import React from 'react'
import LandingNavBar from "../../components/LandingPage/LandingNavbar/LandingNavbar";
import LandingHero from "../../components/LandingPage/LandingHero/LandingHero";
import LandingRole from "../../components/LandingPage/LandingRole/LandingRole";
import LandingAbout from "../../components/LandingPage/LandingAbout/LandingAbout";
import LandingFeature from "../../components/LandingPage/LandingFeature/LandingFeature";
import LandingFooter from "../../components/LandingPage/LandingFooter/LandingFooter";

const Landingpage = () => {
  return (
    <div>
      <LandingNavBar />
      <LandingHero />
      <LandingRole />
      <LandingAbout />
      <LandingFeature />
      <LandingFooter />
    </div>
  )
}

export default Landingpage
