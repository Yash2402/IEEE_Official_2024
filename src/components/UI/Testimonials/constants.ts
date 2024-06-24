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
      "IEEE has played a pivotal role in my career, offering a platform to collaborate with like-minded professionals and stay updated with the latest advancements in analog electronics. The recognition as an IEEE Fellow has been an honor, and I am grateful for the opportunities to contribute to the IEEE CAS Society. IEEE continues to inspire innovation and excellence in engineering.",
    person: 'Prof. Raj Senani',
    avatar: robert_fox,
  },
  {
    testimony:
      "My association with IEEE has been instrumental in my growth as a computer engineer. The conferences and workshops have not only broadened my knowledge but also helped me connect with industry leaders and academicians. Publishing in IEEE journals has given my research global visibility, and I am proud to be a part of such a prestigious organization.",
    person: 'Dr. Rakesh Kumar',
    avatar: cameron_williamson,
  },
  {
    testimony:
      "IEEE has provided a fantastic platform for me to advance my career and contribute to the field of engineering. The Women in Engineering (WIE) initiatives have been particularly inspiring, encouraging more women to pursue careers in STEM. The wealth of resources and the vibrant community have made IEEE an invaluable part of my professional life.",
    person: 'Dr. Neeta Pandey',
    avatar: esther_howard,
  },
  {
    testimony:
      "IEEE has been a cornerstone in my professional development, particularly in the fields of power electronics and renewable energy. The technical committees and conferences have allowed me to collaborate with experts from around the world and stay at the forefront of technological advancements. IEEE's commitment to innovation and excellence is truly commendable.",
    person: 'Dr. Sanjeev Jain',
    avatar: cameron_williamson,
  },
  {
    testimony:
      "IEEE has been a vital part of my journey in computer science and engineering. The organization's commitment to advancing technology and supporting professionals through conferences, publications, and educational resources is unparalleled. IEEE has provided me with numerous opportunities to grow, collaborate, and contribute to the engineering community.",
    person: 'Prof. Yogesh Singh',
    avatar: robert_fox,
  },
];

export const desktopHeaderPhrase = ['Alumni', 'Reflections'];
