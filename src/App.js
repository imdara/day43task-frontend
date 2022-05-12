import "./App.css";
import { Routes, Route } from "react-router-dom";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Forgotpassword from "./components/Forgotpassword";
import Resetpassword from "./components/Resetpassword";

const App = () => {
  return (
    <div className="App">
      <h2>Day 43 task</h2>
      <Routes>
        <Route index element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgotpassword" element={<Forgotpassword />} />
        <Route path="/:id" element={<Resetpassword />} />
      </Routes>
    </div>
  );
};

export default App;
