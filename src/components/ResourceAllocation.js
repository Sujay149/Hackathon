import React from 'react';
import './ResourceAllocation.css'; // Import the CSS file

const ResourceAllocation = () => {
  return (
    <div className="resource-allocation">
      <h2>Resource Allocation</h2>
      <div className="grid">
        <div className="card">
          <h3>Total Funding Allocated</h3>
          <p>$5M</p>
        </div>
        <div className="card">
          <h3>Mentorship Resources</h3>
          <p>20 Available</p>
        </div>
      </div>
    </div>
  );
};

export default ResourceAllocation;
