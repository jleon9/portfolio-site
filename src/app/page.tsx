"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import NextVideo from "next-video";
// @ts-expect-error: Mux embedded video imports
import spotifyDemo from "../../videos/spotify-generator-demo.mov?thumbnailTime=24";
// @ts-expect-error: Mux embedded video imports
import fullStackRealEstateURL from "../../videos/cegex-full-stack.mov?thumbnailTime=0";
// @ts-expect-error: Mux embedded video imports
import postgisSaasDemoURL from "../../videos/postgis-saas.mp4?thumbnailTime=74";

interface Feature {
  title: string;
  description: string;
}

interface ProjectDescription {
  title: string;
  intro: string;
  features: Feature[];
  conclusion: string;
  links?: {
    text: string;
    url: string;
  }[];
}

const cardsContent: Record<string, ProjectDescription> = {
  spotifyPlaylistGenerator: {
    title: "Curait: a Spotify Playlist Generator",
    intro:
      "As a frontend engineer, I built the Curait Spotify Playlist Generator: a sleek web app that crafts embedded Spotify playlists in seconds.",
    features: [
      {
        title: "User-Friendly Interface",
        description:
          "Users simply pick a mood (Sleep, Chill, Energetic, Hardstyle), a genre (Afrobeat, Jazz, Rock, Hip-Hop, etc.), and a country (Brazil, UK, India, etc.).",
      },
    ],
    conclusion:
      "This project showcases the delivery of intuitive, API-driven experiences with a focus on simplicity and user delight.",
  },

  agencyManagementMVP: {
    title: "Cegex Management Software: Real Estate Management MVP",
    intro:
      "As a full-stack engineer, I built the Cegex Management Software, a robust MVP real estate agency management platform. Built with Next.js, NestJS, Zenstack and PostgreSQL, this software product streamlines core operations for real estate professionals.",
    features: [
      {
        title: "Intuitive Menu",
        description:
          "Securely log in to access a clear menu with dedicated sections for Landlords, Tenants, Properties, and Leases (leases section is in construction).",
      },
      {
        title: "Comprehensive Contact Management",
        description:
          "Efficiently manage Landlords and Tenants with paginated lists, searchable by ID, name, type, and phone. Easily create new entries or edit existing profiles, including detailed personal/company information, addresses, banking details, and document uploads. For landlords and tenants, seamlessly add multiple members.",
      },
      {
        title: "Property Portfolio Management",
        description:
          "Track properties with similar detail and editing capabilities. For vacant properties, assign tenants directly from the property profile.",
      },
      {
        title: "Streamlined Data Control",
        description:
          "Enjoy bulk deletion functionality across all lists (Landlords, Tenants, Properties) for efficient data management.",
      },
    ],
    conclusion:
      "The Cegex Management Software illustrates my experience building full-stack, scalable SaaS applications with a focus on user experience, data integrity, and modular architecture. While the software is private, the Figma design is available.",
    links: [
      {
        text: "Figma design",
        url: "https://www.figma.com/proto/Rdlvu85G8zRFAews57aDNd/CEGEX_DESIGN?node-id=1-2&starting-point-node-id=1%3A2",
      },
    ],
  },

  aioomMarketing: {
    title: "AIOOM: an All-In-One Online Marketing Solution",
    intro:
      "I have conceptualized AIOOM, a multi-platform social media digital marketing SaaS designed to revolutionize how businesses manage their online presence. This idea is currently in its early design phase with a Figma prototype covering the home, posts, and metrics pages. The product aims to address core challenges in modern digital marketing.",
    features: [
      {
        title: "Seamless Content Creation & Editing",
        description:
          "Craft and refine engaging content across YouTube, Facebook, Instagram, TikTok, LinkedIn, Twitter, and Pinterest from one intuitive interface.",
      },
      {
        title: "Integrated Communication",
        description:
          "Centralize your social conversations, fostering real-time engagement and community building.",
      },
      {
        title: "Actionable Metrics",
        description:
          "Gain comprehensive insights into your performance with unified analytics across all supported platforms.",
      },
    ],
    conclusion:
      "AIOOM represents my vision for a streamlined, powerful solution which translates complex market needs into a user-centric product concept and foundational design. The landing page built with Next.js and the Figma design are available.",
    links: [
      {
        text: "landing page",
        url: "https://www.aioom.tech/",
      },
      {
        text: "Figma design",
        url: "https://www.figma.com/proto/jhM6mCABFD21yYWAZAvdKi/Builder.io---Figma-to-HTML--React--and-more--Community-?node-id=892-4587&t=nca9JPnkI8IX2426-0&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=115%3A196",
      },
    ],
  },

  geographSaaS: {
    title: "Geograph: a Real Estate Listings Analytics SaaS Experiment",
    intro:
      "As a full-stack engineer, I built Geograph, a multi-tenant SaaS platform empowering organizations to transform raw property data into actionable intelligence. This experiment allows teams to securely log in, document crucial notes from multiple sources, and visualize their portfolio like never before.",
    features: [
      {
        title: "Dynamic Map Visualization",
        description:
          'Explore properties on an interactive map with two intuitive sliders for adjusting cluster similarity and max cluster radius in real-time. The "Compute Property Clusters" feature instantly groups properties, displayed as circles, alongside key metrics: total clusters, total properties, and average property price.',
      },
      {
        title: "Advanced Property Analytics",
        description:
          'Dive deeper into your data with the "Property Analytics" tab. View a detailed list of clusters and their contained properties. Each cluster features a comprehensive similarity analysis curve, breaking down price, size, location, and proximity-to-amenities similarity scores.',
      },
      {
        title: "Seamless Navigation",
        description:
          "Click any property within the analytics view to instantly center it on the map, displaying its price, size, and bedroom/bathroom count.",
      },
    ],
    conclusion:
      "Geograph shows my experience in developing complex, data-driven frontends, real-time map integrations, and user-centric data visualization for a robust SaaS environment.",
  },
};

