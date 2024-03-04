import './App.css';
import React, { useState, useEffect } from 'react';

import AddHouseForm from './component/AddHouseForm';
import HouseList from './component/HouseList';
import DeleteButton from './component/DeleteButton';


function App() {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    // 初始加載房屋列表
    fetchHouses();

    // 每秒更新房屋列表
    const interval = setInterval(() => {
      fetchHouses();
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  const fetchHouses = async () => {
    try {
      const response = await fetch('http://localhost:8000/addHouse/house_list/');
      const data = await response.json();
      setHouses(data.houses);
    } catch (error) {
      console.error('Error fetching houses:', error);
    }
  };

  const handleDelete = () => {
    // 刷新房屋列表
    fetchHouses();
  };

  return (
    <div className="App">
      <h1>房屋信息管理系統</h1>
      {/* <h1>House Information</h1> */}
      <AddHouseForm />
      <h2>House List</h2>
      <HouseList houses={houses} onDelete={handleDelete} />
      {/* <HouseList /> */}

    </div>
  );
}

export default App;
