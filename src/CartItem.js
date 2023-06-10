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

  increaseQuantity = () => {
    // console.log("test.state", this.state);
    // set state form 1
    // this.setState({
    //   qty: this.state.qty + 1,
    // });

    // set state form 2
    this.setState((prevState) => {
      return {
        qty: prevState.qty + 1,
      };
    });
  };

  decreaseQuantity = () => {
    this.setState((prevState) => {
      if (prevState.qty > 1)
        return {
          qty: prevState.qty - 1,
        };
      return {
        qty: prevState.qty,
      };
    });
  };

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
              onClick={this.increaseQuantity}
              alt="increase"
              className="action-icons"
              src="https://cdn-icons-png.flaticon.com/128/992/992651.png"
            />
            <img
              onClick={this.decreaseQuantity}
              alt="decrease"
              className="action-icons"
              src="https://cdn-icons-png.flaticon.com/128/992/992683.png"
            />
            <img
              alt="delete"
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
