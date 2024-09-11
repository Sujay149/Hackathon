import React from 'react';
import './Dashboard.css'; // Import the CSS file

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="grid">
        <div className="card">
          <h2>Total Research Projects</h2>
          <p>150</p>
        </div>
        <div className="card">
          <h2>Total Start-ups</h2>
          <p>50</p>
        </div>
        <div className="card">
          <h2>Total Patents</h2>
          <p>80</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
