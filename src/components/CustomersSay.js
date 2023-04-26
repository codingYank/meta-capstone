import React from "react"
import image from "../assets/icons/restauranfood.jpg"

const CustomersSay = () => {
  return (
    <section>
      <h1 className="testimonial-header">Testimonials</h1>
      <div className="testimonials">
        <div className="testimonial">
          <h6>Eating</h6>
          <div>
            <img src={image}></img>
            <p>Smith</p>
          </div>
          <p>Review Text</p>
        </div>
        <div className="testimonial">
          <h6>Eating</h6>
          <div>
            <img src={image}></img>
            <p>Smith</p>
          </div>
          <p>Review Text</p>
        </div>
        <div className="testimonial">
          <h6>Eating</h6>
          <div>
            <img src={image}></img>
            <p>Smith</p>
          </div>
          <p>Review Text</p>
        </div>
        <div className="testimonial">
          <h6>Eating</h6>
          <div>
            <img src={image}></img>
            <p>Smith</p>
          </div>
          <p>Review Text</p>
        </div>
      </div>
    </section>
  )
}

export default CustomersSay
