import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import Navbar from "./components/Navbar";
import { AuthContextProvider } from "./context/Authcontext";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Account from "./pages/Account"



function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Account" element={<Account />} />
        </Routes>
      </AuthContextProvider>

    </div>
  );
}

export default App;
