import { useCallback, useEffect, useState } from "react";
import videosData from "../data/videos.json";
import { type Video as VideoType } from "../models/Video";

export function useVideos() {
  const [videos, setVideos] = useState<VideoType[]>([]);

  const fetchVideos = useCallback(() => {
    try {
      setVideos(sortVideos(videosData));
    } catch (err) {
      console.error("Error loading videos data:", err);
    }
  }, []);

  const sortVideos = (videosToSort: VideoType[]) => {
    return [...videosToSort].sort((a, b) => {
      const aIsPriority = a.priority === 1;
      const bIsPriority = b.priority === 1;

      if (aIsPriority && !bIsPriority) return -1;
      if (!aIsPriority && bIsPriority) return 1;

      const aLikes = a.likes || 0;
      const bLikes = b.likes || 0;

      return bLikes - aLikes;
    });
  };

  useEffect(() => {
    fetchVideos();
  }, [fetchVideos]);

  return { videos };
}
