import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import SectionTitle from "@/components/SectionTitle";

const Team = () => {
  const students = [
    { name: "Emma Rodriguez", role: "Team Captain", description: "Leads strategy and team coordination." },
    { name: "Sophia Chen", role: "Lead Programmer", description: "Develops autonomous and TeleOp code." },
    { name: "Ava Johnson", role: "Lead Builder", description: "Oversees robot design and construction." },
    { name: "Mia Williams", role: "CAD Designer", description: "Creates 3D models and technical drawings." },
    { name: "Isabella Davis", role: "Outreach Lead", description: "Coordinates community engagement." },
    { name: "Olivia Martinez", role: "Documentation Lead", description: "Manages engineering notebook." },
    { name: "Charlotte Brown", role: "Builder", description: "Specializes in drivetrain systems." },
    { name: "Amelia Wilson", role: "Programmer", description: "Focuses on sensor integration." },
  ];

  const mentors = [
    { name: "Dr. Sarah Thompson", role: "Lead Mentor", description: "Engineering professor with 15+ years in robotics." },
    { name: "Michael Chen", role: "Technical Mentor", description: "Software engineer passionate about education." },
    { name: "Jessica Rivera", role: "Operations Mentor", description: "Supports team logistics and planning." },
  ];

  return (
    <Layout>
      <PageHero
        title="Meet the Team"
        subtitle="Get to know the brilliant young women and dedicated mentors behind RoboRoar."
        accentWord="Team"
      />

      {/* Students Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto">
          <SectionTitle
            title="Our Students"
            subtitle="The driving force behind everything we build and achieve."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {students.map((student, index) => (
              <div
                key={student.name}
                className="group p-6 bg-muted rounded-2xl hover:bg-navy hover:text-white transition-all duration-300"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-gold to-pink rounded-full mb-6 flex items-center justify-center">
                  <span className="font-display text-2xl text-navy">
                    {student.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="font-display text-xl mb-1">{student.name}</h3>
                <p className="text-gold text-sm font-medium mb-3">{student.role}</p>
                <p className="text-muted-foreground group-hover:text-white/70 text-sm">
                  {student.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mentors Section */}
      <section className="py-20 md:py-28 bg-navy text-white">
        <div className="container mx-auto">
          <SectionTitle
            title="Our Mentors"
            subtitle="Experienced professionals who guide and inspire our team."
            light
          />

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {mentors.map((mentor) => (
              <div
                key={mentor.name}
                className="p-8 bg-white/5 rounded-2xl border border-white/10 hover:border-gold/50 transition-all duration-300"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-pink to-gold rounded-full mb-6 flex items-center justify-center">
                  <span className="font-display text-3xl text-navy">
                    {mentor.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="font-display text-2xl mb-1">{mentor.name}</h3>
                <p className="text-gold text-sm font-medium mb-4">{mentor.role}</p>
                <p className="text-white/60">{mentor.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Culture */}
      <section className="py-20 md:py-28 bg-muted">
        <div className="container mx-auto text-center">
          <SectionTitle
            title="Our Team Culture"
            subtitle="What makes RoboRoar special isn't just what we build — it's how we work together."
          />
          
          <div className="max-w-3xl mx-auto mt-8">
            <p className="text-lg text-muted-foreground leading-relaxed">
              We celebrate every success, learn from every failure, and support each other 
              through every challenge. Our team meetings are filled with brainstorming, 
              laughter, and the excitement of discovery. We're not just teammates — we're 
              friends building something amazing together.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Team;
