import React from 'react';

const Cards = ({ items }) => {
  return (
    <div className="flex flex-wrap justify-center gap-[20%] mt-[2%]">
      {items.map((item) => (
        <div
          key={item.id}
          className="w-64 p-4 rounded-lg border-2 bg-white border-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 mt-10"
        >
          <div className="bg-white p-5 rounded-lg">
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-lg font-bold mb-2">{item.name}</h2>
            <p className="text-gray-700 mb-4">Price: ${item.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
