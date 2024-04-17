import React from 'react';
import unsplashImage from '../assets/unsplash.png';
import { FaArrowRight } from 'react-icons/fa';

const BoggleSupport = () => {
  return (
    <section className="flex flex-col md:flex-row  w-full bg-[#F5F5F6] relative items-center justify-between py-2 md:py-4 px-4 md:px-8">
      <div className="w-full md:w-2/5">
        <img src={unsplashImage} alt="car-bg" className="w-full h-[70vh] md:h-[70vh] xl:h-[70vh] object-cover rounded-md" />
      </div>
      <div className="max-w-[650px]">
        <h1 className="text-2xl font-bold capitalize mb-4 text-[#2d2d2d]">Boggle Got Your Back</h1>
        <div className="flex flex-col">
          <p className="text-lg font-bold mb-2 text-[#2d2d2d]">Third-party liability insurance</p>
          <p className="text-base capitalize text-[#2d2d2d]">
            We prioritize your safety and security. Our verification process ensures trust between hosts and renters/buyers. We also provide insurance coverage for both the host in case of unforeseen incidents.
          </p>
        </div>
        <div className="flex flex-col my-3">
          <p className="text-lg font-bold mb-2 text-[#2d2d2d]">Physical damage protection</p>
          <p className="text-base capitalize text-[#2d2d2d]">
            Two protection plans are available, and you can choose the one that best suits your needs. Both plans provide reimbursement for car repairs up to the cash value of your car if it's damaged during a trip.
          </p>
        </div>
        <div className="flex flex-col mb-3">
          <p className="text-2xl font-bold mb-2 text-[#2d2d2d]">24/7 Customer Support</p>
          <p className="text-base capitalize text-[#2d2d2d]">
            Our dedicated 24/7 customer support is just a click away, and your guests have easy access to Boggle roadside assistance when they need it.
          </p>
        </div>
          <button className="list-button mt-2 bg-[#12B7D2] text-white py-1.5 px-3 rounded-md">
            List your car <FaArrowRight className="text-white text-2xl ml-2 py-2" />
          </button>
      </div>
    </section>
  );
};

export default BoggleSupport;
