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
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    theme_color: "#fff",
    background_color: "#fff",
    display: "standalone",
  };
}
