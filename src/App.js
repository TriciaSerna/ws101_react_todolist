import Navbar from "./Navbar"
import Home from "./components/Home"
import About from "./components/About"
import Contacts from "./components/Contacts"

function App () {
  let Component
  switch (window.location.pathname) {
      case "/home":
        Component = <Home/>
        break
        case "/about":
          Component = <About/>
          break
          case "/contact":
            Component = <Contacts/>
            break
  }
  return ( 
  <>
  <Navbar/>
  <div className="container">{Component}</div>
  </>
  )
}

export default App