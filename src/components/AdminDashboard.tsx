import React, { useState, useEffect } from 'react';

const AdminDashboard: React.FC = () => {
  // Example state variables
  const [demands, setDemands] = useState<any[]>([]); // Assuming demands is an array of objects representing demand information
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Fetch data from backend API when component mounts
    // Replace this with actual API call to fetch demand information
    // For demonstration purposes, initializing demands with sample data
    const sampleDemands = [
      { id: 1, clientName: 'John Doe', demand: 'Taxi to Airport', status: 'Pending' },
      { id: 2, clientName: 'Jane Doe', demand: 'Taxi to Hotel', status: 'Completed' },
    ];
    setDemands(sampleDemands);
    setLoading(false);
  }, []);

  return (
    <div>
      <h2>Admin Dashboard</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h3>Demands</h3>
          <table>
            <thead>
              <tr>
                <th>Client Name</th>
                <th>Demand</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {demands.map((demand) => (
                <tr key={demand.id}>
                  <td>{demand.clientName}</td>
                  <td>{demand.demand}</td>
                  <td>{demand.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
