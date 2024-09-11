import React from 'react';
import './IPRManagement.css'; // Import the CSS file

const IPRManagement = () => {
  return (
    <div className="ipr-management">
      <h2>IPR Management</h2>
      <table>
        <thead>
          <tr>
            <th>Patent ID</th>
            <th>Title</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>123456</td>
            <td>Innovative Tech A</td>
            <td>Pending</td>
          </tr>
          <tr>
            <td>789012</td>
            <td>New Device B</td>
            <td>Approved</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default IPRManagement;
