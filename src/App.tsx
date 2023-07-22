import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

import { Navbar, Footer } from "./sections"
import { Background } from "./components"

import "./scss/index.scss"
import { About, Compare, MyList, Pokemon, Search } from "./pages"

function App() {
  return (
    <div className="main-container">
      <Background />

      <BrowserRouter>
        <div className="app">
          <Navbar />
          <Routes>
            <Route path="/search" element={<Search />} />
            <Route path="/list" element={<MyList />} />
            <Route path="/about" element={<About />} />
            <Route path="/compare" element={<Compare />} />
            <Route path="/pokemon/:id" element={<Pokemon />} />

            <Route path="*" element={<Navigate to="/pokemon/1" />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  )
}
export default App
