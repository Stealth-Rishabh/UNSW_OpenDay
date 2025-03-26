"use client";

import { Calendar, Clock, MapPin } from "lucide-react";
import Image from "../src/assets/unsw-student-banner.png";
import PlanetLogo from "../src/assets/Planet_logo.png";

export default function UNSWOpenDay() {
  return (
    <div className="mx-auto font-sans">
      {/* Banner with pattern background - full width */}
      <div className="relative w-full mb-6 overflow-hidden rounded-lg">
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
            src={Image}
            alt="UNSW student with yellow bag"
            className="w-[200%] h-auto"
          />
        </div>
      </div>

      {/* Content container with max-width */}
      <div className="relative flex gap-8 max-w-5xl mx-auto">
        {/* Main content */}
        <div className="max-w-2xl">
          <div className="p-4">
            {/* Header */}
            <div className="mb-4">
              <p className="text-sm text-gray-600">Saturday, April 12</p>
              <h1 className="text-4xl font-bold text-purple-900">
                UNSW India Open Day 2025 - Bangalore
              </h1>
            </div>

            {/* Description */}
            <p className="text-sm text-gray-700 mb-6">
              UNSW Sydney is coming to Bangalore! Meet our academics, get
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

            {/* Location */}
            <div className="mb-6">
              <h2 className="text-lg font-bold mb-2">Location</h2>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gray-500 mt-0.5" />
                <div>
                  <p className="text-sm font-medium">
                    Shangri-La Bengaluru Hotel, Palace Road
                  </p>
                </div>
              </div>
            </div>

            {/* Date and Time */}
            <div className="mb-6">
              <h2 className="text-lg font-bold mb-2">Date and time</h2>
              <div className="flex items-start gap-3">
                <Calendar className="w-5 h-5 text-gray-500 mt-0.5" />
                <p className="text-sm">Saturday, April 12 · 11 - 3pm IST</p>
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
                  Employability Masterclass{" "}
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
                Join us at UNSW India Open Day in Bangalore to chat with our
                world-leading academics from Sydney, and learn about our
                scholarships and pathways for students in India.
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
            <div className="mb-6">
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

        {/* Sticky ticket section */}
        <div className="w-60 h-fit sticky top-6">
          <div className=" bg-gray-100 rounded-lg p-2 shadow-sm text-center">
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
    </div>
  );
}
