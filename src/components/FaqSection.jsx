import React from 'react';

const FAQSection = () => {
  return (
    <section className="flex flex-col min-h-screen w-full bg-[#Fff] relative overflow-hidden items-center justify-center py-2 md:py-4 px-4 md:px-8">
      <h1 className="text-3xl font-medium text-center my-4 capitalize text-[#000]">Frequently Asked Questions</h1>
      <div className="flex flex-col md:flex-row justify-between w-full">
        <div className="flex flex-col mb-5 md:mr-5 max-w-[550px]">
          <Accordion
            title="Is Boggle available in my city?"
            content="Getaround is an online marketplace that connects Hosts and Guests from our car sharing community. Individuals can share their own cars on our platform (Hosts) and Guests can use our mobile app or website to book a car and unlock it without the need to meet someone and hand off keys."
          />
          <Accordion
            title="What if I need to return my car early?"
            content="Getaround is an online marketplace that connects Hosts and Guests from our car sharing community. Individuals can share their own cars on our platform (Hosts) and Guests can use our mobile app or website to book a car and unlock it without the need to meet someone and hand off keys."
          />
          <Accordion
            title="Are there mileage limits?"
            content="Answer 1"
          />
          <Accordion
            title="What if I encounter an issue with my car?"
            content="Answer 1"
          />
          <Accordion
            title="Can I purchase a car I've been renting through Boggle"
            content="Answer 1"
          />
          {/* ... Repeat for other accordions */}
        </div>
        <div className="flex flex-col max-w-[550px]">
          <Accordion
            title="Is Boggle available in my city?"
            content="Getaround is an online marketplace that connects Hosts and Guests from our car sharing community. 
            Individuals can share their own cars on our platform (Hosts) and Guests can use our mobile app or website
             to book a car and unlock it without the need to meet someone and hand off keys."
          />
          <Accordion
            title="What if I need to return my car early?"
            content="Getaround is an online marketplace that connects Hosts and Guests from our car sharing community. Individuals can share their own cars on our platform (Hosts) and Guests can use our mobile app or website to book a car and unlock it without the need to meet someone and hand off keys."
          />
          <Accordion
            title="Are there mileage limits?"
            content="Answer 1"
          />
          <Accordion
            title="What if I encounter an issue with my car?"
            content="Answer 1"
          />
          <Accordion
            title="Can I purchase a car I've been renting through Boggle"
            content="Answer 1"
          />
          {/* ... Repeat for other accordions */}
        </div>
      </div>
    </section>
  );
};

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="mb-4 bg-white p-4 rounded-md shadow-md">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="text-lg font-medium">{title}</h2>
        <svg
          className={`w-6 h-6 transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="#2d2d2d"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </div>
      {isOpen && <p className="text-base mt-2 text-[#2d2d2d]">{content}</p>}
    </div>
  );
};

export default FAQSection;
