import React from 'react';
import FinanceCaute from '../assets/finance-cuate.svg';
import { FaArrowRight } from 'react-icons/fa';

const BecomeHostHero = () => {
  return (
    <div className="p-8 lg:p-10 flex flex-col-reverse lg:flex-row justify-between items-center mt-20 mb-10">
      <div className="lg:max-w-[500px] lg:ml-8 text-center lg:text-left">
        <h1 className="text-3xl md:text-4xl lg:text-5xl uppercase font-bold mb-3">
          Turn your car into
        </h1>
        <h1 className="text-3xl md:text-4xl lg:text-5xl uppercase font-bold mb-3">
          Extra Money on <span className="text-[#12B7D2]">Boggle</span>
        </h1>
        <p className="font-medium">
          When you list your car, you're not only earning money, you're also
          assisting others in exploring your city.{' '}
          <span>It's a mutually beneficial opportunity waiting for you.</span>
        </p>
        <button className="list-button mt-3">
          List your car <FaArrowRight className="text-white text-2xl ml-2 py-2" />
        </button>
      </div>
      <div className="mt-6 lg:mt-0">
        <img src={FinanceCaute} alt="finance" className="max-w-full h-auto" />
      </div>
    </div>
  );
};

export default BecomeHostHero;
