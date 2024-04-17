import React from 'react';

import firstImage from '../assets/1st.png';
import secondImage from '../assets/2nd.png';
import thirdImage from '../assets/3rd.png';

const GettingStarted = () => {
  return (
    <section className="w-full py-4 md:py-8 px-4 md:px-8">
      <h1 className="text-3xl font-medium text-center my-5 capitalize ">Getting Started On Boggle Host</h1>
      <div className="flex flex-col md:flex-row justify-center md:justify-between items-center">
        <div className="max-w-[300px]  h-auto bg-white px-3 py-2 flex flex-col text-left shadow-md rounded-md mb-4 md:mb-0">
          <div>
            <img src={firstImage} alt="step-1" className="mx-auto h-[50px] w-[50px] my-2" />
          </div>
          <h3 className="text-lg text-center font-semibold capitalize mb-1 ">Sign Up</h3>
          <p className="text-base text-center capitalize ">Download The Boggle App And Create Your Host Profile.</p>
        </div>
        <div className="max-w-[300px]  h-auto bg-white px-3 py-2 flex flex-col text-left shadow-md rounded-md mb-4 md:mb-0">
          <div>
            <img src={secondImage} alt="step-2" className="mx-auto h-[50px] w-[50px] my-2" />
          </div>
          <h3 className="text-lg text-center font-semibold capitalize mb-1 ">List Your Car</h3>
          <p className="text-base text-center capitalize ">Add Your vehicle, set your pricing, and customize availability.</p>
        </div>
        <div className="max-w-[300px]  h-auto bg-white px-3 py-2 flex flex-col text-left shadow-md rounded-md">
          <div>
            <img src={thirdImage} alt="step-3" className="mx-auto h-[50px] w-[50px] my-2" />
          </div>
          <h3 className="text-lg text-center font-semibold capitalize mb-1 ">Start Sharing</h3>
          <p className="text-base text-center capitalize ">once approved, your car becomes available to renters sit back. and watch your income grow.</p>
        </div>
      </div>
    </section>
  );
};

export default GettingStarted;
