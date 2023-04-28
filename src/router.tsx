import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
} from "react-router-dom";
import Layout from "./components/Layout";
import RequireAuth from "./hoc/RequireAuth";
import Aboutpage from "./pages/Aboutpage";
import Blogpage, { blogLoader } from "./pages/Blogpage";
import Createpost, { createPostAction } from "./pages/Createpost";
import Editpost from "./pages/Editpost";
import Errorpage from "./pages/Errorpage";
import Homepage from "./pages/Homepage";
import Loginpage from "./pages/Loginpage";
import Notfoundpage from "./pages/Notfoundpage";
import Singlepage, { postLoader } from "./pages/Singlepage";

// errorElement можно вешать на родителя(у вложенных роутов)
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Homepage />} />
      <Route path="about" element={<Aboutpage />}>
        <Route path="contacts" element={<p>Our contacts</p>} />
        <Route path="team" element={<p>Our team</p>} />
      </Route>
      {/* переадресация */}
      <Route path="about-us" element={<Navigate to="about" replace />} />
      <Route
        path="posts"
        element={<Blogpage />}
        loader={blogLoader}
        errorElement={<Errorpage />}
      />
      <Route path="posts/:id" element={<Singlepage />} loader={postLoader} />
      <Route
        path="posts/new"
        element={
          <RequireAuth>
            <Createpost />
          </RequireAuth>
        }
        action={createPostAction}
      />
      <Route path="posts/:id/edit" element={<Editpost />} />
      <Route path="login" element={<Loginpage />} />

      <Route path="*" element={<Notfoundpage />} />
    </Route>
  )
);

export default router;
