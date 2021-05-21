import React from 'react';
import FeaturedLands from '../FeaturedLands/FeaturedLands'
import About from '../About/About'

import LatestLands from '../LatestLands/LatestLands'
import LandAreas from '../LandAreas/LandAreas'
import HowToMint from '../HowToMint/HowToMint'

import NewLands from '../NewLands/NewLands'
import SearchBar from '../SearchBar/SearchBar'


// import { Container } from './styles';

function HomePage() {
  return(
      <div>
            <SearchBar />
            <About />  
            <NewLands />
            <FeaturedLands />
            <LatestLands /> 
            <LandAreas /> 
            <HowToMint />
    </div>
  );
}

export default HomePage;