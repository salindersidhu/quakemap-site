import Hero from "@/components/hero";

import { GeneralLinks } from "@/data/generalLinks";

export default function Home() {
  return (
    <main>
      <Hero downloadLink={GeneralLinks.download} />
    </main>
  );
}
