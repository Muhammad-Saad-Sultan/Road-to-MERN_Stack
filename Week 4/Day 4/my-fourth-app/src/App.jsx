import { useState } from "react";
import NavBar from "./components/NavBar";
import Products from "./components/Products"

const App = () => {
  const products = [
    {
      id: 1,
      name: "Laptop",
      price: 150000,
      category: "Electronics",
      inStock: true
    },
    {
      id: 2,
      name: "Mobile",
      price: 50000,
      category: "Electronics",
      inStock: true
    },
    {
      id: 3,
      name: "LED-TV",
      price: 40000,
      category: "Electronics",
      inStock: false
    },
    {
      id: 4,
      name: "Chair",
      price: 5000,
      category: "Furniture",
      inStock: true
    },
    {
      id: 5,
      name: "Table",
      price: 10000,
      category: "Furniture",
      inStock: true
    },
    {
      id: 6,
      name: "Spoons & Knives",
      price: 1000,
      category: "Kitchen Ware",
      inStock: false
    },
    {
      id: 7,
      name: "Plates & Tray Set",
      price: 3000,
      category: "Kitchen Ware",
      inStock: true
    },
    {
      id: 8,
      name: "Car",
      price: 10000000,
      category: "Auto Mobile",
      inStock: false
    },
    {
      id: 9,
      name: "Bike",
      price: 250000,
      category: "Auto Mobile",
      inStock: true
    },
    {
      id: 10,
      name: "T-Shirts",
      price: 1500,
      category: "Clothing",
      inStock: true
    }
  ];

  const [filter, setFilter] = useState('');
  const [sort, setSort] = useState('default');

  return (
    <div>
      <NavBar products={products} setFilter={setFilter} sort={sort} setSort={setSort} />
      <Products products={products} filter={filter} sort={sort} />
    </div>
  );
};

export default App;
