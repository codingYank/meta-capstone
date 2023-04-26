import React from "react"
import BookingForm from "./BookingForm"

const BookingPage = ({ times, submit }) => {
  return (
    <>
      <h1 className="section-heading">Reserve a Table With Us!</h1>
      <BookingForm times={times} submit={submit} />
    </>
  )
}

export default BookingPage
