import Layout from "@/components/Layout";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, Users, Star, X } from "lucide-react";

export default function Events() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const upcomingEvents = [
    {
      title: "Annual Hackathon 2024",
      description:
        "24-hour coding marathon with exciting challenges, industry mentors, and amazing prizes. Build innovative solutions to real-world problems.",
      date: "March 15-16, 2024",
      time: "6:00 PM - 6:00 PM",
      location: "RVU Tech Center",
      participants: "200+",
      type: "Competition",
      image: "/images/events/hackathon.jpg",
      featured: true,
    },
    {
      title: "AI & Machine Learning Workshop",
      description:
        "Hands-on workshop covering fundamentals of AI, machine learning algorithms, and practical implementations using Python and TensorFlow.",
      date: "February 28, 2024",
      time: "2:00 PM - 6:00 PM",
      location: "Computer Lab A",
      participants: "50",
      type: "Workshop",
      image: "/images/events/ai-workshop.jpg",
      featured: false,
    },
    {
      title: "Industry Tech Talk Series",
      description:
        "Senior engineers from top tech companies share insights on industry trends, career guidance, and emerging technologies.",
      date: "March 5, 2024",
      time: "4:00 PM - 5:30 PM",
      location: "Auditorium Hall",
      participants: "300+",
      type: "Talk",
      image: "/images/events/tech-talk.jpg",
      featured: false,
    },
  ];

  const pastEvents = [
    {
      title: "RVU Santhe",
      description:
        "Viksha Coding Club set up an interactive stall at Santhe’25, RV University’s annual fest, to showcase the fun and creativity behind coding. The goal was to spark curiosity among students, introduce them to the world of tech, and show how coding can be both useful and exciting.",
      date: "29th and 30th july 2025",
      participants: "200+",
      image: "/assets/p1.png",
    },
    {
      title: "Python Workshop",
      description:
        "Viksha Coding Club organized a hands-on Python workshop aimed at helping students dive into the basics of programming. The session was designed for beginners, but also included practical exercises to keep intermediate learners engaged.",
      date: "December 2023",
      participants: "120",
      image: "/assets/p2.png",
    },
    {
      title: "Annual Hackathon 2024",
      description:
        "Argonyx’25 Hackathon is the flagship 24-hour coding challenge by IEEE RVU Viksha and Neural Nexus (SoCSE, RV University). Building on the massive success of Argonyx’24 — with 244 teams from 69 institutions — this year promises even greater innovation, collaboration, and enthusiasm as students tackle real-world problems with technology.",
      date: "November 18, 2024",
      participants: "244 teams",
      image: "/assets/p3.png",
    },
  ];

  return (
    <Layout>
      <div className="animate-in fade-in duration-1000">
        {/* Banner */}
        <section className="px-4 lg:px-8 py-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-center">
              <img
                src="/assets/banner.png"
                alt="VKsha Coding Club Banner"
                className="w-full max-h-[300px] object-contain rounded-3xl shadow-[0_0_50px_rgba(168,85,247,0.3)]"
              />
            </div>
          </div>
        </section>

        {/* Header */}
        <section className="px-4 lg:px-8 py-12 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-purple-300 to-purple-500 bg-clip-text text-transparent mb-6">
            Events & Activities
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            Join us for exciting workshops, hackathons, tech talks, and
            networking events. Stay updated with the latest happenings at VKsha
            Coding Club.
          </p>
        </section>

        {/* Featured Event */}
        {upcomingEvents
          .filter((event) => event.featured)
          .map((event, index) => (
            <section key={index} className="px-4 lg:px-8 py-16">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold mb-10 text-center bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
                  Featured Event
                </h2>

                <div className="rounded-3xl overflow-hidden backdrop-blur-xl bg-white/5 p-6 lg:flex hover:scale-[1.02] transition-all duration-500 shadow-[0_8px_50px_rgba(139,92,246,0.4)]">
                  <div
                    className="lg:w-1/2 relative overflow-hidden rounded-2xl cursor-pointer"
                    onClick={() => setSelectedEvent(event)}
                  >
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-64 lg:h-full object-cover transition-transform duration-700 hover:scale-110"
                    />
                  </div>
                  <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-semibold">
                        {event.type}
                      </span>
                      <div className="flex items-center space-x-2">
                        <Star className="text-yellow-400 fill-current" size={18} />
                        <span className="text-gray-400 text-sm">Featured</span>
                      </div>
                    </div>

                    <h3 className="text-3xl font-bold mb-4 text-white">
                      {event.title}
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {event.description}
                    </p>

                    <div className="space-y-3 mb-8 text-gray-300">
                      <div className="flex items-center">
                        <Calendar className="mr-3 text-purple-400" size={18} />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="mr-3 text-purple-400" size={18} />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="mr-3 text-purple-400" size={18} />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="mr-3 text-purple-400" size={18} />
                        <span>{event.participants} Expected</span>
                      </div>
                    </div>

                    <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 px-8 py-4 rounded-xl font-semibold text-white shadow-lg shadow-purple-500/30 transition-all duration-500 hover:scale-105">
                      Register Now
                    </Button>
                  </div>
                </div>
              </div>
            </section>
          ))}

        {/* Upcoming Events */}
        <section className="px-4 lg:px-8 py-16">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-purple-300 to-pink-400 bg-clip-text text-transparent">
              Upcoming Events
            </h2>
            <div className="grid md:grid-cols-2 gap-10">
              {upcomingEvents
                .filter((event) => !event.featured)
                .map((event, index) => (
                  <div
                    key={index}
                    className="group relative rounded-3xl overflow-hidden backdrop-blur-xl bg-white/5 hover:scale-105 transition-all duration-500 shadow-[0_8px_30px_rgba(168,85,247,0.4)] cursor-pointer"
                    onClick={() => setSelectedEvent(event)}
                  >
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="p-6">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-semibold ${
                          event.type === "Workshop"
                            ? "bg-blue-500/20 text-blue-300"
                            : event.type === "Talk"
                            ? "bg-green-500/20 text-green-300"
                            : "bg-purple-500/20 text-purple-300"
                        }`}
                      >
                        {event.type}
                      </span>
                      <h3 className="text-xl font-bold mt-3 mb-2 text-white group-hover:text-purple-300 transition-colors duration-300">
                        {event.title}
                      </h3>
                      <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                        {event.description}
                      </p>
                      <div className="flex items-center text-gray-400 text-sm mb-4">
                        <Calendar className="mr-2 text-purple-400" size={14} />
                        <span>{event.date}</span>
                      </div>
                      <Button className="w-full bg-white/10 text-purple-300 hover:bg-purple-500/20 transition-all duration-300">
                        Learn More
                      </Button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>

        {/* Past Events */}
        <section className="px-4 lg:px-8 py-16">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-purple-300 to-pink-400 bg-clip-text text-transparent">
              Past Events
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {pastEvents.map((event, index) => (
                <div
                  key={index}
                  className="group relative rounded-2xl overflow-hidden backdrop-blur-xl bg-white/5 hover:scale-105 transition-all duration-500 shadow-[0_8px_25px_rgba(255,255,255,0.1)] cursor-pointer"
                  onClick={() => setSelectedEvent(event)}
                >
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-44 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="p-5">
                    <h3 className="text-lg font-semibold mb-2 text-white">
                      {event.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-3 line-clamp-2">
                      {event.description}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-400">
                      <span>{event.date}</span>
                      <span>{event.participants} attended</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Modal */}
        {selectedEvent && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-lg flex items-center justify-center z-50 p-4">
            <div className="relative bg-gray-900 rounded-2xl max-w-4xl w-full overflow-hidden shadow-xl animate-in fade-in duration-500">
              <button
                className="absolute top-4 right-4 text-white hover:text-red-400 transition"
                onClick={() => setSelectedEvent(null)}
              >
                <X size={28} />
              </button>
              <img
                src={selectedEvent.image}
                alt={selectedEvent.title}
                className="w-full h-80 object-cover"
              />
              <div className="p-6 space-y-4">
                <h2 className="text-2xl font-bold text-white">
                  {selectedEvent.title}
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  {selectedEvent.description}
                </p>
                <div className="flex flex-wrap gap-4 text-gray-400 text-sm mt-4">
                  {selectedEvent.date && (
                    <span className="flex items-center gap-2">
                      <Calendar size={16} className="text-purple-400" />
                      {selectedEvent.date}
                    </span>
                  )}
                  {selectedEvent.time && (
                    <span className="flex items-center gap-2">
                      <Clock size={16} className="text-purple-400" />
                      {selectedEvent.time}
                    </span>
                  )}
                  {selectedEvent.location && (
                    <span className="flex items-center gap-2">
                      <MapPin size={16} className="text-purple-400" />
                      {selectedEvent.location}
                    </span>
                  )}
                  {selectedEvent.participants && (
                    <span className="flex items-center gap-2">
                      <Users size={16} className="text-purple-400" />
                      {selectedEvent.participants}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
