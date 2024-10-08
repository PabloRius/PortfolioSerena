import { useRef, useState } from 'react';
import { SocialIcon } from './SocialIcon';

import { IoCopy } from 'react-icons/io5';

import { IoLogoInstagram } from 'react-icons/io5';
import { IoLogoLinkedin } from 'react-icons/io5';
import { Tooltip } from 'react-tooltip';

import Profile from '../assets/images/Profile.png';

export function HeroSection() {
  const [copyTooltip, setCopyTooltip] = useState('Copy to Clipboard');
  const nextSectionRef = useRef<HTMLDivElement | null>(null);

  const handleCopy = () => {
    navigator.clipboard
      .writeText('serena.indij.da.costa@gmail.com')
      .then(() => {
        setCopyTooltip('Copied to Clipboard!');
      })
      .catch((err) => {
        console.error(err);
        setCopyTooltip("Couldn't copy to clipboard!");
      });
  };
  const handleResetCopyTooltip = async () => {
    setTimeout(() => {
      setCopyTooltip('Copy to Clipboard');
    }, 250);
  };

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/Serena_Indij_da_Costa_resume.pdf';
    link.download = 'Serena_Indij_da_Costa_resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="HeroSection">
      <div className="MailLink">
        <a href="mailto:serena.indij.da.costa@gmail.com">
          Serena.indij.da.costa@gmail.com
        </a>
        <IoCopy
          size={20}
          color="black"
          cursor="pointer"
          data-tooltip-id="copy-tooltip"
          data-tooltip-content={copyTooltip}
          data-tooltip-place="top"
          data-tooltip-variant="light"
          onClick={handleCopy}
          onMouseLeave={handleResetCopyTooltip}
        />
      </div>
      <div className="Presentation">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur
        </p>
        <div className="Image">
          <img src={Profile} alt="Serena Indij da Costa in Paris" />
        </div>
      </div>
      <div className="SocialIcons">
        <SocialIcon
          Icon={IoLogoInstagram}
          redirect="https://www.instagram.com/sere_viaja/?hl=en"
          color="#dd2985"
        />
        <SocialIcon
          Icon={IoLogoLinkedin}
          redirect="https://www.linkedin.com/in/serena-indij-da-costa/"
          color="#0c65c3"
        />
      </div>

      <button type="button" className="CV" onClick={downloadCV}>
        Download my CV
      </button>

      <Tooltip id="copy-tooltip" border={'solid 1px grey'} />
      <div className="ref" ref={nextSectionRef} />
    </section>
  );
}
