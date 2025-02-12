import { InstagramEmbed } from 'react-social-media-embed';
import { DefaultLayout } from '../layouts/DefaultLayout';

import { videos } from '../data/videos';

import '../styles/CCPage.css';

export const CC = () => {
  return (
    <DefaultLayout>
      <div className="CCPage">
        <h2
          style={{
            margin: '30px auto',
            width: 'max-content',
            fontSize: '32px',
          }}
        >
          Click on any video to watch it!
        </h2>
        <ul className="Videos">
          {Object.values(videos).map(({ url }, index) => {
            return (
              <li className="Video" key={index}>
                <InstagramEmbed url={url} width={'328px'} />
              </li>
            );
          })}
        </ul>
      </div>
    </DefaultLayout>
  );
};
