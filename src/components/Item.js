import React, { Component } from 'react'

export class Item extends Component {
  render() {
    return (
      <div className='item'>
        <img src={'./img/' + this.props.item.img} />
        <h2>{this.props.item.title}</h2>
        <p>{this.props.item.desc}</p>
        <i>{this.props.item.price}</i>
        <div className='add-to-cart' onClick={() => this.props.onAdd(this.props.item)}>+</div>
      </div>
    )}
}

export default Item
