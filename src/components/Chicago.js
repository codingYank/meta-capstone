import React from "react"
import a from "../assets/icons/Mario and Adrian A.jpg"
import b from "../assets/icons/Mario and Adrian b.jpg"

const Chicago = () => {
  return (
    <section className="chicago">
      <div className="header-info">
        <h1>Little Lemon</h1>
        <h3>Chicago</h3>
        <p>
          the user is taken to another screen and that this highlights section
          is scrollable horizontally in order to see the user is taken to
          another screen and that this highlights section is scrollable
          horizontally in order to see
        </p>
      </div>
      <div className="images">
        <img className="a" src={a} alt="Mario and Adrian"></img>
        <img className="b" src={b} alt="Mario and Adrian"></img>
      </div>
    </section>
  )
}

export default Chicago
