import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home'; // Import the Home component
import Dashboard from './components/Dashboard';
import Repository from './components/Repository';
import ResourceAllocation from './components/ResourceAllocation';
import IPRManagement from './components/IPRManagement';
import Analytics from './components/Analytics';
import StrartupsPage from './components/StartupsPage';
import './App.css'; // Import the CSS file

function App() {
  return (
    <div>
      <Navbar />
      <div className="p-6">
        <section id="home">
          <Home />
        </section>
        <section id="dashboard" className="mt-8">
          <Dashboard />
        </section>
        <section id="repository" className="mt-8">
          <Repository />
        </section>
        <section id="resources" className="mt-8">
          <ResourceAllocation />
        </section>
        <section id="ipr" className="mt-8">
          <IPRManagement />
        </section>
        <section id="analytics" className="mt-8">
          <Analytics />
        </section>
      </div>
    </div>
  );
}

export default App;
