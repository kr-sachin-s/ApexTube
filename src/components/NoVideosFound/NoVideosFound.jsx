import React from "react";
import { Link } from "react-router-dom";
import "./NoVideosFound.css";
export const NoVideosFound = ({ children }) => {
    
  return (
    <>
      <div className="grid-center">
        <div className="no-found-img">
          <img
            src="https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png"
            alt="no videos found"
            className="responsive"
          />
        </div>
        <div className="no-found-heading">
          <h2>No Videos Yet </h2>
        </div>
        <div style={{ marginTop: "2em" }} className="">
          <Link to="/" className="btn btn-squared no-found-cta">
            {children}
          </Link>
        </div>
      </div>
    </>
  );
};
