import React from 'react';
import BestsellersGrid from '../../components/BestsellersGrid';
import './HomePage.scss';

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>NYT Bestsellers</h1>
      <BestsellersGrid />
    </div>
  );
};

export default HomePage;