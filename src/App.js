
import Login from './components/authentication/Login';
import Navbar from './components/navbar/Navbar';
import SignUp from "./components/authentication/SignUp"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<SignUp />}> </Route>
        <Route exact path="login" element={<Login />}> </Route>
       
     
    </Routes>
  </BrowserRouter>
  )
}

export default App;
