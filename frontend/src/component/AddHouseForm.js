import React, { useState, useEffect } from 'react';

function AddHouseForm() {
  const [formData, setFormData] = useState({
    age: '',
    url: '',
    address: '',
    floor: '',
    area: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8000/addHouse/add_house/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log(data); // 可以根据返回的数据做进一步处理
    } catch (error) {
      console.error('Error adding house:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        屋齡:
        <input type="text" name="age" value={formData.age} onChange={handleChange} />
      </label>
      <label>
        網址:
        <input type="text" name="url" value={formData.url} onChange={handleChange} />
      </label>
      <label>
        地址:
        <input type="text" name="address" value={formData.address} onChange={handleChange} />
      </label>
      <label>
        樓層:
        <input type="text" name="floor" value={formData.floor} onChange={handleChange} />
      </label>
      <label>
        坪數:
        <input type="text" name="area" value={formData.area} onChange={handleChange} />
      </label>
      <button type="submit">新增房屋</button>
    </form>
  );
}


export default AddHouseForm;
