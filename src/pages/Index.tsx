import { Link } from "react-router-dom";
import { Wrench, Code, Trophy, Users, ArrowRight, Heart, Sparkles } from "lucide-react";
import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import logo from "@/assets/logo-light.png";

const Index = () => {
  const features = [
    {
      icon: Wrench,
      title: "Build",
      description: "Design and construct competition-ready robots from the ground up.",
    },
    {
      icon: Code,
      title: "Code",
      description: "Program autonomous functions and driver-controlled systems.",
    },
    {
      icon: Trophy,
      title: "Compete",
      description: "Represent at regional and state FIRST Tech Challenge events.",
    },
    {
      icon: Users,
      title: "Lead",
      description: "Develop leadership skills and inspire the next generation.",
    },
  ];

  const stats = [
    { number: "2+", label: "Years Active" },
    { number: "10+", label: "Competitions" },
    { number: "15+", label: "Outreach Events" },
    { number: "100+", label: "Students Impacted" },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] bg-navy flex items-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gold rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-gold text-sm font-medium mb-8 animate-fade-up">
                <Sparkles size={16} />
                FTC Team 30449
              </div>
              
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-6 animate-fade-up animation-delay-100">
                Inspiring Girls to Be Tomorrow's{" "}
                <span className="text-gold">STEM Leaders</span>
              </h1>
              
              <p className="text-white/70 text-lg md:text-xl mb-10 max-w-xl animate-fade-up animation-delay-200">
                RoboRoar 30449 is a middle school, all-girls FIRST Tech Challenge 
                robotics team empowering young women through innovation, teamwork, 
                and confidence.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up animation-delay-300">
                <Link to="/join" className="btn-gold">
                  Join the Team
                  <ArrowRight className="ml-2" size={20} />
                </Link>
                <Link to="/sponsors" className="btn-pink">
                  Support RoboRoar
                  <Heart className="ml-2" size={20} />
                </Link>
              </div>
            </div>

            <div className="hidden lg:flex justify-center animate-fade-up animation-delay-200">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-pink/20 rounded-full blur-3xl scale-110" />
                <img 
                  src={logo} 
                  alt="RoboRoar Mascot" 
                  className="relative w-[400px] h-auto animate-float"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto">
          <SectionTitle
            title="What is RoboRoar?"
            subtitle="We're more than a robotics team — we're a movement empowering young women in STEM."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="group p-8 bg-navy rounded-2xl text-white transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 bg-gold/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gold/30 transition-colors">
                  <feature.icon className="text-gold" size={28} />
                </div>
                <h3 className="font-display text-2xl mb-3">{feature.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Empowerment Section */}
      <section className="py-20 md:py-28 bg-navy text-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-pink/20 rounded-full text-pink text-sm font-medium mb-8">
              <Heart size={16} />
              Our Mission
            </div>
            
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-8">
              Student-Driven.{" "}
              <span className="text-gold">Mentor-Guided.</span>
            </h2>
            
            <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-12">
              At RoboRoar, students take the lead. From designing robots to managing 
              the team, our girls develop real-world skills while mentors provide 
              guidance and support. We believe in learning through doing, growing 
              through challenges, and leading with confidence.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-6 py-3 bg-white/10 rounded-full text-sm font-medium">
                Confidence
              </span>
              <span className="px-6 py-3 bg-white/10 rounded-full text-sm font-medium">
                Leadership
              </span>
              <span className="px-6 py-3 bg-white/10 rounded-full text-sm font-medium">
                Innovation
              </span>
              <span className="px-6 py-3 bg-white/10 rounded-full text-sm font-medium">
                Collaboration
              </span>
              <span className="px-6 py-3 bg-white/10 rounded-full text-sm font-medium">
                Courage
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto">
          <SectionTitle
            title="Our Impact"
            subtitle="Growing stronger every season, inspiring more girls to explore STEM."
          />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center p-8 rounded-2xl bg-muted hover:bg-navy hover:text-white transition-all duration-300 group"
              >
                <div className="font-display text-5xl md:text-6xl text-gold group-hover:text-gold mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground group-hover:text-white/70 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-navy via-navy to-primary">
        <div className="container mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            Ready to <span className="text-pink">ROAR</span>?
          </h2>
          <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Join an incredible community of young women who are building robots, 
            breaking barriers, and shaping the future of STEM.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/join" className="btn-gold">
              Join RoboRoar Today
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link to="/about" className="btn-outline-light">
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
