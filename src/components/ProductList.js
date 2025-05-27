import React, { useState } from "react";
import ProductItem from "./ProductItem";

export default function ProductList() {
  const initialProducts = [
    { id: 1, name: "Produk 1", price: 10000, image: "https://via.placeholder.com/60", qty: 0 },
    { id: 2, name: "Produk 2", price: 20000, image: "https://via.placeholder.com/60", qty: 0 },
    { id: 3, name: "Produk 3", price: 15000, image: "https://via.placeholder.com/60", qty: 0 },
  ];

  const [products, setProducts] = useState(initialProducts);

  const increaseQty = (id) => {
    setProducts(products.map(p => (p.id === id ? { ...p, qty: p.qty + 1 } : p)));
  };

  const decreaseQty = (id) => {
    setProducts(products.map(p => (p.id === id && p.qty > 0 ? { ...p, qty: p.qty - 1 } : p)));
  };

  const changeQty = (id, value) => {
    const val = Math.max(0, Number(value) || 0);
    setProducts(products.map(p => (p.id === id ? { ...p, qty: val } : p)));
  };

  const removeProduct = (id) => {
    setProducts(products.filter(p => p.id !== id));
  };

  const addProduct = () => {
    if (products.length >= 8) return alert("Maksimal 8 produk");
    const newId = products.length ? Math.max(...products.map(p => p.id)) + 1 : 1;
    const newProduct = {
      id: newId,
      name: `Produk ${newId}`,
      price: 0,
      image: "https://via.placeholder.com/60",
      qty: 0,
    };
    setProducts([...products, newProduct]);
  };

  return (
    <div style={{ maxWidth: 400, padding: 20 }}>
      <h2>Tambah Produk</h2>
      {products.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          onIncrease={increaseQty}
          onDecrease={decreaseQty}
          onChangeQty={changeQty}
          onRemove={removeProduct}
        />
      ))}

      <button onClick={addProduct} style={{ marginTop: 12 }}>
        Tambah Produk
      </button>
    </div>
  );
}
