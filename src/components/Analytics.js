import React from 'react';
import './Analytics.css'; // Import the CSS file

const Analytics = () => {
  return (
    <div className="analytics">
      <h2>Analytics</h2>
      <div className="grid">
        <div className="card">
          <h3>Start-up Success Rate</h3>
          <p>70%</p>
        </div>
        <div className="card">
          <h3>Patent Approval Rate</h3>
          <p>85%</p>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
