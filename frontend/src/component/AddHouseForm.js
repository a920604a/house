import React, { useState, useEffect } from 'react';
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Stack, VStack, HStack,
  Button,
  Text
} from '@chakra-ui/react';

function AddHouseForm() {
  const [formData, setFormData] = useState({
    age: '',
    url: '',
    address: '',
    currentFloor: '', // 新增目前樓層欄位
    totalFloors: '',  // 新增總樓層欄位
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
      <Stack shouldWrapChildren direction='row'>
        <VStack>
          <Text>樓層/總樓層 </Text>
          <HStack>
            <NumberInput size='lg' maxW={80} defaultValue={15} min={10} onChange={(value) => handleChange(value, 'currentFloor')}>
              <NumberInputField />
            </NumberInput>
            <Text>/</Text>
            <NumberInput size='lg' maxW={80} defaultValue={15} min={10} onChange={(value) => handleChange(value, 'totalFloors')}>
              <NumberInputField />
            </NumberInput></HStack>
        </VStack>

        {/* <label>
          <input type="text" name="floor" value={formData.currentFloor} onChange={handleChange} />
          /<input type="text" name="floor" value={formData.totalFloors} onChange={handleChange} />
        </label> */}
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
      </Stack>
    </form >
  );
}


export default AddHouseForm;
