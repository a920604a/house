import React from "react";
import { Heading, Link, Image, Text, VStack } from "@chakra-ui/react";
import { ExternalLinkIcon } from '@chakra-ui/icons';
import DeleteButton from './DeleteButton'; // 确保正确导入 DeleteButton 组件



const Card = ({ id, currentF, totalF, area, age, url, address, onDelete }) => {
    const cardProperty = {
        backgroundColor: "white",
        borderRadius: "10px",
        color: "black",
        padding: '10px'

    }
    return (
        <VStack style={cardProperty} >
            <Heading size='md'>
                {address}
            </Heading>

            <Text>屋齡: {age}</Text>
            <Text>網址：
                <Link href={url} isExternal>{ }
                    {url} <ExternalLinkIcon mx='2px' />
                </Link>
            </Text>
            <Text>地址: {address}</Text>
            <Text>樓層: {currentF}/{totalF}</Text>
            <Text>坪數: {area}</Text>
            <DeleteButton houseId={id} onDelete={onDelete} />
        </VStack>

    );
}
export default Card;