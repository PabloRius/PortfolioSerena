import { useState } from 'react';
import { InstagramEmbed } from 'react-social-media-embed';
import { DefaultLayout } from '../layouts/DefaultLayout';
import { videos } from '../data/videos';
import { useInView } from 'react-intersection-observer';
import '../styles/CCPage.css';

export const CC = () => {
  // Número de videos iniciales a mostrar
  const INITIAL_COUNT = 6;
  const LOAD_MORE_COUNT = 6; // Cuántos videos cargar en cada paso

  const [loadedVideos, setLoadedVideos] = useState(INITIAL_COUNT);
  const { ref, inView } = useInView({
    threshold: 0.5, // Dispara cuando el 50% del elemento es visible
  });

  // Cuando el usuario hace scroll y el último video visible entra en pantalla, cargamos más
  if (inView && loadedVideos < videos.length) {
    setLoadedVideos((prev) => Math.min(prev + LOAD_MORE_COUNT, videos.length));
  }

  return (
    <DefaultLayout>
      <div className="CCPage">
        <h2
          style={{
            margin: '30px auto',
            maxWidth: '90%',
            fontSize: '32px',
            textAlign: 'center',
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
          <div
            ref={ref}
            style={{ height: '10px', margin: '20px auto', textAlign: 'center' }}
          >
            Loading more...
          </div>
        )}
      </div>
    </DefaultLayout>
  );
};
