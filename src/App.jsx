import React from "react";
import ProductTable from "./components/ProductTable";
import SearchBar from "./components/SearchBar";
import styled from "styled-components";

const Main = styled.main`
  width: 600px;
  padding: 1rem;
  box-shadow: 0px 0px 20px black;
  border-radius: 10px;
  color: white;
  background-color: #1a1c43;
`;

export default function FilterableProductTable() {
  console.clear();

  const PRODUCTS = [
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Vegetables", price: "$5", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Stationary", price: "$7", stocked: false, name: "Copy" },
    { category: "Vegetables", price: "$6", stocked: true, name: "Egg Plant" },
    { category: "Fruits", price: "$3", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$8", stocked: true, name: "Banana" },
    { category: "Stationary", price: "$9", stocked: true, name: "Pencil" },
    { category: "Vegetables", price: "$11", stocked: true, name: "Carrot" },
    { category: "Fruits", price: "$11", stocked: false, name: "Papaya" },
  ];

  const [showStocked, setShowStocked] = React.useState(true);
  const [filterSearch, setFilterSearch] = React.useState("");

  function handleCheck() {
    setShowStocked(!showStocked);
  }

  function handleSearchChange(newChar) {
    setFilterSearch(newChar.target.value);
  }

  return (
    <Main>
      <SearchBar
        showStocked={showStocked}
        handleCheck={handleCheck}
        filterSearch={filterSearch}
        handleSearchChange={handleSearchChange}
      />
      <ProductTable
        products={PRODUCTS}
        showStocked={showStocked}
        filterSearch={filterSearch}
      />
    </Main>
  );
}
