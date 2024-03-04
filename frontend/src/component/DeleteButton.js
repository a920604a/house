import React from 'react';

function DeleteButton({ houseId, onDelete }) {
    console.log('houseIdhouseId =', houseId);

    const handleClick = async () => {
        try {
            console.log("houseId = ", houseId)
            const response = await fetch(`http://localhost:8000/addHouse/delete_house/${houseId}/`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error('Failed to delete house');
              }
          
            const data = await response.json();
            console.log(data); // 可以根据返回的数据做进一步处理
            // 触发 onDelete 回调函数
            onDelete();
        } catch (error) {
            console.error('Error deleting house:', error);
        }
    };

    return (
        <button onClick={handleClick}>删除</button>
    );
}

export default DeleteButton;
