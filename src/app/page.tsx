import Hero from "@/components/hero";

import Feature from "@/components/feature";

import { Features } from "@/data/features";
import { GeneralLinks } from "@/data/generalLinks";

export default function Home() {
  return (
    <main>
      <Hero downloadLink={GeneralLinks.download} />
      <Feature features={Features} />
    </main>
  );
}
