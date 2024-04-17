import React from 'react';
import aboutImage from '../assets/homepage-about.png';

const WhyBeHost = () => {
  return (
    <section className="h-auto w-full bg-white relative overflow-hidden flex flex-col items-center py-4 md:py-8 px-4 md:px-8">
      <h1 className="text-2xl font-bold text-center my-5 capitalize text-[#12B7D2]">Why Be a Boggle Host?</h1>
      <div className="third-hold flex flex-col-reverse md:flex-row justify-between items-center">
        <div className="third-text max-w-[500px] md:mr-8">
          <div className="flex flex-col mb-3">
            <p className="capitalize text-2xl font-semibold mb-1 ">Earn While You Sleep</p>
            <p className="capitalize text-base ">Your car can earn you money 24/7, even when you're not behind the wheel</p>
          </div>
          <div className="flex flex-col mb-3">
            <p className="capitalize text-2xl font-semibold mb-1 ">Your Car, Your Rules</p>
            <p className="capitalize text-base ">Your car can earn you money 24/7, even when you're not behind the wheel</p>
          </div>
          <div className="flex flex-col mb-3">
            <p className="capitalize text-2xl font-semibold mb-1 ">No Hidden Cost</p>
            <p className="capitalize text-base ">Boggle Covers Insurance, Maintenance, And More. There Are No Hidden Fees to worry about</p>
          </div>
          <div className="flex flex-col mb-3">
            <p className="capitalize text-2xl font-semibold mb-1 ">Support And Assistance</p>
            <p className="capitalize text-base ">Our dedicated support team is ready to assist you whenever you need it.</p>
          </div>
          <div className="flex flex-col mb-3">
            <p className="capitalize text-2xl font-semibold mb-1 ">Responsible Ownership</p>
            <p className="capitalize text-base ">By sharing your car, you're contributing to a more sustainable and eco-friendly future.</p>
          </div>
          {/* ... Repeat for other sections */}
        </div>
        <div className="md:ml-8">
          <img src={aboutImage} alt="car-bg" className="w-full h-full rounded-md" />
        </div>
      </div>
    </section>
  );
};

export default WhyBeHost;
