import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import SectionTitle from "@/components/SectionTitle";
import { Star, Code, Users, Heart, ArrowRight, Sparkles, Wrench, Trophy } from "lucide-react";

const Join = () => {
  const benefits = [
    {
      icon: Wrench,
      title: "Hands-On Skills",
      description: "Learn to design, build, and program real robots using professional tools and components.",
    },
    {
      icon: Code,
      title: "Coding Knowledge",
      description: "Develop programming skills in Java and learn about autonomous systems and sensors.",
    },
    {
      icon: Users,
      title: "Teamwork",
      description: "Collaborate with other girls who share your curiosity and passion for STEM.",
    },
    {
      icon: Star,
      title: "Confidence",
      description: "Build self-assurance by tackling challenges and presenting to judges and peers.",
    },
    {
      icon: Trophy,
      title: "Competition Experience",
      description: "Compete against teams from across the region and state in exciting robotics events.",
    },
    {
      icon: Heart,
      title: "Lifelong Friendships",
      description: "Form bonds with teammates that last well beyond the robotics season.",
    },
  ];

  return (
    <Layout>
      <PageHero
        title="Join RoboRoar"
        subtitle="Ready to build robots, break barriers, and discover your potential in STEM?"
        accentWord="Join"
      />

      {/* Who Can Join */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionTitle
                title="Who Can Join?"
                centered={false}
              />
              <div className="space-y-6 text-muted-foreground">
                <p className="text-lg leading-relaxed">
                  RoboRoar welcomes <span className="text-gold font-semibold">all middle school girls</span> (grades 6-8) 
                  who are curious about robotics, engineering, coding, or just want to try something new!
                </p>
                <p className="text-lg leading-relaxed">
                  No experience is required — we teach everything from the ground up. Whether 
                  you've never touched a robot or you've been coding since you were five, 
                  there's a place for you on our team.
                </p>
                <p className="text-lg leading-relaxed">
                  All we ask is that you bring enthusiasm, a willingness to learn, and 
                  a commitment to being a supportive teammate.
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-navy to-primary rounded-3xl p-10 text-white">
              <Sparkles className="text-gold mb-6" size={40} />
              <h3 className="font-display text-3xl mb-6">The Commitment</h3>
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <div className="w-3 h-3 bg-gold rounded-full mt-2" />
                  <span className="text-white/80">Weekly team meetings (2-3 hours)</span>
                </li>
                <li className="flex gap-4">
                  <div className="w-3 h-3 bg-gold rounded-full mt-2" />
                  <span className="text-white/80">Competition attendance (weekends in season)</span>
                </li>
                <li className="flex gap-4">
                  <div className="w-3 h-3 bg-gold rounded-full mt-2" />
                  <span className="text-white/80">Optional outreach event participation</span>
                </li>
                <li className="flex gap-4">
                  <div className="w-3 h-3 bg-pink rounded-full mt-2" />
                  <span className="text-white/80">Season runs September - February</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Gain */}
      <section className="py-20 md:py-28 bg-navy text-white">
        <div className="container mx-auto">
          <SectionTitle
            title="What You'll Gain"
            subtitle="Skills, experiences, and connections that will last a lifetime."
            light
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="p-8 bg-white/5 rounded-2xl border border-white/10 hover:border-gold/50 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-gold/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gold/30 transition-colors">
                  <benefit.icon className="text-gold" size={28} />
                </div>
                <h3 className="font-display text-2xl mb-3">{benefit.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-pink/10 via-background to-gold/10">
        <div className="container mx-auto text-center">
          <h2 className="font-display text-5xl md:text-6xl text-primary mb-6">
            Ready to <span className="text-pink">ROAR</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            Take the first step toward an incredible journey. Join a team of amazing girls 
            who are learning, growing, and making their mark in STEM.
          </p>
          <Link to="/contact" className="btn-gold text-lg">
            Apply to Join RoboRoar
            <ArrowRight className="ml-2" size={24} />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Join;
