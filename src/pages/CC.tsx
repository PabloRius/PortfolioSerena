import { useEffect, useState } from 'react';
import { InstagramEmbed } from 'react-social-media-embed';
import { DefaultLayout } from '../layouts/DefaultLayout';
import { videos } from '../data/videos';
import '../styles/CCPage.css';

export const CC = () => {
  const INITIAL_COUNT = 6; // Número de videos a mostrar inicialmente
  const LOAD_MORE_COUNT = 6; // Cuántos videos cargar con cada clic

  const [loadedVideos, setLoadedVideos] = useState(INITIAL_COUNT);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Función para cargar más videos
  const handleLoadMore = () => {
    setLoadedVideos((prev) => Math.min(prev + LOAD_MORE_COUNT, videos.length));
  };

  return (
    <DefaultLayout>
      <div className="CCPage">
        <h2
          style={{
            margin: '30px auto',
            maxWidth: '90%',
            textAlign: 'center',
            fontSize: '32px',
          }}
        >
          Click on any video to watch it!
        </h2>
        <ul className="Videos">
          {Object.values(videos)
            .slice(0, loadedVideos)
            .map(({ url }, index) => (
              <li className="Video" key={index}>
                <InstagramEmbed url={url} width={'328px'} />
              </li>
            ))}
        </ul>
        {loadedVideos < videos.length && (
          <button className="LoadMoreButton" onClick={handleLoadMore}>
            Load More Videos
          </button>
        )}
      </div>
    </DefaultLayout>
  );
};
