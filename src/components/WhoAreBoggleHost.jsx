import React from 'react';
import cityImage from '../assets/homepage-rectangle-34.png';

const WhoAreBoggleHost = () => {
    return ( 
        <div className=" bg-white py-16 px-4 md:px-8">
      <div className="city-bg relative w-full">
        <img src={cityImage} alt="man-sitting" className="rounded-md" />
        <div className="city-text absolute flex flex-col text-left mb-3 bg-[#F5F5F6] max-w-[400px] p-8 rounded-md bottom-[-75px] right-[-5px]">
          <h1 className="text-2xl capitalize font-bold mb-2 text-black">Who Are</h1>
          <h1 className="text-2xl capitalize font-bold mb-2 text-black">Boggle Host?</h1>
          <p className="text-base capitalize text-black">
            Boggle hosts are everyday heroes who recognize the untapped potential of their vehicles.
            They've decided to take their car ownership to the next level by sharing it with others on our platform.
          </p>
            <button className="city-button mt-3 bg-black text-white px-4 py-2 rounded-md">Learn More</button>
        </div>
      </div>
    </div>
     );
}
 
export default WhoAreBoggleHost;