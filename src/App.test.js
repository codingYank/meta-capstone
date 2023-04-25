import { render, screen } from "@testing-library/react"
import App from "./App"
import BookingForm from "./components/BookingForm"

test("renders the BookingForm heading", () => {
  render(<BookingForm />)
  const headingElement = screen.getByText("Book Now")
  expect(headingElement).toBeInTheDocument()
})

// test('update Times', () => {
//   render(<App />)
//   const updateTimesFunction = function
// })
