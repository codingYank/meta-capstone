import React from "react"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer>
      <nav>
        <h3>Doormat Navigation</h3>
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/about">ABOUT</Link>
          </li>
          <li>
            <Link to="/menu">MENU</Link>
          </li>
          <li>
            <Link to="/reservations">RESERVATIONS</Link>
          </li>
          <li>
            <Link to="/order-online">ORDER ONLINE</Link>
          </li>
          <li>
            <Link to="/login">LOGIN</Link>
          </li>
        </ul>
      </nav>
      <div>
        <h3>Contact</h3>
        <p>Address</p>
        <p>Phone Number</p>
        <p>Email</p>
      </div>
      <div>
        <h3>Social Links</h3>
        <a href="https://www.facebook.com/" target="blank">
          Facebook
        </a>
      </div>
    </footer>
  )
}

export default Footer
