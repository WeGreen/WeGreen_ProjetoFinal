import { Router } from "./Routes/routes"
import { Routes , Route, Navigate } from "react-router-dom"
import { GlobalStyle } from "./Styles/globalStyles"
import { Reset } from "./Styles/reset"

function App() {

  return (
    <>
      <Router/>
      <div>
        <Routes>
          <Route path='/' element={<Navigate to='/login'/>}></Route>
        </Routes>
      </div>
      <Router/>
      <Reset/>
      <GlobalStyle/>
    </>
  )
}

export default App
