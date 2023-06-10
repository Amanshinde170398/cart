import "./App.css";
import Cart from "./Cart";
import NavBar from "./NavBar";
import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          price: 99,
          title: "Watch",
          qty: 2,
          img: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2F0Y2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
          id: 1,
        },
        {
          price: 999,
          title: "Mobile phone",
          qty: 1,
          img: "https://images.unsplash.com/photo-1580910051074-3eb694886505?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9iaWxlJTIwcGhvbmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
          id: 2,
        },
        {
          price: 9999,
          title: "laptop",
          qty: 1,
          img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
          id: 3,
        },
      ],
    };
  }

  handleIncreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);
    products[index].qty += 1;
    this.setState({
      products,
    });
  };

  handleDeceaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);
    if (products[index].qty == 1) return;
    products[index].qty -= 1;
    this.setState({
      products,
    });
  };

  handleProductDelete = (id) => {
    const { products } = this.state;
    const items = products.filter((product) => product.id != id);
    this.setState({
      products: items,
    });
  };

  getProductCount = () => {
    const { products } = this.state;
    let count = 0;
    products.forEach((product) => {
      count += product.qty;
    });
    return count;
  };

  getCartTotal = () => {
    const { products } = this.state;
    let total = 0;
    products.forEach((product) => {
      total += product.price;
    });
    return total;
  };

  render() {
    const { products } = this.state;
    return (
      <div>
        <NavBar productCounts={this.getProductCount()} />
        <Cart
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDeceaseQuantity}
          onDeleteProduct={this.handleProductDelete}
        />
        <div>Total: {this.getCartTotal()}</div>
      </div>
    );
  }
}

export default App;
