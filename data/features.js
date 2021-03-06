import {
  SparklesIcon,
  MapIcon,
  CogIcon,
  FilterIcon,
  InformationCircleIcon,
} from "@heroicons/react/outline";

const Features = [
  {
    title: "Explore the earthquake map",
    description:
      "We provide beautiful, subtle, comprehensive maps designed to show geographic context while highlighting earthquakes. Information on earthquakes is presented in a scrollable list of magnitude, region, date and geographic image.",
    image: "app_map.png",
    icon: MapIcon,
  },
  {
    title: "Filter earthquake info",
    description: "Filter earthquake information displayed on the map. We include controls to filter earthquakes by type and feed frequency. We also provide controls to sort earthquake info by a category in ascending or descending order.",
    image: "app_filter.png",
    icon: FilterIcon,
  },
  {
    title: "View earthquake info",
    description:
      "Accurate earthquake information available at your fingertips. The Earthquake information presented includes earthquake properties such as Magnitude or Depth and event details such as Felt Reports or Alert Level.",
    image: "app_details.png",
    icon: SparklesIcon,
  },
  {
    title: "Understand earthquake info",
    description:
      "Expand your knowledge and understanding of earthquake information and terminology. Our comprehensive tooltips, courtesy of the <strong>USGS</strong>, provide helpful descriptions for all earthquake details.",
    image: "app_details_help.png",
    icon: InformationCircleIcon,
  },
  {
    title: "Customize the experience",
    description:
      "We provide settings to adjust the appearance of the map and toggle specific geographic features, such as plate boundaries. What is more, we include the option to choose between light mode or dark mode for the user interface.",
    image: "app_settings.png",
    icon: CogIcon,
  },
];

export default Features;
