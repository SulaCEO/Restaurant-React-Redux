import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route path="" element={<Home/>}/>
      </Route>
      <Route path="register" element={<Register/>}/>
      <Route path="login" element={<Login/>}/>
    </Routes>
  );
}

export default App;
