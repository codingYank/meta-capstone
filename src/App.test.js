import { render, screen, fireEvent } from "@testing-library/react"
import App from "./App"
import BookingForm from "./components/BookingForm"

test("renders the BookingForm heading", () => {
  render(<BookingForm />)
  const headingElement = screen.getByText("Book Now")
  expect(headingElement).toBeInTheDocument()
})

test("Updates the time correctly", () => {
  render(<BookingForm />)
  const dateSelector = screen.getByLabelText(/Choose date/)
  fireEvent.change(dateSelector, { target: { value: "2023-04-25" } })
  const timeDropDown = screen.getByLabelText(/Choose time/)
  fireEvent.change(timeDropDown, { target: { value: "17:00" } })
  expect(timeDropDown.value).toEqual("17:00")
})
