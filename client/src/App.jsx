import Hero from "./components/Hero";
import Layout from "./components/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import { useSelector } from "react-redux";
import ChatWindow from "./components/ChatWindow";

const App = () => {
  const { loggedIn } = useSelector((state) => state.userReducer);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={loggedIn ? <ChatWindow /> : <Hero />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/login" element={<Login />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
