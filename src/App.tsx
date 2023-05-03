import { Router } from "./Routes/routes"
import { GlobalStyle } from "./Styles/globalStyles"
import { Reset } from "./Styles/reset"


function App() {
  return (
    <>
      <Router />
      <Reset />
      <GlobalStyle />
    </>
  );
}

export default App;
