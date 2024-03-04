import React from 'react';
import DeleteButton from './DeleteButton'; // 确保正确导入 DeleteButton 组件

function HouseList({ houses, onDelete }) {
  return (
    <div>
      <h2>House List</h2>
      <ul>
        {houses.map((house, index) => (
          <li key={index}>
            <p>屋齡: {house.age}</p>
            <p>網址: {house.url}</p>
            <p>地址: {house.address}</p>
            <p>樓層: {house.floor}</p>
            <p>坪數: {house.area}</p>
            {house.thumbnail && <img src={house.thumbnail} alt="缩略图" />}
            <DeleteButton houseId={house.id} onDelete={onDelete} />

          </li>
        ))}
      </ul>
    </div>
  );
}

export default HouseList;
