import React from 'react';
import './Repository.css'; // Import the CSS file

const Repository = () => {
  return (
    <div className="repository">
      <h2>Research & Innovation Repository</h2>
      <table>
        <thead>
          <tr>
            <th>Project/Patent</th>
            <th>Category</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Project A</td>
            <td>Research</td>
            <td>Ongoing</td>
          </tr>
          <tr>
            <td>Patent B</td>
            <td>Innovation</td>
            <td>Completed</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Repository;
