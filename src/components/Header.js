import React, { useState } from "react";
import Order from "./Order";

const showOrders = (props) => {
  return(
    <div>
      {props.orders.map(el => (
        <Order key={el.id} item={el} />
      ))}
    </div>
  )
}
const showNothing = () => {
  return(
    <div className='empty'>
      <p>Товаров нет</p>
    </div>
  )
}

export default function Header(props) {
  let [cartOpen, setCartOpen] = useState(false)

    return (
        <header>
            <div>
                <span className='logo'>магазин</span>
                <ul className='navigation'>
                    <li><button className='cart-button' onClick={() => setCartOpen(cartOpen = !cartOpen)}>корзина</button></li>
                    <li>о нас</li>
                    <li>контакты</li>
                </ul>
                {
                  cartOpen && (
                    <div className='shop-cart'>
                      {
                        props.orders.length > 0 ?
                          showOrders(props) : showNothing()
                      }
                    </div>
                )}
            </div>
            <div className='presentation'></div>
        </header>
    )
}
