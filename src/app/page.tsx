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

const cardsContent = {
  spotifyPlaylistGenerator: {
    title: "Curait: a Spotify Playlist Generator",
    description:
      "As a frontend engineer, I built the Curait Spotify Playlist Generator: " +
      "a sleek web app that crafts embedded Spotify playlists in seconds. " +
      "Users simply pick a mood (Sleep, Chill, Energetic, Hardstyle), " +
      "a genre (Afrobeat, Jazz, Rock, Hip-Hop, etc.), " +
      "and a country (Brazil, UK, India, etc.). " +
      "This project showcases the delivery of intuitive, " +
      "API-driven experiences with a focus on simplicity and user delight. ",
  },

  aioomMarketing: {
    title: "AIOOM: an All-In-One Online Marketing Solution",
    description: `
      <div class="space-y-6">
        <p class="mb-4">
          I have conceptualized <strong>AIOOM</strong>, a multi-platform social media digital marketing SaaS designed to revolutionize how businesses manage their online presence. This idea is currently in its early design phase with a <strong>Figma prototype</strong> covering the home, posts, and metrics pages. The product aims to address core challenges in modern digital marketing.
        </p>

        <div class="space-y-4">
          <h3 class="text-xl font-semibold mb-2">Key Features:</h3>
          
          <div class="space-y-3">
            <div class="flex items-start">
              <span class="text-purple-400 mr-2">•</span>
              <div>
                <strong>Seamless Content Creation & Editing</strong>
                <p class="mt-1">
                  Craft and refine engaging content across <strong>YouTube, Facebook, Instagram, TikTok, LinkedIn, Twitter, and Pinterest</strong> from one intuitive interface.
                </p>
              </div>
            </div>

            <div class="flex items-start">
              <span class="text-purple-400 mr-2">•</span>
              <div>
                <strong>Integrated Communication</strong>
                <p class="mt-1">
                  Centralize your social conversations, fostering real-time engagement and community building.
                </p>
              </div>
            </div>

            <div class="flex items-start">
              <span class="text-purple-400 mr-2">•</span>
              <div>
                <strong>Actionable Metrics</strong>
                <p class="mt-1">
                  Gain comprehensive insights into your performance with unified analytics across all supported platforms.
                </p>
              </div>
            </div>
          </div>
        </div>

        <p class="mt-6">
          AIOOM represents my vision for a streamlined, powerful solution which translates complex market needs into a user-centric product concept and foundational design. The product's <a href="https://example.com/landing" target="_blank" rel="noopener noreferrer" class="text-purple-400 hover:text-purple-300 transition-colors">landing page</a> built with Next.js and the <a href="https://figma.com/example3" target="_blank" rel="noopener noreferrer" class="text-purple-400 hover:text-purple-300 transition-colors">Figma design</a> are available.
        </p>
      </div>
    `,
  },

  agencyManagementMVP: {
    title: "Cegex Management Software: Real Estate Management MVP",
    description: `
      <div class="space-y-6">
        <p class="mb-4">
          As a full-stack engineer, I built the <strong>Cegex Management Software</strong>, a robust MVP real estate agency management platform. Built with <strong>Next.js</strong>, <strong>NestJS</strong>, Zenstack and <strong>PostgreSQL</strong>, this software product streamlines core operations for real estate professionals.
        </p>

        <div class="space-y-4">
          <h3 class="text-xl font-semibold mb-2">Key Features:</h3>
          
          <div class="space-y-3">
            <div class="flex items-start">
              <span class="text-purple-400 mr-2">•</span>
              <div>
                <strong>Intuitive Menu</strong>
                <p class="mt-1">
                  Securely log in to access a clear menu with dedicated sections for Landlords, Tenants, Properties, and Leases (leases section is in construction).
                </p>
              </div>
            </div>

            <div class="flex items-start">
              <span class="text-purple-400 mr-2">•</span>
              <div>
                <strong>Comprehensive Contact Management</strong>
                <p class="mt-1">
                  Efficiently manage Landlords and Tenants with paginated lists, searchable by ID, name, type, and phone. Easily create new entries or edit existing profiles, including detailed personal/company information, addresses, banking details, and document uploads. For landlords, seamlessly add multiple members.
                </p>
              </div>
            </div>

            <div class="flex items-start">
              <span class="text-purple-400 mr-2">•</span>
              <div>
                <strong>Property Portfolio Management</strong>
                <p class="mt-1">
                  Track properties with similar detail and editing capabilities. For vacant properties, assign tenants directly from the property profile.
                </p>
              </div>
            </div>

            <div class="flex items-start">
              <span class="text-purple-400 mr-2">•</span>
              <div>
                <strong>Streamlined Data Control</strong>
                <p class="mt-1">
                  Enjoy bulk deletion functionality across all lists (Landlords, Tenants, Properties) for efficient data management.
                </p>
              </div>
            </div>
          </div>
        </div>

        <p class="mt-6">
          The Cegex Management Software illustrates my experience building full-stack, scalable SaaS applications with a focus on user experience, data integrity, and modular architecture. The software is private although the <a href="https://www.figma.com/proto/Rdlvu85G8zRFAews57aDNd/CEGEX_DESIGN?node-id=1-2&starting-point-node-id=1%3A2" target="_blank" rel="noopener noreferrer" class="text-purple-400 hover:text-purple-300 transition-colors">Figma design</a> is available.
        </p>
      </div>
    `,
  },

  geographSaaS: {
    title: "Geograph: a Real Estate Listings Analytics SaaS Experiment",
    description: `
      <div class="space-y-6">
        <p class="mb-4">
          As a full-stack engineer, I built <strong>Geograph</strong>, a multi-tenant SaaS platform empowering organizations to transform raw property data into actionable intelligence. This experiment allows teams to securely log in, document crucial notes from multiple sources, and visualize their portfolio like never before.
        </p>

        <div class="space-y-4">
          <h3 class="text-xl font-semibold mb-2">Key Features:</h3>
          
          <div class="space-y-3">
            <div class="flex items-start">
              <span class="text-purple-400 mr-2">•</span>
              <div>
                <strong>Dynamic Map Visualization</strong>
                <p class="mt-1">
                  Explore properties on an interactive map with two intuitive sliders for adjusting cluster similarity and max cluster radius in real-time. The "Compute Property Clusters" feature instantly groups properties, displayed as circles, alongside key metrics: total clusters, total properties, and average property price.
                </p>
              </div>
            </div>

            <div class="flex items-start">
              <span class="text-purple-400 mr-2">•</span>
              <div>
                <strong>Advanced Property Analytics</strong>
                <p class="mt-1">
                  Dive deeper into your data with the "Property Analytics" tab. View a detailed list of clusters and their contained properties. Each cluster features a comprehensive similarity analysis curve, breaking down price, size, location, and proximity-to-amenities similarity scores.
                </p>
              </div>
            </div>

            <div class="flex items-start">
              <span class="text-purple-400 mr-2">•</span>
              <div>
                <strong>Seamless Navigation</strong>
                <p class="mt-1">
                  Click any property within the analytics view to instantly center it on the map, displaying its price, size, and bedroom/bathroom count.
                </p>
              </div>
            </div>
          </div>
        </div>

        <p class="mt-6">
          Geograph shows my experience in developing complex, data-driven frontends, real-time map integrations, and user-centric data visualization for a robust SaaS environment.
        </p>
      </div>
    `,
  },
};

