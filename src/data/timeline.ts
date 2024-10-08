import LSE from '../assets/images/LSE.jpg';
import OECD from '../assets/images/OECD.jpg';

interface timelineComponent {
  date: string;
  title: string;
  text: string | Array<string>;
  location?: string;
  imageUrl: string;
}

export const timeline: Array<timelineComponent> = [
  {
    date: 'Sep 2024 - Aug 2025',
    title: 'LSE',
    text: 'MSc in Development Management (Specialisation in Applied Development Economics)',
    imageUrl: LSE,
    location: 'London',
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
    location: 'Ámsterdam',
  },
  {
    date: 'may 2024',
    title: 'Internship at OECD',
    text: 'asdasdasdasda as da sd asd a sd asd a sd asd a sd a',
    imageUrl: 'dasdasdasd',
  },
  {
    date: 'may 2024',
    title: 'Internship at OECD',
    text: 'asdasdasdasda as da sd asd a sd asd a sd asd a sd a',
    imageUrl: 'dasdasdasd',
  },
];
