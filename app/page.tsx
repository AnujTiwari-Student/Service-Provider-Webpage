"use client";

import Consultant from "@/components/Consultant";
import HeroSectionText from "@/components/HeroSectionText";
import PhoneImage from "@/components/PhoneImage";
import Service from "@/components/Service";
import React, { useRef } from 'react';
import { useScroll } from "./context/ScrollContext";
import Cases from "@/components/Cases";
import Media from "@/components/Media";
import FAQPage from "@/components/FAQSection";
import Contact from "@/components/Contact";
import OurTeam from "@/components/OurTeam";

export default function Home() {

  const { casesRef, serviceRef , faqRef , contactRef , mediaRef } = useScroll();

  return (
    <>
      <main className="w-screen xl:mb-44 mb-10">
        <PhoneImage />
        <HeroSectionText />
        <Consultant />
      </main>
        <div className="bg-white" ref={serviceRef}>
          <Service />
        </div>
        <div ref={mediaRef}>
          <Media />
        </div>
        <div className="bg-white" ref={casesRef}>
          <Cases />
        </div>
        <OurTeam />
        <div className="bg-white" ref={faqRef}>
          <FAQPage />
        </div>
        <div ref={contactRef}>
          <Contact />
        </div>
    </>
  );
}
