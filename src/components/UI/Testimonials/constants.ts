import { StaticImageData } from 'next/image';
import robert_fox from '../../../../public/images/robert_fox.png';
import cameron_williamson from '../../../../public/images/cameron_williamson.png';
import esther_howard from '../../../../public/images/esther_howard.png';

export type Props = {
  testimony: string;
  person: string;
  avatar: StaticImageData;
};

export const testimonials = [
  {
    testimony:
      "IEEE has been instrumental in my career, providing a platform to collaborate with peers and stay updated on analog electronics. Being recognized as an IEEE Fellow is an honor, and I’m grateful for the chance to contribute to the IEEE CAS Society. IEEE continues to inspire innovation and excellence in engineering.",
    person: 'Prof. Raj Senani',
    avatar: robert_fox,
  },
  {
    testimony:
      "My association with IEEE has been key to my growth as a computer engineer. The conferences and workshops expanded my knowledge and connected me with industry leaders. Publishing in IEEE journals gave my research global visibility, and I’m proud to be part of this prestigious organization.",
    person: 'Dr. Rakesh Kumar',
    avatar: cameron_williamson,
  },
  {
    testimony:
      "IEEE has been a fantastic platform for advancing my career and contributing to engineering. The Women in Engineering (WIE) initiatives have been especially inspiring, encouraging more women to pursue STEM careers. The wealth of resources and vibrant community make IEEE an invaluable part of my professional life.",
    person: 'Dr. Neeta Pandey',
    avatar: esther_howard,
  },
  {
    testimony:
      "IEEE has been crucial to my growth in power electronics and renewable energy. Through its committees and conferences, I’ve collaborated with global experts and stayed at the forefront of technology. IEEE’s commitment to innovation is commendable.",
    person: 'Dr. Sanjeev Jain',
    avatar: cameron_williamson,
  },
  {
    testimony:
      "IEEE has been essential to my growth in computer science and engineering. Its support through conferences, publications, and resources is unmatched, offering countless opportunities to grow, collaborate, and contribute to the field.",
    person: 'Prof. Yogesh Singh',
    avatar: robert_fox,
  },
];

export const desktopHeaderPhrase = ['Alumni', 'Reflections'];
