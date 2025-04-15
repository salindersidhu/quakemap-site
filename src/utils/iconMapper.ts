import {
  Cog6ToothIcon,
  FunnelIcon,
  GlobeAltIcon,
  InformationCircleIcon,
  MapIcon,
  NewspaperIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

import GithubIcon from "@/components/githubIcon";

const iconMapper: Record<string, any> = {
  Cog6ToothIcon,
  FunnelIcon,
  GlobeAltIcon,
  InformationCircleIcon,
  MapIcon,
  NewspaperIcon,
  SparklesIcon,
  GitHubIcon: GithubIcon,
};

export function getIconByName(iconName: string) {
  if (!iconMapper[iconName]) {
    return InformationCircleIcon; // Default icon if not found
  }

  return iconMapper[iconName];
}
