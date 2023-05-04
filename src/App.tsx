import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Router } from "./Routes/routes"
import { GlobalStyle } from "./Styles/globalStyles"
import { Reset } from "./Styles/reset"


function App() {
  return (
    <>
      <ToastContainer/>
      <Router />
      <Reset />
      <GlobalStyle />
    </>
  );
}

export default App;
