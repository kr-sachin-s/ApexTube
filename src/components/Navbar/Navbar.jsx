import React, { useState } from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { logoutUser } from "../../features/authentication/authenticationSlice";
import { useSelector, useDispatch } from "react-redux";
import { CiLogout } from "react-icons/ci";
import { AiOutlineClose, AiOutlineSearch, AiOutlineUser } from "react-icons/ai";
export const Navbar = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const { authToken } = useSelector((state) => state.authentication);

  const navigate = useNavigate();
  return (
    <>
      <header>
        <div className="headerDiv">
          <div>
            <Link to="/">
              <h2 className="logo">APEX</h2>
            </Link>
          </div>
          <div className="searchContainer">
            <div className="searchBox">
              <input
                type="text"
                placeholder="Search for video here"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              {search !== "" && (
                <span
                  className="material-symbols-rounded"
                  onClick={() => setSearch("")}
                >
                  <AiOutlineClose />
                </span>
              )}
            </div>
            <div className="searchBtn">
              <span className="material-symbols-rounded">
                <AiOutlineSearch />
              </span>
            </div>
          </div>
          <div className="profileContainer">
            {authToken.id ? (
              <button
                type="button"
                onClick={() => {
                  dispatch(logoutUser());
                  navigate("/login");
                }}
                className="flex-al-center border-none logout-btn btn2 "
              >
                LOG OUT
              </button>
            ) : (
              <Link to="/login" className="flex-al-center  ">
                <span className="material-symbols-rounded">
                  <AiOutlineUser />
                </span>
              </Link>
            )}
          </div>
        </div>
      </header>
    </>
  );
};
