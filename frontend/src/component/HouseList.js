import React from 'react';
import DeleteButton from './DeleteButton'; // 确保正确导入 DeleteButton 组件

import {
  Card, CardHeader, CardBody, CardFooter,
  Editable,
  EditableInput,
  EditableTextarea,
  EditablePreview,
  Link,
  Text,
  Box,
  Badge
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';


function HouseList({ houses, onDelete }) {
  return (
    <div>
      <h2>House List</h2>
      <ul>
        {houses.map((house, index) => (
          < Box key={index} >
            <Badge>
              <Text>{house.update_at}</Text>
            </Badge>
            <Box>
              <Text>屋齡: {house.age}</Text>
              <Text>網址：<Link href={house.url} isExternal>
                {house.url} <ExternalLinkIcon mx='2px' />
              </Link></Text>

              <Text>地址:</Text>
              <Text>樓層: {house.floor}</Text>
              <Text>坪數: {house.area}</Text>
              {house.thumbnail && <img src={house.thumbnail} alt="缩略图" />}
              <DeleteButton houseId={house.id} onDelete={onDelete} />

            </Box>
          </Box>
        ))}
      </ul>
    </div >
  );
}

export default HouseList;
