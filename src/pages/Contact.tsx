import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Mail } from "lucide-react";

const Contact = () => {

  return (
    <Layout>
      <PageHero
        title="Contact Us"
        subtitle="Have questions? Want to sponsor, join, or collaborate? We'd love to hear from you!"
        accentWord="Contact"
      />

      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-display text-4xl text-primary mb-12 text-center">Get in Touch</h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4 justify-center">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center">
                  <Mail className="text-gold" size={24} />
                </div>
                <div>
                  <h3 className="font-display text-xl text-primary mb-1">Email Us</h3>
                  <a 
                    href="mailto:roboroar30449@gmail.com"
                    className="text-muted-foreground hover:text-gold transition-colors"
                  >
                    roboroar30449@gmail.com
                  </a>
                </div>
              </div>

              <div className="bg-navy rounded-2xl p-8 text-white text-center">
                <h3 className="font-display text-2xl mb-6">Stay Connected</h3>
                <p className="text-white/60 text-sm mb-6">
                  Reach out to us anytime at our email address. We'd love to hear from you!
                </p>
                <a
                  href="mailto:roboroar30449@gmail.com"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-pink rounded-lg hover:bg-pink/90 transition-colors font-medium"
                >
                  <Mail size={20} />
                  Send us an email
                </a>
              </div>

              <div className="bg-muted rounded-2xl p-8 text-center">
                <h3 className="font-display text-2xl text-primary mb-4">Response Time</h3>
                <p className="text-muted-foreground">
                  We typically respond to inquiries within 2-3 business days. For urgent 
                  matters, please mention that in your message subject.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