const projects = [
  {
    id: 1,
    title: cardsContent.spotifyPlaylistGenerator.title,
    videoUrl: spotifyDemo,
    description: cardsContent.spotifyPlaylistGenerator.description,
  },
  {
    id: 2,
    title: cardsContent.agencyManagementMVP.title,
    videoUrl: fullStackRealEstateURL,
    description: cardsContent.agencyManagementMVP.description,
    figmaLink: "https://figma.com/example2",
  },
  {
    id: 3,
    title: cardsContent.aioomMarketing.title,
    description: cardsContent.aioomMarketing.description,
    figmaLink: "https://figma.com/example3",
    projectLink: "https://example.com/landing",
  },
  {
    id: 4,
    title: cardsContent.geographSaaS.title,
    videoUrl: postgisSaasDemoURL,
    description: cardsContent.geographSaaS.description,
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Banner Section */}
      <div className="relative h-[60vh] min-h-[500px] w-full overflow-hidden">
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
          <div className="flex items-center justify-between">
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
              className="hidden md:flex md:flex-col md:items-center relative z-10"
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
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-2xl text-center font-outfit font-semibold text-white mt-4 relative z-10"
              >
                Jean-François
                <br />
                Léon
              </motion.h3>
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
          <h2 className="section-title text-center mb-16">Featured Projects</h2>

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
                      <div
                        className="video-text prose prose-invert max-w-none"
                        dangerouslySetInnerHTML={{
                          __html: project.description,
                        }}
                      />
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
                      <div
                        className="video-text prose prose-invert max-w-none"
                        dangerouslySetInnerHTML={{
                          __html: project.description,
                        }}
                      />
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
}
