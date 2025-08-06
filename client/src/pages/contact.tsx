import Layout from "@/components/Layout";
import ContactForm from "@/components/ContactForm";
import { Link } from "wouter";
import { ArrowLeft, MapPin, Phone, Mail, Clock, Github, Instagram, Linkedin } from "lucide-react";

export default function Contact() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["RV University", "Bengaluru, Karnataka", "India - 562157"],
      color: "text-blue-400"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91 80 6769 0000", "+91 98765 43210"],
      color: "text-green-400"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["contact@vkshacodingclub.org", "info@vkshacodingclub.org"],
      color: "text-purple-400"
    },
    {
      icon: Clock,
      title: "Club Hours",
      details: ["Monday - Friday: 4:00 PM - 8:00 PM", "Saturday: 10:00 AM - 6:00 PM", "Sunday: Closed"],
      color: "text-yellow-400"
    }
  ];

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub", color: "hover:text-gray-300" },
    { icon: Instagram, href: "#", label: "Instagram", color: "hover:text-pink-400" },
    { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:text-blue-400" }
  ];

  const faqs = [
    {
      question: "How can I join VKSHA Coding Club?",
      answer: "Simply fill out our contact form with your details and mention your interest in joining. We'll get back to you with information about our next recruitment drive and orientation session."
    },
    {
      question: "Do I need prior coding experience to join?",
      answer: "Not at all! We welcome students from all backgrounds and skill levels. We have beginner-friendly workshops and mentorship programs to help you get started."
    },
    {
      question: "What programming languages do you focus on?",
      answer: "We cover a wide range of technologies including Python, JavaScript, Java, React, Node.js, Flutter, and emerging technologies like AI/ML and blockchain."
    },
    {
      question: "Are there any membership fees?",
      answer: "VKSHA Coding Club membership is completely free for all RVU students. We believe in making coding education accessible to everyone."
    },
    {
      question: "Can I propose a project or workshop idea?",
      answer: "Absolutely! We encourage members to propose new ideas, lead workshops, and initiate projects. Innovation and leadership are core values of our club."
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
                Get In Touch
              </h1>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
                Have questions about joining our club, want to collaborate on a project, or need information about our events? We'd love to hear from you!
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="px-4 lg:px-8 py-16">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              Contact Information
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div 
                    key={index}
                    className="bg-gradient-to-br from-purple-900/20 to-purple-800/10 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20 text-center"
                  >
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-purple-500/20 to-purple-600/20 mb-4`}>
                      <IconComponent className={`${info.color}`} size={24} />
                    </div>
                    <h3 className="text-lg font-semibold mb-3 text-white">{info.title}</h3>
                    <div className="space-y-1">
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-gray-300 text-sm">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Social Media Links */}
            <div className="text-center mb-16">
              <h3 className="text-xl font-semibold mb-6 text-white">Follow Us</h3>
              <div className="flex justify-center space-x-6">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a 
                      key={index}
                      href={social.href}
                      className={`p-3 bg-gradient-to-r from-purple-500/20 to-purple-600/20 rounded-full text-gray-400 ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/30`}
                      aria-label={social.label}
                    >
                      <IconComponent size={24} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="px-4 lg:px-8 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                Send Us a Message
              </h2>
              <p className="text-gray-300 text-lg">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
            </div>
            <ContactForm />
          </div>
        </section>

        {/* FAQ Section */}
        <section className="px-4 lg:px-8 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-purple-900/20 to-purple-800/10 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 hover:border-purple-500/30 transition-all duration-300"
                >
                  <h3 className="text-lg font-semibold mb-3 text-white flex items-start">
                    <span className="text-purple-400 mr-3 font-bold">Q:</span>
                    {faq.question}
                  </h3>
                  <p className="text-gray-300 leading-relaxed pl-8">
                    <span className="text-purple-400 mr-3 font-bold">A:</span>
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Map Section (Placeholder) */}
        <section className="px-4 lg:px-8 py-16">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              Find Us On Campus
            </h2>
            
            <div className="bg-gradient-to-br from-purple-900/20 to-purple-800/10 backdrop-blur-sm border border-purple-500/20 rounded-3xl p-8 text-center">
              <div className="bg-gradient-to-r from-purple-500/10 to-purple-600/10 rounded-2xl p-16 mb-6">
                <MapPin className="mx-auto text-purple-400 mb-4" size={64} />
                <h3 className="text-2xl font-bold mb-4 text-white">RV University Campus</h3>
                <p className="text-gray-300 mb-4">
                  Visit us at the Computer Science Department, 3rd Floor, Tech Block
                </p>
                <p className="text-gray-400 text-sm">
                  Interactive campus map coming soon
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 text-sm">
                <div className="bg-purple-500/10 rounded-xl p-4">
                  <h4 className="font-semibold text-purple-300 mb-2">Nearest Landmark</h4>
                  <p className="text-gray-400">Main Library Building</p>
                </div>
                <div className="bg-purple-500/10 rounded-xl p-4">
                  <h4 className="font-semibold text-purple-300 mb-2">Parking</h4>
                  <p className="text-gray-400">Visitor parking available</p>
                </div>
                <div className="bg-purple-500/10 rounded-xl p-4">
                  <h4 className="font-semibold text-purple-300 mb-2">Access</h4>
                  <p className="text-gray-400">Student ID required</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Contact */}
        <section className="px-4 lg:px-8 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-br from-red-900/20 to-red-800/10 backdrop-blur-sm border border-red-500/20 rounded-3xl p-12">
              <h2 className="text-2xl font-bold mb-4 text-red-300">
                Need Immediate Assistance?
              </h2>
              <p className="text-gray-300 mb-6">
                For urgent club-related matters or emergencies during events, contact our emergency hotline.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <div className="flex items-center space-x-2 text-red-300">
                  <Phone size={20} />
                  <span className="font-semibold">+91 98765 43210</span>
                </div>
                <div className="flex items-center space-x-2 text-red-300">
                  <Mail size={20} />
                  <span className="font-semibold">emergency@vkshacodingclub.org</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}