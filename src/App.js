import { Routes, Route, useNavigate } from "react-router-dom"
import "./App.css"
import Footer from "./components/Footer"
import HomePage from "./components/HomePage"
import Main from "./components/HomePage"
import Nav from "./components/Nav"
import Chicago from "./components/Chicago"
import BookingPage from "./components/BookingPage"
import Menu from "./components/Menu"
import Login from "./components/Login"
import { useEffect, useReducer, useState } from "react"
import { fetchAPI, submitAPI } from "./Api"
import Confirmed from "./components/Confirmed"

function App() {
  const navigate = useNavigate()
  const submit = (data) => {
    let success = submitAPI(data)
    console.log(success)
    if (success) {
      navigate("/confirmed")
    }
  }

  const initializeTimes = () => {
    let today = new Date()
    console.log(fetchAPI(today))

    return fetchAPI(today)
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
          element={<BookingPage times={initializeTimes()} submit={submit} />}
        ></Route>
        <Route path="/order-online" element={<Menu />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/confirmed" element={<Confirmed />}></Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App
