
import React from 'react';
import { useLocation } from 'react-router-dom';
import './Startups.css';  // Import CSS for StartupsPage

const StartupsPage = () => {
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const city = queryParams.get('city');
  const sector = queryParams.get('sector');

  return (
    <div className="startups-page">
      <h1>Startups</h1>
      <div className="filters">
        {/* Additional filter options or display can be added here */}
      </div>
      <div className="results">
        {city && <h2>Startups in {city.charAt(0).toUpperCase() + city.slice(1)}</h2>}
        {sector && <h2>Startups in {sector.charAt(0).toUpperCase() + sector.replace('-', ' ')}</h2>}
        {/* Display results based on selections */}
        <p>Displaying results for {city ? city : 'all cities'} and {sector ? sector : 'all sectors'}.</p>
      </div>
    </div>
  );
};

export default StartupsPage;