import { useState } from 'react';
import './App.css';
import Details from './components/Details';
import List from './components/List';

function App() {
  const [selectedUser, setSelectedUser] = useState(null);// Состояние для хранения выбранного пользователя

  // Функция для установки выбранного пользователя в константу  через useState
  const handleUserSelect = (user) => {
    setSelectedUser(user)
  }
  return (
    <div className="App">
      <List onSelectUser={handleUserSelect}/>
      <Details info={selectedUser}/>
    </div>
  );
}

export default App;
