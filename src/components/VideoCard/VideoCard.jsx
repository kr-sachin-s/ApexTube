import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Modal } from "../Modal/Modal";
import { Link } from "react-router-dom";
import { ActionButtons } from "./sub-components/ActionButtons";
import { PlaylistModal } from "../PlaylistModal/PlaylistModal";

export const VideoCard = ({ video }) => {
  const [playlistModal, setPlaylistModal] = React.useState(false);
  const [videoOverlay, setVideoOverlay] = React.useState(false);
  return (
    <>
      <div className="videoBox">
        <Link to={`/video/${video._id}`}>
          <div className="thumbnailInfo">
            <img src={video.img} alt="Thumbnail" className="videoThumbnail" />
          </div>
        </Link>
        <div className="videoInfo">
          <div>
            <h2>{video.title}</h2>
            <p>{video.creator}</p>
          </div>
          <div className="video-card-dots">
            <button
              style={{ cursor: "pointer" }}
              onClick={(e) => {
                setVideoOverlay((prev) => !prev);
              }}
              className="border_none"
              type="button"
            >
              <BsThreeDotsVertical className="icon-svg" />
            </button>
            {videoOverlay && (
              <ActionButtons
                singleVideo={video}
                setPlaylistModal={setPlaylistModal}
                setVideoOverlay={setVideoOverlay}
              />
            )}
          </div>
        </div>
        {playlistModal && (
          <PlaylistModal
            playlistModal={playlistModal}
            setPlaylistModal={setPlaylistModal}
            video={video}
          />
        )}
      </div>
    </>
  );
};
