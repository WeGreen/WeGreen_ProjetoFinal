
import { Routes , Route, Navigate } from "react-router-dom"
import { Router } from "./Routes/routes"
import { GlobalStyle } from "./Styles/globalStyles"
import { Reset } from "./Styles/reset"






function App() {

  return (
    <>
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
