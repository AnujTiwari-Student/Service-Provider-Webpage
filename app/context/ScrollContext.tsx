"use client";

import React, { createContext, useContext, useRef } from 'react';

const ScrollContext = createContext<any>(null);

export const useScroll = () => useContext(ScrollContext);

export const ScrollProvider = ({ children }: { children: React.ReactNode }) => {

    const casesRef = useRef<HTMLDivElement>(null);
    const contactRef = useRef<HTMLDivElement>(null);
    const faqRef = useRef<HTMLDivElement>(null);
    const serviceRef = useRef<HTMLDivElement>(null);
    const mediaRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (section: string) => {
    if (section === 'service' && serviceRef.current) {
      serviceRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'media' && mediaRef.current) {
      mediaRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'cases' && casesRef.current) {
      casesRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'faq' && faqRef.current) {
      faqRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'contact' && contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    } 
  };

  return (
    <ScrollContext.Provider value={{ scrollToSection, serviceRef , mediaRef , casesRef , faqRef , contactRef}}>
      {children}
    </ScrollContext.Provider>
  );
};
