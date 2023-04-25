import { Formik, Form, Field, ErrorMessage } from "formik"
import React, { useState } from "react"
import { booking } from "../schemas/YupBooking"

const BookingForm = ({ times, submit }) => {
  const data = {
    date: "",
    time: "",
    guests: 1,
    occasion: "Other",
  }

  const onSubmit = (e) => {
    console.log()
    submit()
  }
  console.log(times)
  return (
    <>
      <h1>Book Now</h1>
      <Formik
        initialValues={data}
        onSubmit={onSubmit}
        validationSchema={booking}
      >
        <Form>
          <label htmlFor="res-date">Choose date</label>
          <Field type="date" id="res-date" name="date"></Field>
          <ErrorMessage name="date" />
          <label htmlFor="res-time">Choose time</label>
          <Field id="res-time " name="time" component="select">
            {times.map((time) => (
              <option key={time}>{time}</option>
            ))}
          </Field>
          <label htmlFor="guests">Number of guests</label>
          <Field
            type="number"
            // placeholder="1"
            min="1"
            max="10"
            id="guests"
            name="guests"
          ></Field>
          <label htmlFor="occasion">Occasion</label>
          <Field id="occasion" component="select" name="occasion">
            <option>Other</option>
            <option>Birthday</option>
            <option>Anniversary</option>
          </Field>
          <button type="submit">Make Your reservation</button>
        </Form>
      </Formik>
    </>
  )
}

export default BookingForm
