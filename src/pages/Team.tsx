import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import SectionTitle from "@/components/SectionTitle";

const Team = () => {
  const students = [
    { name: "Sarah", role: "Team Captain, Design, Programming, Scouting" },
    { name: "Ruchitha", role: "Design & Build Lead, Pit Lead" },
    { name: "Tanvi", role: "Programming Lead, Events Lead" },
    { name: "Saanvi", role: "Build, Pit Crew, Fundraising, Awards & Documentation" },
    { name: "Aashi", role: "Build, Pit Crew, Training" },
    { name: "Nirvi", role: "Build, Driver (Drive), Outreach" },
    { name: "Navya", role: "Build, Driver (Mech)" },
    { name: "Loukya", role: "Build, Human Player" },
    { name: "Jenni", role: "Build, Team Coopertition, Scouting" },
  ];

  const mentors = [
    { name: "Sanju M", role: "Head Coach" },
    { name: "Pinky T", role: "Coach" },
    { name: "Sunil D", role: "Mentor" },
    { name: "Chandra V", role: "Mentor" },
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

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {students.map((student, index) => (
              <div
                key={student.name}
                className="group p-6 bg-muted rounded-2xl hover:bg-navy hover:text-white transition-all duration-300"
              >
                <h3 className="font-display text-xl mb-2">{student.name}</h3>
                <p className="text-gold text-sm font-medium group-hover:text-gold">
                  {student.role}
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

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {mentors.map((mentor) => (
              <div
                key={mentor.name}
                className="p-8 bg-white/5 rounded-2xl border border-white/10 hover:border-gold/50 transition-all duration-300"
              >
                <h3 className="font-display text-2xl mb-2">{mentor.name}</h3>
                <p className="text-gold text-sm font-medium">{mentor.role}</p>
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
