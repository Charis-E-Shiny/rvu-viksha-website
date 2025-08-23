import Layout from "@/components/Layout";
import { useState, useEffect } from "react";
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

// Custom hook for typing effect
function useTypingEffect(texts: string[], speed = 80, delay = 2000) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [forward, setForward] = useState(true);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    if (index >= texts.length) return;

    let timeout: NodeJS.Timeout;

    if (forward) {
      if (subIndex < texts[index].length) {
        timeout = setTimeout(() => setSubIndex((prev) => prev + 1), speed);
      } else if (index < texts.length - 1) {
        timeout = setTimeout(() => {
          setForward(false);
        }, delay);
      }
    } else {
      if (subIndex > 0) {
        timeout = setTimeout(() => setSubIndex((prev) => prev - 1), speed / 2);
      } else if (index < texts.length - 1) {
        setForward(true);
        setIndex((prev) => prev + 1);
      }
    }

    return () => clearTimeout(timeout);
  }, [subIndex, forward, index, texts, speed, delay]);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearInterval(blinkInterval);
  }, []);

  // If finished last line, stop blinking cursor
  if (index === texts.length - 1 && subIndex === texts[index].length) {
    return texts[index];
  }

  return `${texts[index].substring(0, subIndex)}${blink ? "|" : ""}`;
}

export default function Events() {
  const [selectedEvent, setSelectedEvent] = useState<EventType | null>(null);
  const [view, setView] = useState("upcoming");
  const [filter, setFilter] = useState("All");

  const typingText = useTypingEffect([
  `🚀 Exciting events are on the way!
💡 Stay tuned for workshops & hackathons.
✨ We'll be announcing soon...`
]);

  function calculateRemaining(dateString: string) {
    const eventDate = new Date(dateString);
    const now = new Date();
    const diff = eventDate.getTime() - now.getTime();
    if (diff <= 0) return "Event has passed";
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    return `${days}d remaining`;
  }

  function addToGoogleCalendar(event: EventType) {
    const start = new Date(event.date);
    const end = new Date(start.getTime() + 2 * 60 * 60 * 1000);

    function formatDate(d: Date) {
      return d.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
    }

    const url = new URL("https://calendar.google.com/calendar/render");
    url.searchParams.set("action", "TEMPLATE");
    url.searchParams.set("text", event.title);
    url.searchParams.set("details", event.description);
    url.searchParams.set("dates", `${formatDate(start)}/${formatDate(end)}`);
    if (event.location) url.searchParams.set("location", event.location);

    window.open(url.toString(), "_blank");
  }

  // empty upcoming events
  const upcomingEvents: EventType[] = [];

  const pastEvents = [
    {
      title: "RVU Santhe",
      description:
        "Viksha Coding Club set up an interactive stall at Santhe’25, RV University’s annual fest, to showcase the fun and creativity behind coding.",
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
        <section className="px-7 lg:px-8 py-10 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-cyan-500 bg-clip-text  mb-6">
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

        {/* Filter Tabs only for past */}
        {view === "past" && (
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
        )}

        {/* Events Grid */}
        <section className="px-4 lg:px-8 pb-16 text-center">
          {view === "upcoming" && upcomingEvents.length === 0 ? (
            <div
  className="text-lg sm:text-xl font-semibold text-cyan-400"
  style={{ whiteSpace: "pre-line" }}
>
  {typingText}
</div>
          ) : (
            <div
              className={`max-w-7xl mx-auto grid gap-8 ${
                displayedEvents.filter(
                  (e) => filter === "All" || e.type === filter
                ).length === 1
                  ? "grid-cols-1 place-items-center"
                  : displayedEvents.filter(
                      (e) => filter === "All" || e.type === filter
                    ).length === 2
                  ? "grid-cols-1 sm:grid-cols-2 place-items-center"
                  : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
              }`}
            >
              {displayedEvents
                .filter((e) => filter === "All" || e.type === filter)
                .map((event, index) => (
                  <div
                    key={index}
                    className="group relative rounded-3xl overflow-hidden 
             backdrop-blur-xl bg-gradient-to-br from-[#0f172a]/80 to-[#1e293b]/70 
             border border-white/10 hover:scale-105 transition-all duration-500 
             shadow-[0_8px_30px_rgba(0,200,255,0.3)] cursor-pointer
             max-w-md w-full mx-auto"
                    onClick={() => setSelectedEvent(event)}
                  >
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full aspect-video max-h-60 object-cover group-hover:scale-105 transition-transform duration-700"
                    />

                    <div className="absolute top-3 right-3">
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-cyan-600 text-white">
                        {calculateRemaining(event.date)}
                      </span>
                    </div>

                    <div className="p-5 sm:p-6">
                      <h3 className="text-lg sm:text-xl font-bold mt-3 mb-2 text-white group-hover:text-cyan-300 transition-colors duration-300">
                        {event.title}
                      </h3>
                      <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                        {event.description}
                      </p>
                      <div className="flex items-center text-gray-400 text-sm mb-4">
                        <Calendar className="mr-2 text-cyan-400" size={14} />
                        <span>{new Date(event.date).toDateString()}</span>
                      </div>
                      <div className="flex justify-between gap-3">
                        <Button
                          className="flex-1 bg-cyan-600 text-white hover:bg-cyan-700 transition"
                          onClick={(e) => {
                            e.stopPropagation();
                            addToGoogleCalendar(event);
                          }}
                        >
                          Add to Calendar
                        </Button>
                        <Button className="flex-1 bg-white/10 text-cyan-300 hover:bg-cyan-500/20 transition">
                          Learn More
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          )}
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
                      <Calendar size={16} className="text-cyan-400" />
                      {new Date(selectedEvent.date).toDateString()}
                    </span>
                  )}
                  {selectedEvent.time && (
                    <span className="flex items-center gap-2">
                      <Clock size={16} className="text-cyan-400" />
                      {selectedEvent.time}
                    </span>
                  )}
                  {selectedEvent.location && (
                    <span className="flex items-center gap-2">
                      <MapPin size={16} className="text-cyan-400" />
                      {selectedEvent.location}
                    </span>
                  )}
                  {selectedEvent.participants && (
                    <span className="flex items-center gap-2">
                      <Users size={16} className="text-cyan-400" />
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
