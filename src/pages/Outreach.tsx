import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import SectionTitle from "@/components/SectionTitle";
import { Heart, Users, School, Sparkles, ArrowRight } from "lucide-react";

const Outreach = () => {
  const initiatives = [
    {
      icon: School,
      title: "School Workshops",
      description: "We visit elementary schools to introduce young students to robotics through hands-on activities and demonstrations.",
    },
    {
      icon: Users,
      title: "Community Events",
      description: "RoboRoar participates in local STEM fairs, library programs, and community gatherings to share our passion.",
    },
    {
      icon: Heart,
      title: "Mentorship Programs",
      description: "Our team members mentor aspiring young roboticists, sharing knowledge and inspiring the next generation.",
    },
    {
      icon: Sparkles,
      title: "STEM Camps",
      description: "We host summer workshops where girls can experience robotics, coding, and engineering firsthand.",
    },
  ];


  return (
    <Layout>
      <PageHero
        title="Outreach & Impact"
        subtitle="Giving back to our community and inspiring the next generation of STEM leaders."
        accentWord="Impact"
      />

      {/* Why Outreach */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <SectionTitle
              title="Why We Give Back"
              subtitle=""
            />
            <p className="text-lg text-muted-foreground leading-relaxed">
              RoboRoar believes that inspiring others is just as important as competing. 
              We're committed to sharing our love of STEM with our community, especially 
              with young girls who may not have had exposure to robotics. Every workshop, 
              every demo, every conversation plants a seed that could grow into a future 
              engineer, scientist, or innovator.
            </p>
          </div>
        </div>
      </section>

      {/* Initiatives */}
      <section className="py-20 md:py-28 bg-navy text-white">
        <div className="container mx-auto">
          <SectionTitle
            title="Our Initiatives"
            subtitle="The programs and activities that drive our community impact."
            light
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {initiatives.map((initiative) => (
              <div
                key={initiative.title}
                className="p-8 bg-white/5 rounded-2xl border border-white/10 hover:border-gold/50 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-gold/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gold/30 transition-colors">
                  <initiative.icon className="text-gold" size={28} />
                </div>
                <h3 className="font-display text-2xl mb-3">{initiative.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {initiative.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-pink/10 to-gold/10">
        <div className="container mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl text-primary mb-6">
            Partner With <span className="text-pink">RoboRoar</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Interested in hosting a workshop or collaborating with our team? 
            We'd love to bring STEM excitement to your school or organization.
          </p>
          <Link to="/contact" className="btn-gold">
            Get in Touch
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Outreach;
