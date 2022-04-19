import {
  SparklesIcon,
  MapIcon,
  CogIcon,
  InformationCircleIcon,
} from "@heroicons/react/outline";

const Features = [
  {
    title: "Explore the earthquake map",
    alt: "",
    description:
      "We provide beautiful, subtle, comprehensive maps designed to show geographic context while highlighting earthquakes. Information on earthquakes is presented in a scrollable list of magnitude, region, date and geographic image.",
    image: "/assets/app_map.png",
    icon: MapIcon,
  },
  {
    title: "View earthquake info",
    alt: "",
    description:
      "Accurate earthquake information available at your fingertips. The Earthquake information presented includes earthquake properties such as Magnitude or Depth and event details such as Felt Reports or Alert Level.",
    image: "/assets/app_details.png",
    icon: SparklesIcon,
  },
  {
    title: "Understand earthquake info",
    alt: "",
    description: "Expand your knowledge and understanding of earthquake information and terminology. Our comprehensive tooltips, courtesy of the <strong>USGS</strong>, provide helpful descriptions for all earthquake details.",
    image: "/assets/app_details_help.png",
    icon: InformationCircleIcon,
  },
  {
    title: "Customize the experience",
    alt: "",
    description: "We provide settings to adjust the appearance of the map, toggle specific geographic features and filter earthquake data. What is more, we include the option to choose between light mode or dark mode for the user interface.",
    image: "/assets/app_settings.png",
    icon: CogIcon,
  },
];

export default Features;
