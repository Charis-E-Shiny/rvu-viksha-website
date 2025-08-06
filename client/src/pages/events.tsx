import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft, Calendar, Clock, MapPin, Users, Star } from "lucide-react";

export default function Events() {
  const upcomingEvents = [
    {
      title: "Annual Hackathon 2024",
      description: "24-hour coding marathon with exciting challenges, industry mentors, and amazing prizes. Build innovative solutions to real-world problems.",
      date: "March 15-16, 2024",
      time: "6:00 PM - 6:00 PM",
      location: "RVU Tech Center",
      participants: "200+",
      type: "Competition",
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
      featured: true
    },
    {
      title: "AI & Machine Learning Workshop",
      description: "Hands-on workshop covering fundamentals of AI, machine learning algorithms, and practical implementations using Python and TensorFlow.",
      date: "February 28, 2024",
      time: "2:00 PM - 6:00 PM",
      location: "Computer Lab A",
      participants: "50",
      type: "Workshop",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
      featured: false
    },
    {
      title: "Industry Tech Talk Series",
      description: "Senior engineers from top tech companies share insights on industry trends, career guidance, and emerging technologies.",
      date: "March 5, 2024",
      time: "4:00 PM - 5:30 PM",
      location: "Auditorium Hall",
      participants: "300+",
      type: "Talk",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
      featured: false
    }
  ];

  const pastEvents = [
    {
      title: "Web Development Bootcamp",
      description: "Intensive 3-day bootcamp covering modern web development technologies including React, Node.js, and cloud deployment.",
      date: "January 20-22, 2024",
      participants: "75",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200"
    },
    {
      title: "Open Source Contribution Drive",
      description: "Month-long initiative encouraging students to contribute to open source projects with mentorship and guidance.",
      date: "December 2023",
      participants: "120",
      image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200"
    },
    {
      title: "Coding Competition Championship",
      description: "Inter-college coding competition with algorithmic challenges and problem-solving contests.",
      date: "November 18, 2023",
      participants: "150",
      image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200"
    }
  ];

  return (
    <Layout>
      <div className="animate-in fade-in duration-1000">
        {/* Header Section */}
        <section className="px-4 lg:px-8 py-16">
          <div className="max-w-7xl mx-auto">
            <Link href="/" className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-300 mb-8 group">
              <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform duration-300" size={20} />
              Back to Home
            </Link>
            
            <div className="text-center mb-16">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
                Events & Activities
              </h1>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
                Join us for exciting workshops, hackathons, tech talks, and networking events. Stay updated with the latest happenings at VKSHA Coding Club.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Event */}
        {upcomingEvents.filter(event => event.featured).map((event, index) => (
          <section key={index} className="px-4 lg:px-8 py-16">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                  Featured Event
                </h2>
              </div>
              
              <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 backdrop-blur-sm border border-purple-500/20 rounded-3xl overflow-hidden hover:scale-[1.02] transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20">
                <div className="lg:flex">
                  <div className="lg:w-1/2">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="w-full h-64 lg:h-full object-cover"
                    />
                  </div>
                  <div className="lg:w-1/2 p-8 lg:p-12">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-xs font-semibold">
                        {event.type}
                      </span>
                      <div className="flex items-center space-x-2">
                        <Star className="text-yellow-400 fill-current" size={16} />
                        <span className="text-gray-400 text-sm">Featured</span>
                      </div>
                    </div>
                    
                    <h3 className="text-3xl font-bold mb-4 text-white">
                      {event.title}
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {event.description}
                    </p>
                    
                    <div className="space-y-3 mb-8">
                      <div className="flex items-center text-gray-300">
                        <Calendar className="mr-3 text-purple-400" size={18} />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center text-gray-300">
                        <Clock className="mr-3 text-purple-400" size={18} />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center text-gray-300">
                        <MapPin className="mr-3 text-purple-400" size={18} />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center text-gray-300">
                        <Users className="mr-3 text-purple-400" size={18} />
                        <span>{event.participants} Expected</span>
                      </div>
                    </div>
                    
                    <Button className="bg-purple-gradient hover:bg-purple-gradient-hover px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105">
                      Register Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* Upcoming Events */}
        <section className="px-4 lg:px-8 py-16">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              Upcoming Events
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {upcomingEvents.filter(event => !event.featured).map((event, index) => (
                <div 
                  key={index}
                  className="group bg-gradient-to-br from-purple-900/20 to-purple-800/10 backdrop-blur-sm border border-purple-500/20 rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20"
                >
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        event.type === 'Workshop' ? 'bg-blue-500/20 text-blue-400' :
                        event.type === 'Talk' ? 'bg-green-500/20 text-green-400' :
                        'bg-purple-500/20 text-purple-400'
                      }`}>
                        {event.type}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 group-hover:text-purple-300 transition-colors duration-300">
                      {event.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                      {event.description}
                    </p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-gray-400 text-sm">
                        <Calendar className="mr-2 text-purple-400" size={14} />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center text-gray-400 text-sm">
                        <MapPin className="mr-2 text-purple-400" size={14} />
                        <span>{event.location}</span>
                      </div>
                    </div>
                    
                    <Button variant="outline" className="w-full border-purple-500/50 text-purple-300 hover:bg-purple-500/20 transition-all duration-300">
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
            <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              Past Events
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {pastEvents.map((event, index) => (
                <div 
                  key={index}
                  className="group bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl overflow-hidden hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-gray-500/20"
                >
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300 opacity-80"
                  />
                  <div className="p-5">
                    <h3 className="text-lg font-semibold mb-2 text-gray-200">
                      {event.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-3 line-clamp-2">
                      {event.description}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>{event.date}</span>
                      <span>{event.participants} attended</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="px-4 lg:px-8 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 backdrop-blur-sm border border-purple-500/20 rounded-3xl p-12">
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                Never Miss an Event
              </h2>
              <p className="text-gray-300 mb-8 text-lg">
                Subscribe to our newsletter and be the first to know about upcoming events, workshops, and exclusive opportunities.
              </p>
              <Link href="/contact">
                <Button className="bg-purple-gradient hover:bg-purple-gradient-hover px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105">
                  Stay Updated
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}