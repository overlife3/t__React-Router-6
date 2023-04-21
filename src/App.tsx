import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import AuthProvider from "./hoc/AuthProvider";
import RequireAuth from "./hoc/RequireAuth";
import Aboutpage from "./pages/Aboutpage";
import Blogpage from "./pages/Blogpage";
import Createpost from "./pages/Createpost";
import Editpost from "./pages/Editpost";
import Homepage from "./pages/Homepage";
import Loginpage from "./pages/Loginpage";
import Notfoundpage from "./pages/Notfoundpage";
import Singlepage from "./pages/Singlepage";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="about" element={<Aboutpage />} />
          {/* переадресация */}
          <Route path="about-us" element={<Navigate to="about" replace />} />
          <Route path="posts" element={<Blogpage />} />
          <Route path="posts/:id" element={<Singlepage />} />
          <Route
            path="posts/new"
            element={
              <RequireAuth>
                <Createpost />
              </RequireAuth>
            }
          />
          <Route path="posts/:id/edit" element={<Editpost />} />
          <Route path="login" element={<Loginpage />} />

          <Route path="*" element={<Notfoundpage />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
