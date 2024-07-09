import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Quakemap",
    short_name: "Quakemap",
    description:
      "Track earthquakes around the world in realtime from the comfort of your smartphone.",
    start_url: "/",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
    theme_color: "#fff",
    background_color: "#fff",
    display: "standalone",
  };
}
