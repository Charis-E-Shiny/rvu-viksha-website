import Layout from "@/components/Layout";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, Users, X } from "lucide-react";

type EventType = {
  title: string;
  description: string;
  date: string;
  time?: string;
  location?: string;
  participants: string;
  type: string;
  image: string;
  featured?: boolean;
};

export default function Events() {
  const [selectedEvent, setSelectedEvent] = useState<EventType | null>(null);
  const [view, setView] = useState("upcoming"); 
  const [filter, setFilter] = useState("All"); 

  const calculateRemaining = (dateString: string) => {
    const eventDate = new Date(dateString);
    const now = new Date();
    const diff = eventDate.getTime() - now.getTime();
    if (diff <= 0) return "Event has passed";
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    return `${days}d ${hours}h remaining`;
  };

  const upcomingEvents = [
    {
      title: "Annual Hackathon 2024",
      description:
        "24-hour coding marathon with exciting challenges, industry mentors, and amazing prizes.",
      date: "2025-09-25T18:00:00",
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
        "Hands-on workshop covering AI fundamentals and practical implementations using Python & TensorFlow.",
      date: "2025-10-15T14:00:00",
      time: "2:00 PM - 6:00 PM",
      location: "Computer Lab A",
      participants: "50",
      type: "Workshop",
      image: "/images/events/ai-workshop.jpg",
      featured: false,
    },
  ];

  const pastEvents = [
    {
      title: "RVU Santhe",
      description:
        "Viksha Coding Club set up an interactive stall at Santhe’25, RV University’s annual fest, to showcase the fun and creativity behind coding. The goal was to spark curiosity among students, introduce them to the world of tech, and show how coding can be both useful and exciting.",
      date: "2025-07-29T10:00:00",
      participants: "200+",
      type: "Competition",
      image: "/assets/p1.png",
    },
    {
      title: "Python Workshop",
      description:
        "Viksha Coding Club organized a hands-on Python workshop aimed at helping students dive into programming basics.",
      date: "2024-12-01T10:00:00",
      participants: "120",
      type: "Workshop",
      image: "/assets/p2.png",
    },
    {
      title: "Annual Hackathon 2024",
      description:
        "Argonyx’25 Hackathon was the flagship 24-hour coding challenge with 244 teams from 69 institutions.",
      date: "2024-11-18T10:00:00",
      participants: "244 teams",
      type: "Hackathons",
      image: "/assets/p4.png",
    },
  ];

  const displayedEvents = view === "upcoming" ? upcomingEvents : pastEvents;

  return (
    <Layout>
      <br />
      <br />
      <div className="animate-in fade-in duration-1000">
        {/* Header */}
        <section className="px-4 lg:px-8 py-10 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold  text-cyan-600 bg-clip-text text-transparent mb-4">
            Events & Activities
          </h1>
          <p className="text-gray-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            Join us for exciting workshops, hackathons, tech talks, and more.
          </p>
        </section>

        {/* Toggle Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8 px-4">
          <Button
            onClick={() => setView("upcoming")}
            className={`px-6 py-2 rounded-full ${
              view === "upcoming"
                ? "bg-cyan-600 text-white"
                : "bg-white/10 text-cyan-300 hover:bg-cyan-500/20"
            }`}
          >
            Upcoming Events
          </Button>
          <Button
            onClick={() => setView("past")}
            className={`px-6 py-2 rounded-full ${
               view === "past"
                ? "bg-cyan-600 text-white"
                : "bg-white/10 text-cyan-300 hover:bg-cyan-500/20"
            }`}
          >
            Past Events
          </Button>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 px-4">
          {["All", "Competition", "Workshop", "Hackathons"].map((tab) => (
            <Button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-4 py-1 rounded-full text-sm sm:text-base ${
                filter === tab
                  ? "bg-cyan-500 text-white"
                  : "bg-white/10 text-gray-300 hover:bg-purple-500/20"
              }`}
            >
              {tab}
            </Button>
          ))}
        </div>

        {/* Events Grid */}
        <section className="px-4 lg:px-8 pb-16">
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedEvents
              .filter((e) => filter === "All" || e.type === filter)
              .map((event, index) => (
                <div
                  key={index}
                  className="group relative rounded-3xl overflow-hidden backdrop-blur-xl bg-white/5 hover:scale-105 transition-all duration-500 shadow-[0_8px_30px_rgba(168,85,247,0.4)] cursor-pointer"
                  onClick={() => setSelectedEvent(event)}
                >
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 sm:h-52 object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Status Label */}
                  <div className="absolute top-3 right-3 bg-cyan-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {calculateRemaining(event.date)}
                  </div>

                  <div className="p-5 sm:p-6">
                    <span className="px-2 py-1 rounded-full text-xs font-semibold bg-purple-500/20 text-purple-300">
                      {event.type}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold mt-3 mb-2 text-white group-hover:text-purple-300 transition-colors duration-300">
                      {event.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                      {event.description}
                    </p>
                    <div className="flex items-center text-gray-400 text-sm mb-4">
                      <Calendar className="mr-2 text-purple-400" size={14} />
                      <span>{new Date(event.date).toDateString()}</span>
                    </div>
                    <Button className="w-full bg-white/10 text-purple-300 hover:bg-purple-500/20 transition-all duration-300">
                      Learn More
                    </Button>
                  </div>
                </div>
              ))}
          </div>
        </section>

        {/* Modal */}
        {selectedEvent && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-lg flex items-center justify-center z-50 p-4">
            <div className="relative bg-gray-900 rounded-2xl max-w-2xl sm:max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-xl animate-in fade-in duration-500">
              <button
                className="absolute top-4 right-4 text-white hover:text-red-400 transition"
                onClick={() => setSelectedEvent(null)}
              >
                <X size={28} />
              </button>
              <img
                src={selectedEvent.image}
                alt={selectedEvent.title}
                className="w-full h-56 sm:h-80 object-cover"
              />
              <div className="p-5 sm:p-6 space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-white">
                  {selectedEvent.title}
                </h2>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  {selectedEvent.description}
                </p>
                <div className="flex flex-wrap gap-3 sm:gap-4 text-gray-400 text-xs sm:text-sm mt-4">
                  {selectedEvent.date && (
                    <span className="flex items-center gap-2">
                      <Calendar size={16} className="text-purple-400" />
                      {new Date(selectedEvent.date).toDateString()}
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
