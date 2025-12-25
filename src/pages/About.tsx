import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import SectionTitle from "@/components/SectionTitle";
import { Users, Target, Heart, Lightbulb } from "lucide-react";

const About = () => {
  const pillars = [
    {
      icon: Users,
      title: "Teamwork",
      description: "We succeed together, learning from each other and building on our collective strengths.",
    },
    {
      icon: Target,
      title: "Growth Mindset",
      description: "Every challenge is an opportunity to learn. We embrace failures as stepping stones to success.",
    },
    {
      icon: Heart,
      title: "Empowerment",
      description: "We believe every girl has the potential to be a STEM leader. We nurture that potential.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We think creatively, experiment boldly, and push the boundaries of what's possible.",
    },
  ];

  return (
    <Layout>
      <PageHero
        title="About RoboRoar"
        subtitle="Discover who we are, what we do, and why we're passionate about empowering young women in STEM."
        accentWord="RoboRoar"
      />

      {/* Who We Are */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionTitle
                title="Who We Are"
                subtitle=""
                centered={false}
              />
              <div className="space-y-6 text-muted-foreground">
                <p className="text-lg leading-relaxed">
                  <span className="text-gold font-semibold">RoboRoar 30449</span> is a middle school all-girls 
                  FIRST Tech Challenge (FTC) robotics team. We are students who are passionate 
                  about science, technology, engineering, and math — and we're proving that girls 
                  belong in every corner of STEM.
                </p>
                <p className="text-lg leading-relaxed">
                  Founded on the belief that young women can and should lead in technology, 
                  our team provides a supportive environment where girls can explore robotics, 
                  develop technical skills, and build lasting confidence.
                </p>
                <p className="text-lg leading-relaxed">
                  We don't just build robots — we build <span className="text-pink font-semibold">future engineers, 
                  programmers, leaders, and innovators</span>.
                </p>
              </div>
            </div>
            
            <div className="bg-navy rounded-3xl p-10 text-white">
              <h3 className="font-display text-3xl mb-6">What is FTC?</h3>
              <p className="text-white/70 leading-relaxed mb-6">
                FIRST Tech Challenge (FTC) is a robotics competition for students in grades 7-12. 
                Teams design, build, and program robots to compete in an alliance format against 
                other teams.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gold rounded-full mt-2" />
                  <span className="text-white/80">Design and build robots using professional-grade components</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gold rounded-full mt-2" />
                  <span className="text-white/80">Program autonomous and driver-controlled functions</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gold rounded-full mt-2" />
                  <span className="text-white/80">Compete at regional, state, and world championship levels</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gold rounded-full mt-2" />
                  <span className="text-white/80">Apply Gracious Professionalism® in all interactions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why All-Girls */}
      <section className="py-20 md:py-28 bg-muted">
        <div className="container mx-auto text-center">
          <SectionTitle
            title="Why an All-Girls Team?"
            subtitle="Creating space where young women can thrive in STEM without limits."
          />
          
          <div className="max-w-3xl mx-auto mt-12">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Women remain underrepresented in STEM fields. By creating an all-girls team, 
              we provide a space where young women can take risks, make mistakes, and grow 
              without the pressure of gender dynamics that sometimes exist in co-ed environments.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our team members see themselves as engineers, programmers, and leaders — not 
              as exceptions. They develop confidence that carries into every classroom, 
              every project, and every future career opportunity.
            </p>
          </div>
        </div>
      </section>

      {/* Our Pillars */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto">
          <SectionTitle
            title="What We Believe"
            subtitle="The core values that guide everything we do."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="p-8 rounded-2xl border border-border hover:border-gold hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-gold/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                  <pillar.icon className="text-gold" size={28} />
                </div>
                <h3 className="font-display text-2xl text-primary mb-3">{pillar.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
