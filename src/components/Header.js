import React from "react"
import food from "../assets/icons/restauranfood.jpg"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header>
      <div className="header-info">
        <h1>Little Lemon</h1>
        <h3>Chicago</h3>
        <p>
          the user is taken to another screen and that this highlights section
          is scrollable horizontally in order to see
        </p>
        <Link className="button">Reserve a Table</Link>
      </div>
      <img src={food}></img>
    </header>
  )
}

export default Header
