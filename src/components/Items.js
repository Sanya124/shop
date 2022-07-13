import React, { Component } from "react"
import Item from "./Item"

export class Items extends Component {
  render() {
    return (
      <main>
        {this.props.item.map(element => (
          <Item key={element.id} item={element} onAdd={this.props.onAdd} />
        ))}
      </main>
    )
  }
}

export default Items
