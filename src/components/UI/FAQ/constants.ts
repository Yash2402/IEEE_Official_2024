type FAQItem = {
  question: string;
  answer: string;
};

export const desktopHeaderPhrase = ['Frequently asked', 'questions'];
export const mobileHeaderPhrase = ['Frequently', 'asked', 'questions'];
export const animate = {
  initial: {
    y: '100%',
    opacity: 0,
  },
  open: (i: number) => ({
    y: '0%',
    opacity: 1,
    transition: { duration: 1, delay: 0.1 * i, ease: [0.33, 1, 0.68, 1] },
  }),
};

export const faqData: FAQItem[] = [
  {
    question: 'What are the benefits of joining IEEE?',
    answer:
      'Benefits include access to IEEE publications, conferences, networking opportunities, professional development resources, and discounts on IEEE products and services.',
  },
  {
    question: 'How can I access IEEE research papers and publications?',
    answer:
      'IEEE members can access research papers and publications through the IEEE Xplore digital library. Non-members can purchase individual papers or subscribe to the library.',
  },
  {
    question: 'What conferences and events does IEEE organize?',
    answer:
      'IEEE organizes a variety of conferences and events worldwide, covering various technology fields. You can find upcoming events on the IEEE events calendar',
  },
  {
    question: 'What professional development resources does IEEE offer?',
    answer:
      'IEEE offers webinars, online courses, certification programs, and other resources to help members enhance their skills and advance their careers.',
  },
];
