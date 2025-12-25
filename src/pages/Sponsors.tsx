import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import SectionTitle from "@/components/SectionTitle";
import { Heart, ArrowRight, Building } from "lucide-react";

const Sponsors = () => {
  const sponsorTiers = [
    { tier: "Platinum", amount: "$2,500+", perks: "Logo on robot, jerseys, all materials" },
    { tier: "Gold", amount: "$1,000+", perks: "Logo on banners and website" },
    { tier: "Silver", amount: "$500+", perks: "Recognition on website" },
    { tier: "Bronze", amount: "$100+", perks: "Thank you on social media" },
  ];

  const currentSponsors = [
    { name: "Sponsor Logo 1", tier: "Platinum" },
    { name: "Sponsor Logo 2", tier: "Gold" },
    { name: "Sponsor Logo 3", tier: "Gold" },
    { name: "Sponsor Logo 4", tier: "Silver" },
    { name: "Sponsor Logo 5", tier: "Silver" },
    { name: "Sponsor Logo 6", tier: "Bronze" },
  ];

  return (
    <Layout>
      <PageHero
        title="Our Sponsors"
        subtitle="Thank you to the organizations and individuals who make RoboRoar possible."
        accentWord="Sponsors"
      />

      {/* Thank You Message */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <Heart className="text-pink mx-auto mb-6" size={48} />
            <h2 className="font-display text-4xl md:text-5xl text-primary mb-6">
              Thank You, Sponsors!
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our sponsors are the backbone of RoboRoar. Their generous support enables us 
              to purchase parts, attend competitions, and conduct outreach programs. Every 
              contribution directly empowers young women in STEM and helps us inspire the 
              next generation of innovators.
            </p>
          </div>
        </div>
      </section>

      {/* Current Sponsors */}
      <section className="py-20 md:py-28 bg-muted">
        <div className="container mx-auto">
          <SectionTitle
            title="Current Sponsors"
            subtitle="The amazing organizations supporting our mission."
          />

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-12">
            {currentSponsors.map((sponsor, index) => (
              <div
                key={index}
                className="p-8 bg-background rounded-2xl flex flex-col items-center justify-center aspect-video hover:shadow-lg transition-shadow"
              >
                <Building className="text-muted-foreground mb-4" size={48} />
                <span className="text-muted-foreground text-sm">{sponsor.tier} Sponsor</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsorship Tiers */}
      <section className="py-20 md:py-28 bg-navy text-white">
        <div className="container mx-auto">
          <SectionTitle
            title="Become a Sponsor"
            subtitle="Join our mission to empower young women in STEM."
            light
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {sponsorTiers.map((tier) => (
              <div
                key={tier.tier}
                className="p-8 bg-white/5 rounded-2xl border border-white/10 hover:border-gold/50 transition-all duration-300 text-center group"
              >
                <h3 className="font-display text-3xl mb-2 text-gold">{tier.tier}</h3>
                <p className="font-display text-2xl mb-4">{tier.amount}</p>
                <p className="text-white/60 text-sm">{tier.perks}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/contact" className="btn-pink">
              Contact Us to Sponsor
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Sponsor */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <SectionTitle
              title="Why Sponsor RoboRoar?"
              subtitle=""
            />
            <div className="space-y-6 text-lg text-muted-foreground">
              <p className="leading-relaxed">
                When you sponsor RoboRoar, you're investing in the future. You're helping 
                break down barriers for young women in STEM and supporting hands-on education 
                that makes a real difference.
              </p>
              <p className="leading-relaxed">
                Our sponsors receive recognition across all our platforms and materials, 
                connecting their brand with innovation, empowerment, and community impact.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Sponsors;
