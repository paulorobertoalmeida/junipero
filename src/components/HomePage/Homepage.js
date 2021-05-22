import React from 'react';
import FeaturedLands from '../FeaturedLands/FeaturedLands'
import About from '../About/About'

import LatestLands from '../LatestLands/LatestLands'
import LandAreas from '../LandAreas/LandAreas'
import HowToMint from '../HowToMint/HowToMint'

import NewLands from '../NewLands/NewLands'
import SearchBar from '../SearchBar/SearchBar'
import Decentraland from '../Decentraland/Decentraland'

import Sandbox from '../Sandbox/Sandbox'


// import { Container } from './styles';

function HomePage() {
  return(
      <div>
            <SearchBar />
            <About />  
            <NewLands />
            <FeaturedLands />
            <Decentraland />
            <Sandbox />
            <LatestLands /> 
            <LandAreas /> 
            <HowToMint />
    </div>
  );
}

export default HomePage;