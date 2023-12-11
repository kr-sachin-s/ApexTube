import React, { useState } from "react";
import { AiOutlineHome, AiFillHeart, AiOutlineHistory } from "react-icons/ai";
import { BsFillCollectionPlayFill, BsFillStopwatchFill } from "react-icons/bs";
import { Link } from "react-router-dom";
export const Sidebar = () => {
  return (
    <>
      <div className="main_container">
        <div className="sidebarSection close">
          <div className="miniSidebar ">
            <Link to="/" className="tab">
              <div className="miniSidebarTab ">
                <AiOutlineHome />
                <p>Home</p>
              </div>
            </Link>
            <Link to="/playlists" className="tab">
              <div className="miniSidebarTab">
                <BsFillCollectionPlayFill />
                <p>Playlists</p>
              </div>
            </Link>
            <Link to="/liked">
              <div className="miniSidebarTab">
                <AiFillHeart />
                <p>Liked</p>
              </div>
            </Link>
            <Link to="/history" className="tab">
              <div className="miniSidebarTab">
                <AiOutlineHistory />
                <p>History</p>
              </div>
            </Link>
            <Link to="/watchlater" className="tab">
              <div className="miniSidebarTab">
                <BsFillStopwatchFill />
                <p>Watch Later</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
