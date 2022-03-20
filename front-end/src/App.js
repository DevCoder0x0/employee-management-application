import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header.js";
import Home from "./pages/Home.js";
import Login from "./pages/Login.js";
import Register from "./pages/Register.js";
import Portal from "./pages/Portal.js";
import "./App.css";

function App() {
  return (
    <>
    <div className="App">
      <BrowserRouter>
        < Header />
        < Home />
        < Login />
        < Register />
        < Portal />
      </BrowserRouter>

    </div>
          
    </>
  )
}

export default App;