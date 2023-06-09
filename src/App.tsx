import { Routes, Route, Link } from "react-router-dom";
import Aboutpage from "./pages/Aboutpage";
import Blogpage from "./pages/Blogpage";
import Homepage from "./pages/Homepage";
import Notfoundpage from "./pages/Notfoundpage";

function App() {
  return (
    <>
      <div>
        <h1>Get started with React-Router 6</h1>
      </div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/posts" element={<Blogpage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="*" element={<Notfoundpage />} />
      </Routes>
    </>
  );
}

export default App;
