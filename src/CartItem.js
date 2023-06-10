import React from "react";

const cartItem = (props) => {
  const { price, title, qty, img } = props.product;
  const { onIncreaseQuantity, onDecreaseQuantity, onDeleteProduct, product } =
    props;
  return (
    <div className="cart-item">
      <div className="left-block">
        <img style={styles.image} src={img} />
      </div>
      <div className="right-block">
        <div style={{ fontSize: 25 }}>{title}</div>
        <div style={{ color: "#777" }}>Rs: {price}</div>
        <div style={{ color: "#777" }}>Qty: {qty}</div>
        <div className="cart-item-actions">
          <img
            onClick={() => {
              onIncreaseQuantity(product);
            }}
            alt="increase"
            className="action-icons"
            src="https://cdn-icons-png.flaticon.com/128/992/992651.png"
          />
          <img
            onClick={() => {
              onDecreaseQuantity(product);
            }}
            alt="decrease"
            className="action-icons"
            src="https://cdn-icons-png.flaticon.com/128/992/992683.png"
          />
          <img
            onClick={() => {
              onDeleteProduct(product.id);
            }}
            alt="delete"
            className="action-icons"
            src="https://cdn-icons-png.flaticon.com/128/3405/3405244.png"
          />
        </div>
      </div>
    </div>
  );
};

const styles = {
  image: {
    height: 110,
    width: 110,
    boderRadius: 4,
  },
};

export default cartItem;
