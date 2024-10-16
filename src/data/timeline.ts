import {
  AAPS,
  BAIR,
  COLPOLSOC,
  COP,
  LSE,
  OECD,
  SCPO,
  SYD1,
  SYD2,
  UC3M,
  UVIC,
} from '../assets/images/images';

import {
  BAIRLogo,
  COLPOLSOCLogo,
  COPLogo,
  LSELogo,
  OECDLogo,
  SCPOLogo,
  UC3MLogo,
  UNSWLogo,
  UVICLogo,
} from '../assets/icons/icons';

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
  subtitle: string;
  text: string | Array<string>;
  location: string;
  imageUrl?: string;
  flag: FlagComponent;
  icon?: string;
}

export const timeline: Array<timelineComponent> = [
  {
    date: 'Sep 2024 - Aug 2025',
    title: 'LSE',
    subtitle:
      'MSc in Development Management (Specialisation in Applied Development Economics).',
    text: 'As part of my masters I am participating in a consultancy project, which  provides me with an opportunity to apply the analytical tools and critical thinking skills that I learn  to a ‘real world’ issue. I am also taking courses on: Applied Policy Analysis for Macroeconomic Development, Applied Econometrics and Development Management.',
    imageUrl: LSE,
    location: 'London, United Kingdom',
    flag: GB,
    icon: LSELogo,
  },
  {
    date: 'May 2024 - Sep 2024',
    title: 'OECD Watch',
    subtitle: 'Intern.',
    text: [
      ' Provide information and advice on the application of the OECD Guidelines for Multinational Enterprises on Responsible Business Conduct.',
      ' Development of a database to analyse the performance of the OECD National Contact Points.',
      ' OECD Watch Social Media and Communications',
    ],
    imageUrl: OECD,
    location: 'Amsterdam, Netherlands',
    flag: NL,
    icon: OECDLogo,
  },
  {
    date: 'Sep 2023 - May 2024',
    title: 'Sciences Po',
    subtitle:
      'MA in International Economic Policy (Concentration in Diplomacy).',
    text: 'Courses on Applied Econometrics with STATA, Political Economy of Development and Growth, International Trade, Macroeconomics and Communications.',
    imageUrl: SCPO,
    location: 'Paris, France',
    flag: FR,
    icon: SCPOLogo,
  },
  {
    date: 'Sep 2018 - May 2023',
    title: 'Universidad Carlos III de Madrid',
    subtitle: 'Dual Bachelor in International Studies and Political Sciences.',
    text: 'Courses on Statistics, STATA or Macroeconomics, Microeconomics and International Finance.',
    imageUrl: UC3M,
    location: 'Madrid, Spain',
    flag: ES,
    icon: UC3MLogo,
  },
  {
    date: 'Jan 2023 - May 2023',
    title: 'University of New South Wales',
    subtitle: 'Research Assistant.',
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
    icon: UNSWLogo,
  },
  {
    date: 'Dec 2022 - May 2023',
    title: 'University of New South Wales',
    subtitle: 'Undergraduate exchange.',
    text: 'I took courses on Sociology and Inclusive Development to amplify my skillset during my degree. I was also able to explore Australia while working as a Research Assistant at the university.',
    imageUrl: SYD2,
    location: 'Sydney, Australia',
    flag: AU,
    icon: UNSWLogo,
  },
  {
    date: 'Oct 2022 - Dec 2022',
    title:
      'Professional College of Political Science, Sociology, International Relations and Public Administration',
    subtitle: 'Environmental and Sustainability Commission Intern.',
    text: [
      'Monitoring and analysis of International Agreements and Legislation in Public Environmental and Climate Change Policies.',
      'Contributed to the initiation of a Spanish-Portuguese collaboration project aimed at measuring the social impact of common environmental policies.',
      'Organisation of conferences and events (+50 attendees).',
    ],
    imageUrl: COLPOLSOC,
    location: 'Madrid, Spain',
    flag: ES,
    icon: COLPOLSOCLogo,
  },
  {
    date: 'Sep 2022 - Dec 2022',
    title: 'Association for the Support of the Syrian People',
    subtitle: 'International Cooperation Project Intern.',
    text: 'Collaborated in the design of international development projects, organising fundraising events and running the economic logistics behind the NGO.',
    location: 'Madrid, Spain',
    flag: ES,
    imageUrl: AAPS,
  },
  {
    date: 'May 2022 - Jul 2022',
    title: 'Simon Wiesenthal Center in Latin America',
    subtitle: 'Legal Researcher.',
    text: 'Worked on a project dedicated to the adoption of the IHRA Working Definition of Anti-Semitism by different public and private organisations in Latin America.',
    imageUrl: BAIR,
    location: 'Buenos Aires, Argentina',
    flag: AR,
    icon: BAIRLogo,
  },
  {
    date: 'Jan 2022 - May 2022',
    title: 'University of Victoria',
    subtitle: 'Undergraduate exchange.',
    text: 'Took Political Sciences courses focused on Ethics in International Relations, the inner workings of the European Union, Latin American Politics and Society, International Politics of Trade and experimental.',
    imageUrl: UVIC,
    location: 'Vancouver Island, Canada',
    flag: CA,
    icon: UVICLogo,
  },
  {
    date: 'Jan 2021 - Jun 2021',
    title: 'Copenhagen Business School',
    subtitle: 'Undergraduate exchange.',
    text: 'Focused on courses aimed at understanding how Society and Technology shape International interactions, the importance of Intercultural Communication and Negotiation, and analysing Leadership and Management techniques.',
    imageUrl: COP,
    location: 'Copenhagen, Denmark',
    flag: DK,
    icon: COPLogo,
  },
];
