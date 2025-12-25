import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import SectionTitle from "@/components/SectionTitle";
import { Trophy, Medal, Star, Calendar } from "lucide-react";

const Competitions = () => {
  const seasons = [
    {
      year: "2024-2025",
      name: "INTO THE DEEP",
      events: [
        { name: "League Meet 1", location: "Local Arena", result: "Qualified" },
        { name: "League Meet 2", location: "Tech Center", result: "Top 5" },
        { name: "League Championship", location: "City Convention", result: "Upcoming" },
      ],
    },
    {
      year: "2023-2024",
      name: "CENTERSTAGE",
      events: [
        { name: "Qualifier 1", location: "Regional High School", result: "Advanced" },
        { name: "Qualifier 2", location: "Community College", result: "Alliance Captain" },
        { name: "State Championship", location: "State Fairgrounds", result: "Competed" },
      ],
    },
  ];

  const awards = [
    { name: "Connect Award", event: "League Championship 2024", icon: Trophy },
    { name: "Motivate Award", event: "Qualifier 2023", icon: Medal },
    { name: "Judges Choice", event: "Regional Event 2023", icon: Star },
  ];

  return (
    <Layout>
      <PageHero
        title="Competitions & Awards"
        subtitle="Our journey through FTC seasons — learning, growing, and achieving together."
        accentWord="Awards"
      />

      {/* What is FTC Competition */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionTitle
                title="How FTC Works"
                centered={false}
              />
              <div className="space-y-6 text-muted-foreground">
                <p className="text-lg leading-relaxed">
                  Each FTC season introduces a new game challenge. Teams have a few months 
                  to design, build, and program a robot that can complete specific tasks 
                  and score points.
                </p>
                <p className="text-lg leading-relaxed">
                  Competitions include both autonomous periods (where the robot runs on 
                  pre-programmed code) and driver-controlled periods. Teams also compete 
                  in alliances, working together with other teams to achieve victory.
                </p>
                <p className="text-lg leading-relaxed">
                  Beyond robot performance, teams are judged on engineering documentation, 
                  community outreach, and embodying FIRST's core values of Gracious 
                  Professionalism® and Coopertition®.
                </p>
              </div>
            </div>
            
            <div className="bg-navy rounded-3xl p-10 text-white">
              <Calendar className="text-gold mb-6" size={40} />
              <h3 className="font-display text-3xl mb-6">Typical Season</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-3 h-3 bg-gold rounded-full mt-2" />
                  <div>
                    <p className="font-semibold">September</p>
                    <p className="text-white/60 text-sm">Game reveal & strategy planning</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-3 h-3 bg-gold rounded-full mt-2" />
                  <div>
                    <p className="font-semibold">October - November</p>
                    <p className="text-white/60 text-sm">Robot design, build, and testing</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-3 h-3 bg-gold rounded-full mt-2" />
                  <div>
                    <p className="font-semibold">December - February</p>
                    <p className="text-white/60 text-sm">League meets & qualifiers</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-3 h-3 bg-pink rounded-full mt-2" />
                  <div>
                    <p className="font-semibold">March - April</p>
                    <p className="text-white/60 text-sm">Championships & World Championship</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Season Highlights */}
      <section className="py-20 md:py-28 bg-muted">
        <div className="container mx-auto">
          <SectionTitle
            title="Season Highlights"
            subtitle="Our competition history and achievements."
          />

          <div className="space-y-12 mt-12">
            {seasons.map((season) => (
              <div key={season.year} className="bg-background rounded-2xl p-8 shadow-sm">
                <div className="flex flex-col md:flex-row md:items-center gap-4 mb-8">
                  <h3 className="font-display text-3xl text-primary">{season.year}</h3>
                  <span className="px-4 py-2 bg-gold/10 text-gold rounded-full text-sm font-medium">
                    {season.name}
                  </span>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6">
                  {season.events.map((event) => (
                    <div
                      key={event.name}
                      className="p-6 bg-muted rounded-xl"
                    >
                      <h4 className="font-display text-xl text-primary mb-2">{event.name}</h4>
                      <p className="text-muted-foreground text-sm mb-3">{event.location}</p>
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                        event.result === "Upcoming" 
                          ? "bg-gold/20 text-gold" 
                          : "bg-pink/10 text-pink"
                      }`}>
                        {event.result}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-20 md:py-28 bg-navy text-white">
        <div className="container mx-auto">
          <SectionTitle
            title="Awards & Recognition"
            subtitle="Celebrating our achievements beyond the playing field."
            light
          />

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {awards.map((award) => (
              <div
                key={award.name}
                className="p-8 bg-white/5 rounded-2xl border border-white/10 text-center hover:border-gold/50 transition-all duration-300 group"
              >
                <div className="w-20 h-20 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gold/30 transition-colors">
                  <award.icon className="text-gold" size={36} />
                </div>
                <h3 className="font-display text-2xl mb-2">{award.name}</h3>
                <p className="text-white/60 text-sm">{award.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Competitions;
