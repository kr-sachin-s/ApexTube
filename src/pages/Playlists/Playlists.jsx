import React from "react";
import "./Playlists.css";
import { NoVideosFound } from "../../components/NoVideosFound/NoVideosFound";
import { useSelector } from "react-redux";
import { PlaylistCard } from "../../components/PlaylistCard/PlaylistCard";
import { MobileSidebar } from "../../components/Sidebar/MobileSidebar/MobileSidebar";
export const Playlists = () => {
  const { playlists } = useSelector((store) => store.playlists);

  return (
    <>
      <div className="homeContainer_1">
        <div className="flex-base flex-column container">
          <div
            style={{ marginBottom: "1em", marginTop: "5em" }}
            className="outer-grid flex-base"
          >
            <div className="page-heading">
              Playlists{" "}
              <span className="page-number">( {playlists?.length || 0} )</span>
            </div>
          </div>
          <div className="outer-grid video-outer-grid">
            {playlists?.length === 0 ? (
              <NoVideosFound>
                <div class="btn_1">
                  <a class="btn btn-squared no-found-cta " href="/">
                    ADD PLAYLISTS
                  </a>
                </div>
              </NoVideosFound>
            ) : null}
            <div className="video_grid">
              {playlists.map((playlist) => (
                <PlaylistCard key={playlist._id} playlist={playlist} />
              ))}
            </div>
          </div>
        </div>
        <div className="mobile">
          <MobileSidebar />
        </div>
      </div>
    </>
  );
};
