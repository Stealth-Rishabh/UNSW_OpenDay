"use client";

import { Calendar, Clock, MapPin } from "lucide-react";
import Image from "../src/assets/unsw-student-banner.png";
import resBanner from "../src/assets/responsive-banner-unsw.avif";
import PlanetLogo from "../src/assets/Planet_logo.png";
import { useState, useEffect } from "react";

export default function UNSWOpenDay() {
  const [showFixedTickets, setShowFixedTickets] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const banner = document.querySelector(".banner-section");
      if (banner) {
        const bannerBottom = banner.getBoundingClientRect().bottom;
        setShowFixedTickets(bannerBottom < 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="mx-auto font-sans overflow-x-hidden w-full">
      {/* Banner with pattern background - full width */}
      <div className="relative w-full mb-6 overflow-hidden banner-section">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-blue-50">
          <div className="absolute -left-20 top-0 h-full w-1/3">
            <svg
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
              className="h-full w-full text-blue-100 opacity-80"
            >
              <path
                fill="currentColor"
                d="M44.9,-76.2C59.7,-69.7,74.4,-60.4,83.3,-46.6C92.2,-32.8,95.3,-14.6,93.2,2.1C91.1,18.8,83.8,34,73.7,47.1C63.6,60.3,50.6,71.3,35.9,76.3C21.1,81.3,4.5,80.2,-10.2,75.9C-24.9,71.6,-37.8,64.1,-48.5,54.3C-59.2,44.5,-67.8,32.4,-73.5,18.3C-79.2,4.2,-82,-11.8,-77.8,-25.9C-73.6,-40,-62.3,-52.1,-49,-61.6C-35.7,-71.1,-20.3,-78,-3.9,-72.1C12.5,-66.2,30.1,-82.7,44.9,-76.2Z"
                transform="translate(100 100)"
              />
            </svg>
          </div>
          <div className="absolute -right-20 top-0 h-full w-1/3">
            <svg
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
              className="h-full w-full text-blue-100 opacity-80"
            >
              <path
                fill="currentColor"
                d="M44.9,-76.2C59.7,-69.7,74.4,-60.4,83.3,-46.6C92.2,-32.8,95.3,-14.6,93.2,2.1C91.1,18.8,83.8,34,73.7,47.1C63.6,60.3,50.6,71.3,35.9,76.3C21.1,81.3,4.5,80.2,-10.2,75.9C-24.9,71.6,-37.8,64.1,-48.5,54.3C-59.2,44.5,-67.8,32.4,-73.5,18.3C-79.2,4.2,-82,-11.8,-77.8,-25.9C-73.6,-40,-62.3,-52.1,-49,-61.6C-35.7,-71.1,-20.3,-78,-3.9,-72.1C12.5,-66.2,30.1,-82.7,44.9,-76.2Z"
                transform="translate(100 100)"
              />
            </svg>
          </div>
        </div>

        {/* Banner image */}
        <div className="relative">
          <img
            src={resBanner}
            alt="UNSW student with yellow bag"
            className="w-full h-auto block md:hidden"
          />
          <img
            src={Image}
            alt="UNSW student with yellow bag"
            className="w-full h-auto hidden md:block"
          />
        </div>
      </div>

      {/* Content container with max-width */}
      <div className="relative flex flex-col md:flex-row gap-8 max-w-5xl mx-auto px-4 pb-24 md:pb-0">
        {/* Main content */}
        <div className="w-full md:max-w-2xl">
          <div className="p-4">
            {/* Header */}
            <div className="mb-4">
              <h1 className="text-4xl font-bold text-purple-900">
                UNSW India Open Day 2025
              </h1>
            </div>

            {/* Description */}
            <p className="text-sm text-gray-700 mb-6">
              UNSW Sydney is coming to India! Meet our academics, get
              application advice and fee waivers, and attend our Employability
              Masterclass.
            </p>

            {/* University Profile */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="bg-yellow-400 rounded-full w-10 h-10 flex items-center justify-center">
                  <span className="text-white font-bold">U</span>
                </div>
                <div>
                  <p className="font-semibold">UNSW Sydney</p>
                  <p className="text-xs text-gray-500">
                    6.2k followers
                    <span className="ml-2 text-xs bg-gray-100 text-gray-600 px-1 py-0.5 rounded">
                      Official account
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* Event Schedule Table */}
            <div className="mb-6">
              <h2 className="text-lg font-bold mb-2">Event Schedule</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr>
                      <th className="border border-yellow-300 bg-white p-2"></th>
                      <th className="border border-yellow-300 bg-white p-2 font-semibold">
                        Bangalore
                      </th>
                      <th className="border border-yellow-300 bg-white p-2 font-semibold">
                        Mumbai
                      </th>
                      <th className="border border-yellow-300 bg-white p-2 font-semibold">
                        Chennai
                      </th>
                      <th className="border border-yellow-300 bg-white p-2 font-semibold">
                        Delhi
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-yellow-300 bg-white p-2 font-semibold">
                        Date
                      </td>
                      <td className="border border-yellow-300 bg-white p-2">
                        Saturday 12 April
                      </td>
                      <td className="border border-yellow-300 bg-white p-2">
                        Sunday 13 April
                      </td>
                      <td className="border border-yellow-300 bg-white p-2">
                        Monday 14 April
                      </td>
                      <td className="border border-yellow-300 bg-white p-2">
                        Tuesday 15 April
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-yellow-300 bg-white p-2 font-semibold">
                        Time
                      </td>
                      <td className="border border-yellow-300 bg-white p-2">
                        11:00 - 15:00
                      </td>
                      <td className="border border-yellow-300 bg-white p-2">
                        12:00 - 16:00
                      </td>
                      <td className="border border-yellow-300 bg-white p-2">
                        11:00 - 15:00
                      </td>
                      <td className="border border-yellow-300 bg-white p-2">
                        16:00 - 20:00
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-yellow-300 bg-white p-2 font-semibold">
                        Venue
                      </td>
                      <td className="border border-yellow-300 bg-white p-2">
                        Shangri-La Bengaluru Hotel, Palace Road
                      </td>
                      <td className="border border-yellow-300 bg-white p-2">
                        The Leela Hotel, Sahar Airport Road
                      </td>
                      <td className="border border-yellow-300 bg-white p-2">
                        Hyatt Regency Hotel, Anna Salai Road
                      </td>
                      <td className="border border-yellow-300 bg-white p-2">
                        Taj Mahal Hotel, Man Singh Road
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Agenda */}
            <div className="mb-6">
              <h2 className="text-lg font-bold mb-2">Agenda</h2>

              <div className="border-l-4 border-orange-200 bg-orange-50 pl-4 py-3 mb-3">
                <p className="text-xs text-gray-500">11:30 AM - 12:00 PM</p>
                <p className="font-medium">
                  Check-in: Employability Masterclass
                </p>
              </div>

              <div className="border-l-4 border-blue-200 bg-blue-50 pl-4 py-3 mb-3">
                <p className="text-xs text-gray-500">12:00 PM - 1:00 PM</p>
                <p className="font-medium">
                  Employability Masterclass
                  <span className="text-sm text-gray-500">
                    (separate registration essential)
                  </span>
                </p>
              </div>

              <div className="border-l-4 border-green-200 bg-green-50 pl-4 py-3 mb-3">
                <p className="text-xs text-gray-500">12:30 PM - 1:00 PM</p>
                <p className="font-medium">
                  Check-in: Open Day India 2025{" "}
                  <span className="text-sm text-gray-500">
                    (General Admission)
                  </span>
                </p>
              </div>

              <div className="border-l-4 border-purple-200 bg-purple-50 pl-4 py-3 mb-3">
                <p className="text-xs text-gray-500">1:00 PM - 4:00 PM</p>
                <p className="font-medium">
                  Open Day event with 1:1 consultations with UNSW staff and
                  academics
                </p>
              </div>

              <div className="border-l-4 border-indigo-200 bg-indigo-50 pl-4 py-3 mb-3">
                <p className="text-xs text-gray-500">1:30 PM - 2:00 PM</p>
                <p className="font-medium">Presentation: Applying to UNSW</p>
              </div>

              <div className="border-l-4 border-indigo-200 bg-indigo-50 pl-4 py-3 mb-3">
                <p className="text-xs text-gray-500">2:30 PM - 3:00 PM</p>
                <p className="font-medium">
                  Presentation: Sydney – Your new home
                </p>
              </div>
            </div>

            {/* About this event */}
            <div className="mb-6">
              <h2 className="text-lg font-bold mb-2">About this event</h2>
              <div className="flex items-center gap-2 mb-3">
                <Clock className="w-4 h-4 text-gray-500" />
                <p className="text-sm text-gray-600">Event lasts 4 hours</p>
              </div>

              <p className="text-sm mb-3">
                Join us at UNSW India Open Day to chat with our world-leading
                academics from Sydney, and learn about our scholarships and
                pathways for students in India.
              </p>

              <p className="text-sm mb-3">
                Get tailored application advice for studying at UNSW as early as
                Term 3, 2025, with application fee waivers and priority
                processing for{" "}
                <span className="text-blue-600">eligible students</span>.
              </p>

              <p className="text-sm mb-3">
                You can also attend an Employability Masterclass to discover why
                UNSW is ranked #1 in Australia for employability. Separate
                registrations are essential. Make sure to select the
                "Masterclass" add-on.
              </p>

              <p className="text-sm text-gray-500 mb-3">
                *T&C's for this live event
              </p>

              <p className="text-sm text-gray-500">
                *QS World University Rankings, 2023
              </p>
            </div>

            {/* Organized by */}
            <div className="mb-6 md:mb-0">
              <h2 className="text-lg font-bold mb-2">Organized by</h2>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="bg-yellow-400 rounded-full w-10 h-10 flex items-center justify-center">
                    <span className="text-white font-bold">U</span>
                  </div>
                  <div>
                    <p className="font-semibold">UNSW Sydney</p>
                    <p className="text-xs text-gray-500">
                      6.2k followers
                      <span className="ml-2 text-xs bg-gray-100 text-gray-600 px-1 py-0.5 rounded">
                        Official account
                      </span>
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <img src={PlanetLogo} alt="Planet Logo" className="w-40" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop sticky ticket section */}
        <div className="w-full md:w-60 h-fit sticky top-6 hidden md:block">
          <div className="bg-gray-100 rounded-lg p-2 shadow-sm text-center">
            <h3 className="text-xl text-slate-600 mb-4">Free</h3>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSehT0OPa_2j9zTCLOxkpjEIu-XadfR1VaLjITl1J0Uz5pm4_g/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-orange-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-orange-700 transition-colors"
            >
              Get Tickets
            </a>
          </div>
        </div>
      </div>

      {/* Mobile fixed ticket section */}
      <div
        className={`fixed bottom-0 left-0 right-0 bg-white p-4 shadow-lg md:hidden transform transition-transform duration-300 ${
          showFixedTickets ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="max-w-5xl mx-auto flex flex-col items-center gap-2">
          <h3 className="text-xl text-slate-600">Free</h3>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSehT0OPa_2j9zTCLOxkpjEIu-XadfR1VaLjITl1J0Uz5pm4_g/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-orange-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-orange-700 transition-colors text-center"
          >
            Get Tickets
          </a>
        </div>
      </div>
    </div>
  );
}
