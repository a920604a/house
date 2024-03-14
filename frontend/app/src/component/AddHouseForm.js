import React, { useState, useEffect } from 'react';
import {
  Heading,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Stack, VStack, HStack,
  Button,
  Text
} from '@chakra-ui/react';

function HouseappForm() {
  const [formData, setFormData] = useState({
    age: '',
    url: '',
    address: '',
    currentfloor: '', // 新增目前樓層欄位
    totalfloor: '',  // 新增總樓層欄位
    area: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8000/House/add_house/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log(data); // 可以根据返回的数据做进一步处理
      // 提交后清空表单数据
      setFormData({
        age: '',
        url: '',
        address: '',
        currentfloor: '',
        totalfloor: '',
        area: ''
      });
    } catch (error) {
      console.error('Error adding house:', error);
    }

  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <HStack>
      <Heading as="h1">
        新增房屋
      </Heading>

      <form onSubmit={handleSubmit}>
        <label>
          <input type="text" name="currentfloor" value={formData.currentfloor} onChange={handleChange} />
          /<input type="text" name="totalfloor" value={formData.totalfloor} onChange={handleChange} />
        </label>
        <label>
          坪數:
          <input type="text" name="area" value={formData.area} onChange={handleChange} />
        </label>
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

        <Button type="submit">新增房屋</Button>
      </form >
    </HStack>
  );
}


export default HouseappForm;
