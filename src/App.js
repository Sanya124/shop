import React from "react";
import Header from "./components/Header";
import Items from "./components/Items"
import Footer from "./components/Footer";

class App extends React.Component {
constructor(props) {
  super(props)
  this.state = {
    orders: [],
    items: [
      {
        id: 1,
        title: 'Зубная паста',
        img: 'toothpaste.jpg',
        desc: 'Зубная паста высокого качества',
        category: '',
        price: '99,99'
      },
      {
        id: 2,
        title: 'Печенье',
        img: 'cookies.jpg',
        desc: 'Печенье витаминизированное традиционное',
        category: '',
        price: '149,99'
      },
      {
        id: 3,
        title: 'Вода',
        img: 'water.jpg',
        desc: 'Питьевая вода в бутылке',
        category: '',
        price: '9,99'
      },
      {
        id: 4,
        title: 'Снек',
        img: 'snack.png',
        desc: 'Снеки в ассортименте',
        category: '',
        price: '39,99'
      },
    ]
  }
  this.addToOrder = this.addToOrder.bind(this)
}
render() {
  return (
    <div className="wrapper">
      <Header orders={this.state.orders} />
      <Items item={this.state.items} onAdd={this.addToOrder} />
      <Footer />
    </div>
  );
}

  addToOrder(item) {
    this.setState({ orders: [...this.state.orders, item] })
  }

};

export default App;
