import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import IndexPage from "./pages/IndexPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { UserContextProvider } from "./UserContext";
import CreatePost from "./pages/CreatePost";
import PostPage from "./pages/PostPage";
import EditPost from "./pages/EditPost";

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Route for index  page*/}
          <Route index element={<IndexPage />} />

          {/* Route for login and register page */}
          <Route path={"/login"} element={<LoginPage />} />
          <Route path={"/register"} element={<RegisterPage />} />

          {/* Route for create post page */}
          <Route path={"/create"} element={<CreatePost />}></Route>

          {/* Route for Post page */}
          <Route path={"/post/:id"} element={<PostPage />} />

          {/* Route for Edit Post page */}
          <Route path={"/edit/:id"} element={<EditPost/>} />


        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
