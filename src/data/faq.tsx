export type Faq = {
  question: string;
  answer: string;
};

export const Faqs: Faq[] = [
  {
    question: "Is Quakemap free?",
    answer:
      "Quakemap is free to use and does not require registration or a subscription. In order to keep the app free, we display Google Ads in the form of a banner.",
  },
  {
    question: "What sources are used for earthquake data?",
    answer:
      "We use the Earthquake Hazards feed provided by The U.S. Geological Survey. This data feed is updated every minute.",
  },
  {
    question: "What sources are used for earthquake news?",
    answer:
      "We use Google's News service for news about earthquakes. News is limited up to one hundred articles.",
  },
  {
    question: "I have a problem, how do I contact support?",
    answer:
      "Please get in touch with us at <strong>quakemap.app@gmail.com.</strong> We will respond to your inquiry within a few business days.",
  },
  {
    question: "How often is the earthquake data updated?",
    answer:
      "The earthquake data on Quakemap is updated every minute to ensure you have the most current information available.",
  },
  {
    question: "Can I customize the map appearance?",
    answer:
      "Yes, Quakemap allows you to customize the appearance of the map, including toggling specific geographic features such as plate boundaries and choosing between light and dark themes.",
  },
  {
    question: "How accurate is the earthquake information?",
    answer:
      "Quakemap uses data from the U.S. Geological Survey, which is a reliable and authoritative source for earthquake information.",
  },
];