const projects = [
  {
    id: 1,
    title: cardsContent.spotifyPlaylistGenerator.title,
    videoUrl: spotifyDemo,
    description: cardsContent.spotifyPlaylistGenerator,
  },
  {
    id: 2,
    title: cardsContent.agencyManagementMVP.title,
    videoUrl: fullStackRealEstateURL,
    description: cardsContent.agencyManagementMVP,
  },
  {
    id: 3,
    title: cardsContent.aioomMarketing.title,
    description: cardsContent.aioomMarketing,
  },
  {
    id: 4,
    title: cardsContent.geographSaaS.title,
    videoUrl: postgisSaasDemoURL,
    description: cardsContent.geographSaaS,
  },
];

const ProjectDescription = ({
  description,
}: {
  description: ProjectDescription;
}) => {
  return (
    <div className="space-y-6">
      <p className="mb-4">{description.intro}</p>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold mb-2">Key Features:</h3>

        <div className="space-y-3">
          {description.features.map((feature, index) => (
            <div key={index} className="flex items-start">
              <span className="text-purple-400 mr-2">•</span>
              <div>
                <strong>{feature.title}</strong>
                <p className="mt-1">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <p className="mt-6">
        {description.conclusion
          .split(/(?=While the software|design. The)/)
          .map((part, index) => {
            if (index === 0) return part;

            if (description.links?.length === 2) {
              const [firstLink, secondLink] = description.links;
              return (
                <span key={index}>
                  The{" "}
                  <a
                    href={firstLink.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    {firstLink.text}
                  </a>{" "}
                  built with Next.js and the{" "}
                  <a
                    href={secondLink.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    {secondLink.text}
                  </a>{" "}
                  are available.
                </span>
              );
            }

            const link = description.links?.[0];
            if (!link) return part;

            return (
              <span key={index}>
                {part.split(link.text).map((textPart, textIndex) => {
                  if (textIndex === 0) return textPart;
                  return (
                    <span key={textIndex}>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-400 hover:text-purple-300 transition-colors"
                      >
                        {link.text}
                      </a>
                      {textPart}
                    </span>
                  );
                })}
              </span>
            );
          })}
      </p>
    </div>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <main className="min-h-screen">
        {/* Banner Section */}
        <div className="relative h-[70vh] min-h-[600px] w-full overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/tech-banner3.png"
              alt="Code background"
              fill
              className="object-cover blur-[4px]"
              priority
            />
            <div className="absolute inset-0 bg-black/55" />
          </div>

          {/* Content */}
          <div className="relative h-full max-w-7xl mx-auto px-8 flex flex-col justify-start pt-16 md:pt-24">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-outfit font-bold text-white mb-16 text-center"
            >
              Creative Portfolio
            </motion.h1>
            <div className="flex items-start justify-between relative">
              <div className="flex-1">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-2xl md:text-3xl font-outfit font-bold text-white mb-4"
                >
                  Software Developer
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="text-lg md:text-xl text-gray-200 max-w-2xl"
                >
                  Crafting elegant solutions through clean code and innovative
                  design. This page and the projects presented were built with
                  Next.js
                </motion.p>
              </div>

              {/* Profile Picture */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="hidden md:flex md:flex-col md:items-center"
              >
                <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-purple-400/30">
                  <Image
                    src="/portfolio-profile-pic.png"
                    alt="Profile picture"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="mt-4 px-6 py-2 rounded-lg bg-black/40 backdrop-blur-sm"
                >
                  <h3 className="text-2xl text-center font-outfit font-semibold text-white">
                    Jean-François
                    <br />
                    Léon
                  </h3>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div className="p-8 md:p-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-7xl mx-auto"
          >
            <h2 className="section-title text-center mb-16">
              Featured Projects
            </h2>

            <div className="space-y-16 md:space-y-32">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className={`video-card ${
                    index === 3
                      ? "md:flex md:flex-col md:items-center md:gap-8"
                      : "md:flex md:items-center md:gap-8"
                  }`}
                >
                  {index === 3 ? (
                    <>
                      <div className="video-description md:w-full md:p-8">
                        <h2 className="video-title">{project.title}</h2>
                        <ProjectDescription description={project.description} />
                      </div>
                      {project.videoUrl && (
                        <div className="md:w-full h-[400px] md:h-[600px] md:mb-24">
                          <NextVideo
                            className="w-full h-full object-cover"
                            src={project.videoUrl}
                          ></NextVideo>
                        </div>
                      )}
                    </>
                  ) : (
                    <>
                      {project.videoUrl && (
                        <div
                          className={`md:w-1/2 h-[300px] md:h-[500px] ${
                            index === 1
                              ? "md:order-2 md:self-start"
                              : index === 0
                              ? "md:self-start"
                              : ""
                          }`}
                        >
                          <NextVideo
                            className="w-full h-full object-cover"
                            src={project.videoUrl}
                          ></NextVideo>
                        </div>
                      )}
                      <div
                        className={`video-description ${
                          index === 2 ? "md:w-full" : "md:w-1/2"
                        } ${index === 1 ? "md:order-1" : ""} ${
                          index === 0 ? "md:self-start" : ""
                        } md:p-8`}
                      >
                        <h2 className="video-title">{project.title}</h2>
                        <ProjectDescription description={project.description} />
                      </div>
                    </>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>
      <footer className="py-12 bg-black/40 backdrop-blur-sm border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-lg font-semibold text-purple-400 mb-4">
                Contact
              </h3>
              <a
                href="tel:+18884712415"
                className="text-white/80 hover:text-purple-400 transition-colors mb-2 flex items-center gap-2"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                +1 (888) 471-2415
              </a>
              <a
                href="mailto:jean-francois.l@outlook.com"
                className="text-white/80 hover:text-purple-400 transition-colors flex items-center gap-2"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                jean-francois.l@outlook.com
              </a>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-lg font-semibold text-purple-400 mb-4">
                GitHub
              </h3>
              <a
                href="https://github.com/jleon9"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-purple-400 transition-colors flex items-center gap-2"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                github.com/jleon9
              </a>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-lg font-semibold text-purple-400 mb-4">
                Countries
              </h3>
              <div className="grid grid-cols-2 gap-x-8 gap-y-2">
                <p className="text-white/80 flex items-center gap-2" key="canada">
                  <span role="img" aria-label="Canada">
                    🇨🇦
                  </span>
                  Canada
                </p>
                <p className="text-white/80 flex items-center gap-2" key="united-states">
                  <span role="img" aria-label="United States">
                    🇺🇸
                  </span>
                  United States
                </p>
                <p className="text-white/80 flex items-center gap-2" key="france">
                  <span role="img" aria-label="France">
                    🇫🇷
                  </span>
                  France
                </p>
                <p className="text-white/80 flex items-center gap-2" key="ivory-coast">
                  <span role="img" aria-label="Ivory Coast">
                    🇨🇮
                  </span>
                  Ivory Coast
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
