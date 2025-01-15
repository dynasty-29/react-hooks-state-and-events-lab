import React, {useState} from "react";

function Item({ name, category }) {

  const [isInCart, setIsInCart] = useState(false);
  function handleAddToCartClick() {
    setIsInCart(!isInCart);
  }
  const cartClass = isInCart ? "in-cart" : "";
  return (
    <li className={cartClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleAddToCartClick}>{isInCart ? "Remove from cart": "Add to cart"}</button>
    </li>
  );
}

export default Item;
