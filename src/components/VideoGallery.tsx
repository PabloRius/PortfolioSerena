import { useEffect, useState } from "react";
import { InstagramEmbed } from "react-social-media-embed";
import { useVideos } from "../hooks/useVideos";

export default function VideoGallery() {
  const { videos } = useVideos();
  const INITIAL_COUNT = 6;
  const LOAD_MORE_COUNT = 6;
  const [loadedVideos, setLoadedVideos] = useState(INITIAL_COUNT);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleLoadMore = () => {
    setLoadedVideos((prev) => Math.min(prev + LOAD_MORE_COUNT, videos.length));
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center my-8 max-w-[90%] mx-auto text-wrap">
        Click on any video to watch it!
      </h2>

      <div className="flex flex-row justify-evenly mt-10 gap-10 flex-wrap">
        {videos.slice(0, loadedVideos).map((video, index) => (
          <div
            key={index}
            className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
          >
            <InstagramEmbed url={video.link} width="326px" />
          </div>
        ))}
      </div>

      {loadedVideos < videos.length && (
        <div className="flex justify-center mt-8">
          <button
            className="block mx-auto my-5 px-5 py-2.5 text-lg bg-main-green text-white border-none rounded-md cursor-pointer transition-colors duration-300 hover:bg-main-green-dark"
            onClick={handleLoadMore}
          >
            Load More Videos
          </button>
        </div>
      )}
    </div>
  );
}
