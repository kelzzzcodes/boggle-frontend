import React, { useState } from 'react';
import Gear from "../assets/Gearbox.png";
import Rafiki from "../assets/rafiki.png";
import { FaHeart, FaStar, FaUser } from 'react-icons/fa6';
import { FaMapMarkerAlt, FaSearch } from 'react-icons/fa';

const FavoriteComponent = () => {
    // Sample car data
    const initialCars = [
        {
          imageUrl: require('../assets/Frame.png'),
          name: 'Lamborghini 2021',
          rating: 4.5,
          numReviews: 4,
          gearbox: 'A',
          location: 'Lugbe',
          price: 20000
        },
        // Add more cars as needed...
        {
          imageUrl: require('../assets/yellow-lambo.png'),
          name: 'Mercedes 2022',
          rating: 5,
          numReviews: 10,
          gearbox: 'A',
          location: 'Jabi',
          price: 10000
        },
        {
          imageUrl: require('../assets/unsplash.png'),
          name: 'Lamborghini 2023',
          rating: 4.5,
          numReviews: 4,
          gearbox: 'A',
          location: 'Ada-George',
          price: 30000
        },
        {
          imageUrl: require('../assets/yellow-lambo.png'),
          name: 'Lamborghini 2020',
          rating: 4.5,
          numReviews: 4,
          gearbox: 'A',
          location: 'Rumokoro',
          price: 20000
        },
      ];

  // State for remove modal
  const [cars, setCars] = useState(initialCars);
  const [isRemoveModalOpen, setIsRemoveModalOpen] = useState(false);
  const [carToRemove, setCarToRemove] = useState(null);

  const openRemoveConfirmationModal = (car) => {
    setCarToRemove(car);
    setIsRemoveModalOpen(true);
  };

  const removeFavorite = () => {
    const updatedCars = cars.filter((c) => c !== carToRemove);
    setCars(updatedCars);
    setCarToRemove(null);
    setIsRemoveModalOpen(false);
  };

  // Function to cancel remove
  const cancelRemove = () => {
    setCarToRemove(null);
    setIsRemoveModalOpen(false);
  };
    return ( 
        <div className="h-auto relative flex flex-col p-4 sm:p-8 md:p-16 sm:pt-[300px] md:pt-24 ">
      {cars.length > 0 ? (
        <section className="mt-16 sm:mt-24 md:mt-1.5">
          <h1 className="text-left text-2xl font-bold my-2">
            <span>Blessing</span>’s favourites
          </h1>
          <div className="container-holder flex flex-wrap justify-around items-center max-w-6xl mx-auto">
            {cars.map((car) => (
              <div key={car.name} className="fav-con relative m-4 bg-[#f9f9f9] transition-transform hover:scale-105 flex flex-col justify-between h-auto w-[300px] sm:w-[250px] md:w-[300px] box-border shadow-md rounded-md">
                <div className="fav-image">
                  <img src={car.imageUrl} alt="car" className="h-48 w-full object-cover rounded-t-md" />
                </div>
                <div className="flex justify-between py-1.5 px-2">
                  <p className="text-base text-left font-semibold">{car.name}</p>
                  <span className="text-end" onClick={() => openRemoveConfirmationModal(car)}>
                    <FaHeart className="cursor-pointer" style={{ color: '#FF3A44' }} />
                  </span>
                </div>
                <div className="flex px-2 pb-1">
                  <span className="mr-1 flex">
                    (<span className='textbase font-medium'>{car.rating}</span>)
                    <FaStar className="mt-1 mx-1" style={{ color: '#12B7D2' }} />
                    <FaUser className="mt-1 mx-1" />
                    (<span className='textbase font-medium'>{car.numReviews}</span>)
                  </span>
                  <div className="flex items-center">
                    <img src={Gear} className="mx-1" alt="Gearbox icon" />
                    <span>{car.gearbox}</span>
                  </div>
                </div>
                <div className="flex px-2 text-sm">
                  <FaMapMarkerAlt className="mt-1 text-[#12B7D2]"/>
                  <span className="mx-1 text-base font-medium pb-0.5">{car.location}</span>
                </div>
                <div className="flex py-2 px-2 justify-between ml-auto font-medium">
                  <span>₦ <span className="ml-0.5">{car.price}</span>/day</span>
                </div>
                {/* ... Render other car details */}
              </div>
            ))}
          </div>
          {/* Remove Confirmation Modal */}
          {isRemoveModalOpen && (
            <div className=" fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
              <div className="modal-content bg-white max-w-[350px] p-8 rounded-md">
                <h1 className="text-2xl font-bold text-left">Remove from favorites</h1>
                <p className="text-base">Are you sure you want to remove {carToRemove?.name} from favorites?</p>
                <div className="modal-buttons flex justify-between">
                  <button className="mr-2" onClick={cancelRemove} style={{ color: '#12B7D2' }}>Cancel</button>
                  <button className="cont-button bg-black text-white rounded-md" onClick={removeFavorite}>Remove</button>
                </div>
              </div>
            </div>
          )}
        </section>
      ) : (
        <section className="second-section flex flex-col h-auto relative  p-4 sm:p-8 md:p-10 mt-16 sm:mt-24 md:mt-1.5">
          <h1 className="text-left text-2xl font-bold mb-2">
            <span>Blessing</span>’s favourites
          </h1>
          <div className="con-holder flex flex-col py-3 mx-auto items-center">
            <img src={Rafiki} alt="svg-icon" />
            <div className="flex flex-col py-3 text-center">
              <h1 className="text-4xl font-semibold">No favorites</h1>
              <p className="text-base font-medium py-2">You’ll be able to access your favorite cars here.</p>
            </div>
            <button className="p-2.5 flex cursor-pointer rounded-md border border-gray-300">
              <FaSearch className="mr-2 mt-1" />Find new favorites
            </button>
          </div>
        </section>
      )}
    </div>
     );
}
 
export default FavoriteComponent;