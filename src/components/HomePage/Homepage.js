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
import styled from 'styled-components'

const MainHomepage = styled.div`
margin: 15px;
padding: 10px;
`;
// import { Container } from './styles';

function HomePage() {
  return(
      <MainHomepage>
            <SearchBar />
            <About />  
            <NewLands />
            <FeaturedLands />
            <Decentraland />
            <Sandbox />
            <LatestLands /> 
            <LandAreas /> 
            <HowToMint />
    </MainHomepage>
  );
}

export default HomePage;