"use client";

import {
  Smartphone,
  Code,
  Book,
  Utensils,
  Headphones,
  Brain,
  Award,
  MapPin,
  Printer,
} from "lucide-react";
import React from "react";
import Image from "next/image";
import popup from "../assets/image 15.png";
import ios from "../assets/ios.png";
import frame from "../assets/Frame 10782.png";
import MediaComponent from "./MediaComponent";

const sections = [
  [
    { label: "Social Media", icon: Smartphone },
    { label: "E-commerce", icon: Code },
    { label: "Healthcare", icon: Book },
    { label: "Education", icon: Utensils },
    { label: "Entertainment", icon: Headphones },
  ],
  [
    { label: "Finance", icon: Brain },
    { label: "Travel", icon: Award },
    { label: "Real Estate", icon: Smartphone },
    { label: "Retail", icon: Code },
    { label: "Logistics", icon: Book },
  ],
  [
    { label: "AR Technologies", icon: Utensils },
    { label: "AI Solutions", icon: Headphones },
    { label: "Blockchain", icon: Brain },
    { label: "Cloud Computing", icon: Award },
    { label: "Cybersecurity", icon: Smartphone },
  ],
];

const projects = [
  {
    name: "Project 1",
    description:
      "Crafted an innovative rental property management app, seamlessly integrating secure login, absence registration, and a tenant notice board. Elevating the resident experience with user-friendly design and efficient communication channels",
    technologies: ["Business analysis", "iOS", "Android", "QA", "UI/UX Design"],
    location: "India",
    industry: "Real Estate",
    metrics: [
      { value: "400%", label: "User Growth" },
      { value: "+200 000", label: "Active Users" },
    ],
    link: "http://link-to-project-1.com",
    image: popup,
  },
  {
    name: "Project 2",
    description: "Description of project 2",
    technologies: ["JavaScript", "React Native", "Firebase"],
    location: "USA",
    industry: "E-commerce",
    metrics: [
      { value: "300%", label: "User Growth" },
      { value: "+150 000", label: "Active Users" },
    ],
    link: "http://link-to-project-2.com",
    image: ios,
  },
  {
    name: "Project 3",
    description: "Description of project 3",
    technologies: ["JavaScript", "Express", "MongoDB"],
    location: "UK",
    industry: "Finance",
    metrics: [
      { value: "250%", label: "User Growth" },
      { value: "+100 000", label: "Active Users" },
    ],
    link: "http://link-to-project-3.com",
    image: frame,
  },
];

function Media() {
  return (
    <>
      <div className="mx-6 md:mx-28">
        <div className="md:w-3/5 xl:w-1/3">
          <h1 className="text-2xl md:text-3xl font-bold">
            Developed more than <span className="text-green-500">100</span>{" "}
            projects in <span className="text-green-500">15</span> industries
          </h1>
        </div>
        <div className="flex flex-col md:flex-row md:space-x-6 lg:space-x-32 mt-12">
          {sections.map((section, sectionIndex) => (
            <div
              key={sectionIndex}
              className={`flex flex-col ${sectionIndex === 2 ? "md:flex" : ""}`}
            >
              {section.map((item, index) => (
                <div key={index} className="flex flex-col xl:w-72 my-2">
                  <div className="flex items-center space-x-4">
                    <div className="rounded-3xl bg-white h-12 w-12 shadow flex items-center justify-center">
                      <item.icon color="#f56224" />
                    </div>
                    <p className="text-lg font-semibold">{item.label}</p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="mt-16 mb-0">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">
              Projects we are proud of
            </h1>
            <p className="text-lg font-semibold my-8 lg:w-3/5">
              Our software development company is truly proud of the wonderful
              clients we have worked with. We enjoy a long-term partnership
            </p>
          </div>
          <div className="flex space-x-4 md:space-x-12">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`font-semibold ${
                  project.name === "Project 1" ? "underline" : ""
                } underline-offset-2 decoration-yellow-500`}
              >
                {project.name}
              </div>
            ))}
          </div>
          {projects.map((project, index) => (
            <div
              key={index}
              className={`flex flex-col xl:flex-row mb-10 ${
                project.name === "Project 1" ? "block" : "hidden"
              }`}
            >
              <div className="my-10">
                <h1 className="text-2xl md:text-3xl font-bold">
                  {project.name}
                </h1>
                <p className="text-lg my-8 lg:w-3/5">{project.description}</p>
                <div>
                  <p>{project.technologies.join(" / ")}</p>
                </div>
                <div className="flex space-x-6 my-6">
                  <div className="flex items-center space-x-2">
                    <MapPin color="#f56224" />
                    <p className="text-medium">{project.location}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Printer color="#f56224" />
                    <p className="text-medium">{project.industry}</p>
                  </div>
                </div>
                <div className="flex space-x-10">
                  {project.metrics.map((metric, index) => (
                    <div key={index} className="flex flex-col space-y-2">
                      <h1 className="text-2xl md:text-3xl font-bold">
                        {metric.value}
                      </h1>
                      <p className="text-gray-500">{metric.label}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <Image src={project.image} alt={project.name} height={1000} />
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center space-x-4 mb-10 xl:-mt-10 xl:space-x-6 xl:justify-start">
          <Image src={frame} alt="img" />
          <Image src={ios} alt="img" />
        </div>
      </div>
      <MediaComponent />
    </>
  );
}

export default Media;
