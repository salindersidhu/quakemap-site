import Faq from "@/components/faq";

import { Faqs } from "@/data/faq";

export default function Home() {
  return (
    <main>
      <Faq faqs={Faqs} />
    </main>
  );
}
