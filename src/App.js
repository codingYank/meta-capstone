import "./App.css"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Main from "./components/Main"
import Nav from "./components/Nav"

function App() {
  return (
    <>
      <section className="heading">
        <Header />
        <Nav />
      </section>
      <Main />
      <Footer />
    </>
  )
}

export default App
