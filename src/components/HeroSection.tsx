import { SocialIcon } from './SocialIcon';

import { IoLogoInstagram } from 'react-icons/io5';
import { IoLogoLinkedin } from 'react-icons/io5';
import { IoMail } from 'react-icons/io5';

import Profile from '../assets/images/Profile.jpeg';
import { introduction } from '../data/text_eng';

export function HeroSection() {
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
      <div className="Presentation">
        <p>
          <h3>{'Hey there! I’m Serena'}</h3>
          {introduction}
        </p>
        <div className="Image">
          <img src={Profile} alt="Serena Indij da Costa in Paris" />
        </div>
      </div>
      <div className="LastSection">
        <div className="SocialIcons">
          <SocialIcon
            Icon={IoMail}
            redirect="mailto:s.indij-da-costa@lse.ac.uk"
            color="#367da2"
          />
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
      </div>
    </section>
  );
}
