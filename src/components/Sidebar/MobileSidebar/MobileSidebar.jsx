import React from "react";
import { AiOutlineHome, AiFillHeart, AiOutlineHistory } from "react-icons/ai";
import { BsFillCollectionPlayFill, BsFillStopwatchFill } from "react-icons/bs";
import { Link } from "react-router-dom";
export const MobileSidebar = () => {
  return (
    <>
      <div className="mobile">
        <div className="moboSidebar ">
          <Link to="/" className="mob">
            <div className="moboSidebarTab ">
              <AiOutlineHome />
              <p>Home</p>
            </div>
          </Link>
        </div>
        <div className="moboSidebar ">
          <Link to="/playlists" className="mob">
            <div className="moboSidebarTab ">
              <BsFillCollectionPlayFill />
              <p>Playlists</p>
            </div>
          </Link>
        </div>
        <div className="moboSidebar ">
          <Link to="/liked" className="mob">
            <div className="moboSidebarTab ">
              <AiFillHeart />
              <p>Liked</p>
            </div>
          </Link>
        </div>
        <div className="moboSidebar ">
          <Link to="/history" className="mob">
            <div className="moboSidebarTab ">
              <AiOutlineHistory />
              <p>History</p>
            </div>
          </Link>
        </div>
        <div className="moboSidebar ">
          <Link to="/watchlater" className="mob">
            <div className="moboSidebarTab ">
              <BsFillStopwatchFill />
              <p>Watch Later</p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};
