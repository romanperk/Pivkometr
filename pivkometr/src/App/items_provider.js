import React, { useState, createContext, useContext } from "react";

const INITIAL_VALUE = {
  beers: [
    { id: "d1bce180", name: "Plzeň", size: "0,5l", price: 50, quantity: 1 },
    { id: "d1bce48c", name: "Kozel", size: "0,3l", price: 35, quantity: 2 },
  ],
  drinks: [{ id: "d1bce48f", name: "Rumkola", price: 150, quantity: 1 }],
  shots: [{ id: "d1bce5d6", name: "Zelená", price: 50, quantity: 2 }],
  food: [{ id: "d1bce70c", name: "Řízečky s kaší", price: 180, quantity: 1 }],
  nonalco: [{ id: "d1bce82e", name: "Malinovka", size: "0,5l", price: 50, quantity: 1 }],
};

const ItemsContext = createContext();

export const useItems = () => {
  return useContext(ItemsContext);
};

export const ItemsProvider = ({ children }) => {
  const [itemsList, setItemsList] = useState(INITIAL_VALUE);

  const handleAdd = (category, newItem) => {
    setItemsList((prevItemsList) => ({
      ...prevItemsList,
      [category]: [...prevItemsList[category], newItem],
    }));
  };

  const handleUpdate = (updatedItems) => {
    setItemsList(updatedItems);
  };

  const handleDelete = (category, itemId) => {
    setItemsList((prevItemsList) => ({
      ...prevItemsList,
      [category]: prevItemsList[category].filter((item) => item.id !== itemId),
    }));
  };

  const value = {
    itemsList,
    handleAdd,
    handleUpdate,
    handleDelete,
  };

  return <ItemsContext.Provider value={value}>{children}</ItemsContext.Provider>;
};
