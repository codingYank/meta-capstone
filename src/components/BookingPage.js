import React from "react"
import BookingForm from "./BookingForm"

const BookingPage = ({ times, submit }) => {
  return (
    <>
      BookingPage
      <BookingForm times={times} submit={submit} />
    </>
  )
}

export default BookingPage
