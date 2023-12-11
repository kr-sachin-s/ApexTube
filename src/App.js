import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Playlists } from "./pages/Playlists/Playlists";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { LikesPage } from "./pages/LikesPage/LikesPage";
import { HistoryPage } from "./pages/HistoryPage/HistoryPage";
import { WatchLater } from "./pages/WatchLater/WatchLater";
import { Home } from "./pages/Home/Home";
import { SingleVideoPage } from "./pages/SingleVideoPage/SingleVideoPage";
import { SignupPage } from "./pages/SignupPage/SignupPage";
import { PlaylistVideosPage } from "./pages/PlaylistVideosPage/PlaylistVideosPage";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <>
      <ToastContainer autoClose={1500} />

      <Router>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/playlists" element={<Playlists />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/liked" element={<LikesPage />} />
          <Route path="/watchlater" element={<WatchLater />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/video/:videoID" element={<SingleVideoPage />} />
          <Route
            path="/playlists/:playlistID"
            element={<PlaylistVideosPage />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
