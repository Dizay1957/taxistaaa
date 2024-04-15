import React, { useState, useEffect } from 'react';

const AgencyDashboard: React.FC = () => {
  // Example state variables
  const [taxis, setTaxis] = useState<any[]>([]); // Assuming taxis is an array of objects representing taxi information
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Fetch data from backend API when component mounts
    // Replace this with actual API call to fetch taxi information for the agency
    // For demonstration purposes, initializing taxis with sample data
    const sampleTaxis = [
      { id: 1, brand: 'Toyota', model: 'Camry', plateNumber: 'ABC123' },
      { id: 2, brand: 'Honda', model: 'Accord', plateNumber: 'XYZ456' },
    ];
    setTaxis(sampleTaxis);
    setLoading(false);
  }, []);

  return (
    <div>
      <h2>Agency Dashboard</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h3>Your Taxis</h3>
          <ul>
            {taxis.map((taxi) => (
              <li key={taxi.id}>
                <strong>{taxi.brand} {taxi.model}</strong> - {taxi.plateNumber}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default AgencyDashboard;
