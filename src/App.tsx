import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Aboutpage from "./pages/Aboutpage";
import Blogpage from "./pages/Blogpage";
import Createpost from "./pages/Createpost";
import Editpost from "./pages/Editpost";
import Homepage from "./pages/Homepage";
import Notfoundpage from "./pages/Notfoundpage";
import Singlepage from "./pages/Singlepage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="about" element={<Aboutpage />} />
          <Route path="posts" element={<Blogpage />} />
          <Route path="posts/:id" element={<Singlepage />} />
          <Route path="posts/new" element={<Createpost />} />
          {/* new не будет считаться параметром */}
          <Route path="posts/:id/edit" element={<Editpost />} />
          {/* однако есть косяк: можно перейти по пути "/posts/new/edit" */}
          <Route path="*" element={<Notfoundpage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
