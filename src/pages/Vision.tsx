import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Sparkles, Star, Heart, Rocket } from "lucide-react";

const Vision = () => {
  return (
    <Layout>
      <PageHero
        title="Vision & Values"
        subtitle="Our guiding light: empowering young women to lead, innovate, and inspire."
        accentWord="Values"
      />

      {/* Vision Statement */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 rounded-full text-gold text-sm font-medium mb-8">
              <Sparkles size={16} />
              Our Vision
            </div>
            
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-primary mb-10 leading-tight">
              "Inspiring girls to be tomorrow's{" "}
              <span className="text-gold">STEM leaders</span>."
            </h2>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              We envision a world where every young woman feels confident, capable, 
              and empowered to pursue careers in science, technology, engineering, 
              and mathematics. RoboRoar is more than a robotics team — we're a catalyst 
              for change, one girl at a time.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 md:py-28 bg-navy text-white">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-pink/20 rounded-full text-pink text-sm font-medium mb-6">
                <Heart size={16} />
                Our Mission
              </div>
              
              <h2 className="font-display text-4xl md:text-5xl mb-8">
                Building Confidence Through <span className="text-gold">Innovation</span>
              </h2>
              
              <p className="text-white/70 text-lg leading-relaxed mb-6">
                Our mission is to empower middle school girls to discover their potential 
                in STEM through hands-on robotics experience. We create an environment 
                where curiosity is celebrated, mistakes are learning opportunities, and 
                every voice matters.
              </p>
              
              <p className="text-white/70 text-lg leading-relaxed">
                We believe that when girls are given the opportunity, resources, and 
                encouragement to explore technology, they don't just participate — 
                they <span className="text-gold font-semibold">lead</span>.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="p-8 bg-white/5 rounded-2xl">
                <Star className="text-gold mb-4" size={32} />
                <h3 className="font-display text-2xl mb-2">Excellence</h3>
                <p className="text-white/60 text-sm">Striving to be our best in everything we do.</p>
              </div>
              <div className="p-8 bg-white/5 rounded-2xl">
                <Heart className="text-pink mb-4" size={32} />
                <h3 className="font-display text-2xl mb-2">Community</h3>
                <p className="text-white/60 text-sm">Supporting each other and giving back.</p>
              </div>
              <div className="p-8 bg-white/5 rounded-2xl">
                <Sparkles className="text-gold mb-4" size={32} />
                <h3 className="font-display text-2xl mb-2">Creativity</h3>
                <p className="text-white/60 text-sm">Thinking outside the box, always.</p>
              </div>
              <div className="p-8 bg-white/5 rounded-2xl">
                <Rocket className="text-pink mb-4" size={32} />
                <h3 className="font-display text-2xl mb-2">Courage</h3>
                <p className="text-white/60 text-sm">Taking risks and embracing challenges.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emotional CTA */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-pink/10 to-gold/10">
        <div className="container mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl text-primary mb-8">
            The Future is <span className="text-pink">Female</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Every girl who joins RoboRoar leaves with more than robotics skills. 
            She leaves knowing that she can do hard things, that her ideas matter, 
            and that she has the power to shape the future.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Vision;
