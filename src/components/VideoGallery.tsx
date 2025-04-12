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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
      <h2 className="text-4xl font-bold text-center mb-12 text-main-green-dark">
        Click on any video to watch it!
        <span className="block mt-4 text-2xl font-normal text-gray-600">
          My content creation work at LSE
        </span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {videos.slice(0, loadedVideos).map((video, index) => (
          <div
            key={index}
            className="relative group rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <InstagramEmbed url={video.link} width="100%" />
          </div>
        ))}
      </div>

      {loadedVideos < videos.length && (
        <div className="flex justify-center mt-12">
          <button
            className="flex cursor-pointer items-center gap-3 px-8 py-4 text-lg font-semibold bg-main-green text-white hover:bg-main-green-dark border-2 border-main-green-dark rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            onClick={handleLoadMore}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="animate-bounce"
            >
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
            Load More Videos
          </button>
        </div>
      )}
    </div>
  );
}
