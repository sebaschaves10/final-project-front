import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import Post from "./pages/Post";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import Profile from "./pages/Profile";
import ChangePassword from "./pages/ChangePassword";
import Presentation from "./pages/Presentation";

import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PostAddIcon from '@mui/icons-material/PostAdd';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';

import { AuthContext } from "./helpers/AuthContext";
import { useState, useEffect } from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';


function App() {
  const [authState, setAuthState] = useState({
    username: "",
    id: 0,
    status: false,
  });

  useEffect(() => {
    axios
      .get("http://localhost:3001/auth/auth", {
        headers: {
          accessToken: localStorage.getItem("accessToken"),
        },
      })
      .then((response) => {
        if (response.data.error) {
          setAuthState({ ...authState, status: false });
        } else {
          setAuthState({
            username: response.data.username,
            id: response.data.id,
            status: true,
          });
        }
      });
  }, []);

  const logout = () => {
    localStorage.removeItem("accessToken");
    setAuthState({ username: "", id: 0, status: false });
  };

  return (
    <div className="App">
      <AuthContext.Provider value={{ authState, setAuthState }}>
        <Router>
          <div className="navbar">
            <div className="links">
              <div className="logo-container">
                <img src="/images/LogoCP.png" alt="Logo" />
                <h2>Crazy Posts</h2>
              </div>
              <Link to="/presentation"><HomeIcon /> Principal</Link>

              {!authState.status ? (
                <>
                  <Link to="/login">
                    <LoginIcon /> Entrar
                  </Link>
                  <Link to="/registration">
                    <PersonAddIcon /> Registrate{" "}
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/">
                    <DynamicFeedIcon /> Posts{" "}
                  </Link>
                  <Link to="/createpost">
                    <PostAddIcon /> Crear Post
                  </Link>
                </>
              )}
            </div>
            <div className="loggedInContainer">
              <h3>{authState.username} </h3>
              {authState.status && (
                <Button variant="outline-danger" onClick={logout}>
                  <LogoutIcon /> Salir{" "}
                </Button>
              )}
            </div>
          </div>
          {/* <Switch> was changed to <Routes> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/presentation" element={<Presentation />} />
            <Route path="/createpost" element={<CreatePost />} />
            <Route path="/post/:id" element={<Post />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile/:id" element={<Profile />} />
            <Route path="/changepassword" element={<ChangePassword />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Router>
      </AuthContext.Provider>
    </div>
  );
}

export default App;