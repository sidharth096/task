import React, { useState } from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);

  const addUser = async () => {
    try {
      const response = await fetch(`https://randomuser.me/api`);
      const data = await response.json();

      setUsers([...users, data.results[0].name.first]);

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const deleteUser = (userToRemove) => {
    const updatedUsers = users.filter((user) => user !== userToRemove);
    setUsers(updatedUsers);
  };

  return (
    <div className="App">
      <button onClick={addUser}>Add new</button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user}</td>
              <td>
                <button onClick={() => deleteUser(user)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
