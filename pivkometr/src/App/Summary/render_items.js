import React from 'react';
import IconButton from '@mui/material/IconButton';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

export default function RenderItems({ items, handleQuantityChange, handleItemDelete }) {
  if (!items || !Array.isArray(items)) {
    return null;
  }

  return items.map((item, index) => (
    <div key={index}>
      {item.name} {item.size ? `${item.size}` : ''} ({item.price}Kč){" "}
      {item.quantity > 0 ? (
        <>
          <IconButton
            onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
            aria-label="remove"
          >
            <RemoveIcon />
          </IconButton>{" "}
          {item.quantity}{" "}
        </>
      ) : (
        <IconButton
          onClick={() => handleItemDelete(item.id)} // Pass itemId to handleItemDelete
          aria-label="delete"
        >
          <DeleteIcon />
        </IconButton>
      )}
      <IconButton
        onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
        aria-label="add"
      >
        <AddIcon />
      </IconButton>{" "}
      = {item.price * item.quantity}Kč
      <br />
    </div>
  ));
}
