import LSE from '../assets/images/LSE.jpg';
import OECD from '../assets/images/OECD.jpg';
import SCPO from '../assets/images/SCPO.jpg';
import SYD1 from '../assets/images/SYD1.jpg';
import SYD2 from '../assets/images/SYD2.jpg';
import COLPOLSOC from '../assets/images/COLPOLSOC.jpg';
import BAIR from '../assets/images/BAIR.jpg';
import UVIC from '../assets/images/UVIC.jpg';
import COP from '../assets/images/COP.jpg';
import UC3M from '../assets/images/UC3M.jpg';

import {
  CA,
  ES,
  AU,
  DK,
  NL,
  FR,
  GB,
  AR,
  FlagComponent,
} from 'country-flag-icons/react/3x2';

interface timelineComponent {
  date: string;
  title: string;
  text: string | Array<string>;
  location: string;
  imageUrl?: string;
  flag: FlagComponent;
}

export const timeline: Array<timelineComponent> = [
  {
    date: 'Sep 2024 - Aug 2025',
    title:
      'LSE, MSc in Development Management (Specialisation in Applied Development Economics)',
    text: 'As part of my masters I am participating in a consultancy project, which  provides me with an opportunity to apply the analytical tools and critical thinking skills that I learn  to a ‘real world’ issue. I am also taking courses on: Applied Policy Analysis for Macroeconomic Development, Applied Econometrics and Development Management.',
    imageUrl: LSE,
    location: 'London, United Kingdom',
    flag: GB,
  },
  {
    date: 'May 2024 - Sep 2024',
    title: 'OECD Watch Intern',
    text: [
      ' Provide information and advice on the application of the OECD Guidelines for Multinational Enterprises on Responsible Business Conduct.',
      ' Development of a database to analyse the performance of the OECD National Contact Points.',
      ' OECD Watch Social Media and Communications',
    ],
    imageUrl: OECD,
    location: 'Amsterdam, Netherlands',
    flag: NL,
  },
  {
    date: 'Sep 2023 - May 2024',
    title:
      'Sciences Po, MA in International Economic Policy (Concentration in Diplomacy)',
    text: 'Courses on Applied Econometrics with STATA, Political Economy of Development and Growth, International Trade, Macroeconomics and Communications.',
    imageUrl: SCPO,
    location: 'Paris, France',
    flag: FR,
  },
  {
    date: 'Sep 2018 - May 2023',
    title:
      'Universidad Carlos III de Madrid, Dual Bachelor in International Studies and Political Sciences',
    text: 'Courses on Statistics, STATA or Macroeconomics, Microeconomics and International Finance.',
    imageUrl: UC3M,
    location: 'Madrid, Spain',
    flag: ES,
  },
  {
    date: 'Jan 2023 - May 2023',
    title: 'Research Assistant, University of New South Wales',
    text: [
      'Led by UNSW scholar Dr Marilu Melo Zurita (PhD in Human Geography, Kings College London).',
      'Study of the possible effectiveness of International Aid around the world, focusing on the Aid received by Mexico after the 2017 earthquakes as a case study.',
      'Literature review.',
      'Data cleaning and statistical analysis with STATA.',
      'Qualitative (interview-based) analysis.',
    ],
    imageUrl: SYD1,
    location: 'Sydney, Australia',
    flag: AU,
  },
  {
    date: 'Dec 2022 - May 2023',
    title: 'University of New South Wales',
    text: 'Undergraduate exchange. I took courses on Sociology and Inclusive Development to amplify my skillset during my degree. I was also able to explore Australia while working as a Research Assistant at the university.',
    imageUrl: SYD2,
    location: 'Sydney, Australia',
    flag: AU,
  },
  {
    date: 'Oct 2022 - Dec 2022',
    title:
      'Environmental and Sustainability Commission Intern, Professional College of Political Science, Sociology, International Relations and Public Administration',
    text: [
      'Monitoring and analysis of International Agreements and Legislation in Public Environmental and Climate Change Policies.',
      'Contributed to the initiation of a Spanish-Portuguese collaboration project aimed at measuring the social impact of common environmental policies.',
      'Organisation of conferences and events (+50 attendees).',
    ],
    imageUrl: COLPOLSOC,
    location: 'Madrid, Spain',
    flag: ES,
  },
  {
    date: 'Sep 2022 - Dec 2022',
    title:
      'International Cooperation Project Intern, Association for the Support of the Syrian People',
    text: 'Collaborated in the design of international development projects, organising fundraising events and running the economic logistics behind the NGO.',
    location: 'Madrid, Spain',
    flag: ES,
  },
  {
    date: 'May 2022 - Jul 2022',
    title: 'Legal Researcher, Simon Wiesenthal Center in Latin America',
    text: 'Worked on a project dedicated to the adoption of the IHRA Working Definition of Anti-Semitism by different public and private organisations in Latin America.',
    imageUrl: BAIR,
    location: 'Buenos Aires, Argentina',
    flag: AR,
  },
  {
    date: 'Jan 2022 - May 2022',
    title: 'University of Victoria',
    text: 'Undergraduate exchange. Took Political Sciences courses focused on Ethics in International Relations, the inner workings of the European Union, Latin American Politics and Society, International Politics of Trade and experimental.',
    imageUrl: UVIC,
    location: 'Vancouver Island, Canada',
    flag: CA,
  },
  {
    date: 'Jan 2021 - Jun 2021',
    title: 'Copenhagen Business School',
    text: 'Undergraduate exchange. Focused on courses aimed at understanding how Society and Technology shape International interactions, the importance of Intercultural Communication and Negotiation, and analysing Leadership and Management techniques.',
    imageUrl: COP,
    location: 'Copenhagen, Denmark',
    flag: DK,
  },
];
