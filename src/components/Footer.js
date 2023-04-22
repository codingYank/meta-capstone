import React from "react"

const Footer = () => {
  return (
    <footer>
      <nav>
        <h3>Doormat Navigation</h3>
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
