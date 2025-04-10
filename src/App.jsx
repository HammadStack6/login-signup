// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./Signup";
import Login from "./Login";
import Display from "./Display"; // <-- import it!

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/display" element={<Display />} />{" "}
        {/* <-- add Display route */}
      </Routes>
    </Router>
  );
};

export default App;
