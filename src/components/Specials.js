import React from "react"
import { Link } from "react-router-dom"
import salad from "../assets/icons/greek salad.jpg"
import bruchetta from "../assets/icons/bruchetta.svg"
import dessert from "../assets/icons/lemon dessert.jpg"

const Specials = () => {
  return (
    <section>
      <div className="section-header">
        <h2>Specials</h2>
        <Link to="/menu" className="button">
          Online Menu
        </Link>
      </div>
      <div className="card-container">
        <div className="card">
          <img src={salad}></img>
          <div className="price-container">
            <p>Greek Salad</p>
            <p className="price">$12.99</p>
          </div>
          <p>
            the user is taken to another screen and that this highlights section
            is scrollable horizontally .
          </p>
          <Link to="/menu">Order a Delivery</Link>
        </div>
        <div className="card">
          <img src={bruchetta}></img>
          <div className="price-container">
            <p>Bruchetta</p>
            <p className="price">$5.99</p>
          </div>
          <p>
            the user is taken to another screen and that this highlights section
            is scrollable horizontally .
          </p>
          <Link to="/menu">Order a Delivery</Link>
        </div>
        <div className="card">
          <img src={dessert}></img>
          <div className="price-container">
            <p>Lemon Dessert</p>
            <p className="price">$5.00</p>
          </div>
          <p>
            the user is taken to another screen and that this highlights section
            is scrollable horizontally .
          </p>
          <Link to="/menu">Order a Delivery</Link>
        </div>
      </div>
    </section>
  )
}

export default Specials
