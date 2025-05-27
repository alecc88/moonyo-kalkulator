import React from "react";

export default function ProductItem({ product, onIncrease, onDecrease, onChangeQty, onRemove }) {
  return (
    <div style={{ display: "flex", alignItems: "center", marginBottom: 12 }}>
      <img
        src={product.image}
        alt={product.name}
        width={60}
        height={60}
        style={{ marginRight: 12 }}
      />
      <div style={{ flexGrow: 1 }}>
        <div>{product.name}</div>
        <div>Rp {product.price.toLocaleString()}</div>
      </div>
      <button onClick={() => onDecrease(product.id)}>-</button>
      <input
        type="number"
        min="0"
        value={product.qty}
        onChange={(e) => onChangeQty(product.id, e.target.value)}
        style={{ width: 50, textAlign: "center", margin: "0 8px" }}
      />
      <button onClick={() => onIncrease(product.id)}>+</button>
      <button onClick={() => onRemove(product.id)} style={{ marginLeft: 8 }}>
        Hapus
      </button>
    </div>
  );
}
