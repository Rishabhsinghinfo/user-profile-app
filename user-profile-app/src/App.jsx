import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      const response = await fetch('https://randomuser.me/api/?page=1&results=1&seed=abc');
      const data = await response.json();
      setUser(data.results[0]);
    } catch (error) {
      console.error('Error fetching user:', error);
    }
  };

  return (
    <div className="App">
      {user && <UserProfile user={user} />}
    </div>
  );
}

const UserProfile = ({ user }) => {
  return (
    <div className="center">
      <div className="card">
        <img src={user.picture.large} alt={user.name.first} />
        <div className="details">
          <h4>{`${user.name.first} ${user.name.last}`}</h4>
          <p><strong>Gender:</strong> {user.gender}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>City:</strong> {user.location.city}</p>
          {/* Add more details here as needed */}
        </div>
      </div>
    </div>
  );
};

export default App;
