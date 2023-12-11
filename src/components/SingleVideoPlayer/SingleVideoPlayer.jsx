import React from "react";
import ReactPlayer from "react-player/youtube";
import { useSelector } from "react-redux";
import { usePostHistoryMutation } from "../../features/api/historyApi/historySlliceApi";
import { isPresentInState } from "../../utils/utils";

export const SingleVideoPlayer = ({ video, videoID }) => {
  const { authToken } = useSelector((store) => store.authentication);
  const [addToHistory] = usePostHistoryMutation();
  const { history } = useSelector((state) => state.history);

  const addToHistoryHandler = () => {
    if (authToken.id && !isPresentInState(video, history)) {
      addToHistory({ authToken, video });
    }
  };
  return (
    <ReactPlayer
      className="react-player"
      width="100%"
      height="100%"
      playing
      light={video?.img}
      onStart={addToHistoryHandler}
      url={`https://www.youtube.com/embed/${videoID}`}
      controls
    />
  );
};
