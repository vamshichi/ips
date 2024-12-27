'use client'

import React from "react"
import Countdown from "react-countdown"
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa"
import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import img1 from '@/app/images/upcomming/1x.jpg'
import img2 from '@/app/images/upcomming/usa.jpg'

interface Event {
  id: string
  name: string
  location: string
  date: string
  eventDate: Date
  image: string | StaticImageData
  link: string
  logo: string
  floorPlanUrl?: string
  brochureUrl?: string
}

const events: Event[] = [
  {
    id: "1",
    name: "India Property Show",
    location: "At King Faisal Road - Manama, Bahrain",
    date: "21st - 22nd February 2025",
    eventDate: new Date("2025-02-21T00:00:00"),
    image: img1,
    link: "https://bahrain-maxpo-exhibitions.vercel.app/",
    logo: "/placeholder.svg?height=100&width=200",
    floorPlanUrl: "#floorplan",
    brochureUrl: "#brochure",
  },
  {
    id: "2",
    name: "India Property Show",
    location: "At King Faisal Road - Manama, Bahrain",
    date: "21st - 22nd February 2025",
    eventDate: new Date("2025-02-21T00:00:00"),
    image: img2,
    link: "https://bahrain-maxpo-exhibitions.vercel.app/",
    logo: "/placeholder.svg?height=100&width=200",
    floorPlanUrl: "#floorplan",
    brochureUrl: "#brochure",
  },
]

const EventCard: React.FC<{ event: Event }> = ({ event }) => {
  return (
    <div className="bg-white rounded-lg shadow-xl overflow-hidden">
      <div className="relative h-64 w-full">
        <Link href={event.link}>
          <Image
            src={event.image}
            alt={event.name}
            layout="fill"
            
          />
        </Link>
      </div>
      <div className="p-8">
        <h3 className="text-3xl font-bold text-gray-800 mb-3">{event.name}</h3>
        <p className="text-lg text-gray-600 mb-4 flex items-center">
          <FaMapMarkerAlt className="mr-2" />
          {event.location}
        </p>
        <p className="text-lg text-gray-600 mb-4 flex items-center">
          <FaCalendarAlt className="mr-2" />
          {event.date}
        </p>
        <Countdown
          date={event.eventDate}
          renderer={({ days, hours, minutes, seconds }) => (
            <div className="flex justify-between text-center mb-8">
              <div className="bg-blue-100 rounded p-3">
                <div className="text-3xl font-bold text-blue-600">{days}</div>
                <div className="text-base text-blue-600">Days</div>
              </div>
              <div className="bg-blue-100 rounded p-3">
                <div className="text-3xl font-bold text-blue-600">{hours}</div>
                <div className="text-base text-blue-600">Hours</div>
              </div>
              <div className="bg-blue-100 rounded p-3">
                <div className="text-3xl font-bold text-blue-600">{minutes}</div>
                <div className="text-base text-blue-600">Minutes</div>
              </div>
              <div className="bg-blue-100 rounded p-3">
                <div className="text-3xl font-bold text-blue-600">{seconds}</div>
                <div className="text-base text-blue-600">Seconds</div>
              </div>
            </div>
          )}
        />
        <div className="flex justify-between items-center">
          <a
            href="#register"
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition duration-300"
          >
            Register Now
          </a>
          <div className="space-x-4 text-lg">
            {event.floorPlanUrl && (
              <a
                href={event.floorPlanUrl}
                className="text-blue-600 hover:underline"
              >
                Floor Plan
              </a>
            )}
            {event.floorPlanUrl && event.brochureUrl && (
              <span className="text-gray-400">||</span>
            )}
            {event.brochureUrl && (
              <a
                href={event.brochureUrl}
                className="text-blue-600 hover:underline"
              >
                Brochure
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

const MultipleEventCountdown: React.FC = () => {
  return (
    <section className="py-16 bg-blue-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Upcoming Events
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default MultipleEventCountdown