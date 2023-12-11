import React from "react";
import { NoVideosFound } from "../../components/NoVideosFound/NoVideosFound";
import { useSelector } from "react-redux";
import { VideoCard } from "../../components/VideoCard/VideoCard";
import { MobileSidebar } from "../../components/Sidebar/MobileSidebar/MobileSidebar";
export const WatchLater = () => {
  const { watchLater } = useSelector((store) => store.watchLater);

  return (
    <>
      <div className="homeContainer_1">
        <div className="flex-base flex-column container">
          <div
            style={{ marginBottom: "1em", marginTop: "5em" }}
            className="outer-grid flex-base"
          >
            <div className="page-heading">
              Watch Later
              <span className="page-number">
                ( {(watchLater && watchLater.length) || 0} )
              </span>
            </div>
          </div>
          <div className="outer-grid video-outer-grid">
            {watchLater?.length === 0 ? (
              <NoVideosFound>
                <div class="btn_1">
                  <a class="btn btn-squared no-found-cta " href="/">
                    ADD PLAYLISTS
                  </a>
                </div>
              </NoVideosFound>
            ) : null}
            <div className="video_grid">
              {watchLater &&
                watchLater?.length > 0 &&
                watchLater?.map((watchLaterVideo) => (
                  <VideoCard
                    key={watchLaterVideo._id}
                    video={watchLaterVideo}
                  />
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
