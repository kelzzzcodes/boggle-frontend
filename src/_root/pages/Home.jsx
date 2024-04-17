import React from 'react'
import {
  BrowseByCity,
  BrowseByMake,
  DownloadApp,
  Hero,
  HowBoggleWorks,
  WhatIsBoggle,
  WhyChooseBoggle,
} from '../../components';

const Home = () => {
  return (
    <div className="w-full flex flex-col">
      <Hero />
      <BrowseByMake />
      <WhyChooseBoggle />
      <WhatIsBoggle />
      <HowBoggleWorks />
      <BrowseByCity />
      <DownloadApp />
    </div>
  )
}

export default Home
