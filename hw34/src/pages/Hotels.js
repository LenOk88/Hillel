import React from 'react';
import { useLocation } from 'react-router-dom';

const Hotels = () => {
  const location = useLocation();
  const hotels = location.state?.hotels || [];

  return (
    <div>
      <h1>Hotels</h1>
      {hotels.length > 0 ? (
        <ul>
          {hotels.map((hotel) => (
            <li key={hotel.id}>{hotel.name} - {hotel.city}</li>
          ))}
        </ul>
      ) : (
        <p>No hotels found</p>
      )}
    </div>
  );
};

export default Hotels;
