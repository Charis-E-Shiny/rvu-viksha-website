export default function CoreTeam() {
  const coreTeamMembers = [
    {
      name: "John Doe",
      role: "President",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
    },
    {
      name: "Jane Smith", 
      role: "Vice President",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
    },
    {
      name: "Alex Johnson",
      role: "Technical Lead", 
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
    },
    {
      name: "Mike Chen",
      role: "Secretary",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
    }
  ];

  return (
    <section id="team" className="px-4 lg:px-8 py-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">The Core Team</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {coreTeamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-purple-500">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-semibold text-lg">{member.name}</h3>
              <p className="text-purple-400 text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
