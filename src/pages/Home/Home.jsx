import React from "react";
import { VideoCard } from "../../components/VideoCard/VideoCard";
import { useDispatch, useSelector } from "react-redux";
import { setCategories, setVideos } from "../../features/videos/videosSlice";
import { Filter } from "../../components/Filter/Filter";
import {
  useGetCategoriesQuery,
  useGetVideosQuery,
} from "../../features/api/fetchVideos/fetchVideosSlice";
import { getCategorizedData } from "../../utils/utils";
import { MobileSidebar } from "../../components/Sidebar/MobileSidebar/MobileSidebar";

export const Home = () => {
  const { videos, categories, category } = useSelector((store) => store.videos);
  const dispatch = useDispatch();

  const { isLoading, data } = useGetVideosQuery();
  const { data: categoryData } = useGetCategoriesQuery();
  React.useEffect(() => {
    if (data) {
      dispatch(setVideos(data));
    }
    if (categoryData) {
      dispatch(setCategories(categoryData));
    }
  }, [categoryData, data, dispatch, videos]);
  const categorizedArray = getCategorizedData(videos, category);

  return (
    <>
      <div className="homeContainer">
        <div className="categoryContainer">
          <Filter categories={categories} />
        </div>
        <div className="videoContainer">
          {categorizedArray.map((video) => {
            return <VideoCard video={video} key={video.image} />;
          })}
        </div>
        <div className="mobile">
          <MobileSidebar />
        </div>
      </div>
    </>
  );
};
