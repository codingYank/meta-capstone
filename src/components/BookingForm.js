import { Formik, Form, Field } from "formik"
import React, { useState } from "react"

const BookingForm = ({ times }) => {
  const data = {
    date: "",
    time: "17:00",
    guests: 1,
    occasion: "Birthday",
  }
  console.log(times)
  return (
    <>
      <h1>Book Now</h1>
      <Formik initialValues={data}>
        <Form>
          <label htmlFor="res-date">Choose date</label>
          <Field type="date" id="res-date" name="date"></Field>
          <label htmlFor="res-time">Choose time</label>
          <Field id="res-time " name="time" component="select">
            {times.map((time) => {
              return <option key={time}>{time}</option>
            })}
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
