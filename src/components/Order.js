import React, { Component } from "react"

export class Order extends Component {
  render() {
    return (
      <div className='order'>
        <img src={'./img/' + this.props.item.img} />
        <h2>{this.props.item.title}</h2>
        <i>{this.props.item.price}</i>
      </div>
    )
  }
}

export default Order
