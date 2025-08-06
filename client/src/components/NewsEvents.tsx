export default function NewsEvents() {
  const newsEvents = [
    {
      title: "Coding Workshop",
      description: "Learn advanced JavaScript concepts and modern web development techniques.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
    },
    {
      title: "Annual Hackathon",
      description: "24-hour coding competition with exciting challenges and amazing prizes.",
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
    },
    {
      title: "Tech Talks",
      description: "Industry experts share insights on latest technology trends and career guidance.",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
    }
  ];

  return (
    <section id="events" className="px-4 lg:px-8 py-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">What's Happening at Vksha</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {newsEvents.map((event, index) => (
            <div 
              key={index}
              className="bg-gray-900 rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              <img 
                src={event.image} 
                alt={event.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
                <p className="text-gray-400 text-sm">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
