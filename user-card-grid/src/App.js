import React, { useState } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import UserGrid from './components/UserGrid';
import './styles/App.css'; // Import your custom CSS here

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleGetUsers = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://reqres.in/api/users?page=1');
      setUsers(response.data.data);
      console.log(response.data.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching users:', error);
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <Navbar getUsers={handleGetUsers} />
      {loading ? <div className="loader">Loading...</div> : <UserGrid users={users} />}
    </div>
  );
};

export default App;
