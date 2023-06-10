import React from "react";

class cartItem extends React.Component {
  constructor() {
    super();
    this.state = {
      price: 1999,
      title: "Mobile phone",
      qty: 1,
      img: "",
    };
  }
  render() {
    const { price, title, qty, img } = this.state;
    return (
      <div className="cart-item">
        <div className="left-block">
          <img style={styles.image} />
        </div>
        <div className="right-block">
          <div style={{ fontSize: 25 }}>{title}</div>
          <div style={{ color: "#777" }}>Rs: {price}</div>
          <div style={{ color: "#777" }}>Qty: {qty}</div>
          <div className="cart-item-actions">
            <img
              alt=""
              className="action-icons"
              src="https://cdn-icons-png.flaticon.com/128/992/992651.png"
            />
            <img
              alt=""
              className="action-icons"
              src="https://cdn-icons-png.flaticon.com/128/992/992683.png"
            />
            <img
              alt=""
              className="action-icons"
              src="https://cdn-icons-png.flaticon.com/128/3405/3405244.png"
            />
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  image: {
    height: 110,
    width: 110,
    boderRadius: 4,
  },
};

export default cartItem;
