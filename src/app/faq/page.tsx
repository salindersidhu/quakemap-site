import { Metadata } from "next";

import Faq from "@/components/faq";

import { Faqs } from "@/data/faq";

export const metadata: Metadata = {
  title: "FAQ – Quakemap | Realtime Earthquakes",
};

export default function FAQ() {
  return (
    <main>
      <Faq faqs={Faqs} />
    </main>
  );
}
