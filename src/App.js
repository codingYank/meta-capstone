import { Routes, Route } from "react-router-dom"
import "./App.css"
import Footer from "./components/Footer"
import HomePage from "./components/HomePage"
import Main from "./components/HomePage"
import Nav from "./components/Nav"
import Chicago from "./components/Chicago"
import BookingPage from "./components/BookingPage"
import Menu from "./components/Menu"
import Login from "./components/Login"
import { useReducer, useState } from "react"

function App() {
  const initializeTimes = () => {
    return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]
  }

  const availableTimes = {
    times: initializeTimes,
  }
  const UpdateTimes = (state, action) => {
    return state
  }
  const [times, dispatch] = useReducer(UpdateTimes, availableTimes)

  console.log(initializeTimes())

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/menu" element={<Menu />}></Route>
        <Route path="/about" element={<Chicago />}></Route>
        <Route
          path="/reservations"
          element={<BookingPage times={initializeTimes()} />}
        ></Route>
        <Route path="/order-online" element={<Menu />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App
