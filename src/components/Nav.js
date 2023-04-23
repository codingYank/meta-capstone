import React from "react"
import logo from "../assets/icons/Logo.svg"

const Nav = () => {
  return (
    <nav>
      <img src={logo}></img>
      <ul>
        <li>
          <a href="/">HOME</a>
        </li>
        <li>
          <a href="/about">ABOUT</a>
        </li>
        <li>
          <a href="/menu">MENU</a>
        </li>
        <li>
          <a href="/reservations">RESERVATIONS</a>
        </li>
        <li>
          <a href="/order-online">ORDER ONLINE</a>
        </li>
        <li>
          <a href="/login">LOGIN</a>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
