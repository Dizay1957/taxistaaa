import React, { useState } from 'react';

const ClientDemands: React.FC = () => {
  const [demand, setDemand] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleDemandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would handle the submission logic, such as calling an API to submit the demand
    console.log('Submitted demand:', demand);
    // Reset the demand input field after submission
    setDemand('');
    // Set submitted to true to show a confirmation message
    setSubmitted(true);
  };

  return (
    <div>
      <h2>Make a Demand</h2>
      <form onSubmit={handleDemandSubmit}>
        <div>
          <label htmlFor="demand">Demand:</label>
          <input
            type="text"
            id="demand"
            value={demand}
            onChange={(e) => setDemand(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit Demand</button>
      </form>
      {submitted && <p>Your demand has been submitted successfully!</p>}
    </div>
  );
};

export default ClientDemands;
