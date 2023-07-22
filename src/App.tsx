import { Navbar, Footer, Wrapper } from "./sections"
import { Background } from "./components"

import "./scss/index.scss"

function App() {
  return (
    <div className="main-container">
      <Background />
      <div className="app">
        <Navbar />
        <Wrapper />
        <Footer />
      </div>
    </div>
  )
}
export default App
