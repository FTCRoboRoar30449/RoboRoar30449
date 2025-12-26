import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import SectionTitle from "@/components/SectionTitle";
import { Trophy, Calendar } from "lucide-react";
import robot2024 from "@/assets/robot-2024.jpg";

const Competitions = () => {
  const seasons = [
    {
      year: "2025-2026",
      name: "DECODE",
      description: "Our team is competing in the Decode season! We'll be participating at Santa Clara 1 and Folsom 1 competitions.",
      hasRobotImage: false,
    },
    {
      year: "2024-2025",
      name: "INTO THE DEEP",
      description: "During the summer our team built a competition ready robot to train new members and learn how to build a robot. The robot had a pivoting cascade elevator mechanism with an active intake mechanism.",
      hasRobotImage: true,
      robotImage: robot2024,
    },
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

      {/* Current Season */}
      <section className="py-20 md:py-28 bg-muted">
        <div className="container mx-auto">
          <SectionTitle
            title="Our Seasons"
            subtitle="Following our journey through FTC competitions."
          />

          <div className="max-w-3xl mx-auto mt-12 space-y-8">
            {seasons.map((season) => (
              <div key={season.year} className="bg-background rounded-2xl p-8 shadow-sm">
                <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
                  <h3 className="font-display text-3xl text-primary">{season.year}</h3>
                  <span className="px-4 py-2 bg-gold/10 text-gold rounded-full text-sm font-medium">
                    {season.name}
                  </span>
                </div>
                
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  {season.description}
                </p>
                
                {season.hasRobotImage ? (
                  <div className="mt-8 rounded-xl overflow-hidden">
                    <img 
                      src={season.robotImage} 
                      alt={`${season.name} Robot`}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                ) : (
                  <div className="mt-8 p-6 bg-muted rounded-xl text-center">
                    <Trophy className="text-gold mx-auto mb-4" size={48} />
                    <p className="text-muted-foreground font-medium">
                      Robot Picture Coming Soon
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Competitions;
