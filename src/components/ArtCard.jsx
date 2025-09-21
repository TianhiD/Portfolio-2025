import React, { useState } from 'react';

const ArtCard = ({ image, title, description }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = () => {
    console.log('Card clicked!'); // Debugging: Check if the click is registered
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    console.log('Modal closed!'); // Debugging: Check if the modal close is triggered
    setIsModalOpen(false);
  };

  return (
    <>
      {/* Art Card */}
      <div className='art-card' onClick={handleCardClick}>
        <img src={image} alt={title} className='art-image w-full h-auto rounded cursor-pointer' />
        <h3 className='text-xl font-bold mt-4'>{title}</h3>
        <p className='mt-2'>{description}</p>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className='modal fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50'
          onClick={handleModalClose} // Close modal when clicking outside the image
        >
          <img
            src={image}
            alt={title}
            className='max-w-full max-h-full rounded shadow-lg cursor-pointer'
            onClick={(e) => e.stopPropagation()} // Prevent modal close when clicking the image
          />
        </div>
      )}
    </>
  );
};

export default ArtCard;