import React from 'react'
import TopBar from '../Components/LandingPage/TopBar'
import Welcome from '../Components/LandingPage/Welcome'
import Services from '../Components/LandingPage/Services'
import Contact from '../Components/LandingPage/Contact'
import Footer from '../Components/LandingPage/Footer'
import { Box } from '@mui/material'
import About from 'Components/LandingPage/About'
function LandingPage() {

  return (
    <Box>
      <TopBar />
      <Welcome />
      <Services />
      <About />
      <Contact/>
      <Footer/>
    </Box>
  )
}

export default LandingPage