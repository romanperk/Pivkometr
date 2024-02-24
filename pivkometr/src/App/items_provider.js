import React, { useState, useMemo } from "react";

const INITIAL_VALUE = [
  {
    beers: [
        { id: "d1bce180", name: "Plzeň", size: 0.5, price: 50, quantity: 1 },
        { id: "d1bce48c", name: "Kozel", size: 0.3, price: 35, quantity: 2 }
    ],
    drinks: [
        { id: "d1bce48f", name: "Rumkola", price: 150, quantity: 1 },
    ],
    shots: [
        { id: "d1bce5d6", name: "Zelená", price: 50, quantity: 2 },
    ],
    food: [
        { id: "d1bce70c", name: "Řízečky s kaší", price: 180, quantity: 1 },
    ],
    nonalco: [
        { id: "d1bce82e", name: "Malinovka", size: 0.5, price: 50, quantity: 1 },
    ],
  },
];

const ItemsProvider = ({ children }) => {
  const [itemsList, setItemsList] = useState(INITIAL_VALUE);

  const handleCreate = (dtoIn) => {
    setItemsList((current) => {
      const newItemsList = [...current, dtoIn];
      return newItemsList;
    });
  };

  const handleUpdate = (dtoIn) => {
    setItemsList((current) => {
      const newItemsList = current.map((item) =>
        item.id === dtoIn.id ? { ...item, ...dtoIn } : item
      );
      return newItemsList;
    });
  };

  const handleDelete = (dtoIn) => {
    setItemsList((current) => {
      const newItemsList = current.filter((item) => item.id !== dtoIn.id);
      return newItemsList;
    });
  };

  const value = useMemo(
    () => ({
      itemsList,
      handleCreate,
      handleUpdate,
      handleDelete,
    }),
    [itemsList]
  );

  return (
    <div>
      {typeof children === "function" ? children(value) : children}
    </div>
  );
};

export default ItemsProvider;
