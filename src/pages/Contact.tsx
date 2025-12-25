import { useState } from "react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Mail, Send, Instagram, Youtube } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you soon!",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Layout>
      <PageHero
        title="Contact Us"
        subtitle="Have questions? Want to sponsor, join, or collaborate? We'd love to hear from you!"
        accentWord="Contact"
      />

      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="font-display text-4xl text-primary mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-gold focus:border-gold transition-all outline-none"
                    placeholder="Jane Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-gold focus:border-gold transition-all outline-none"
                    placeholder="jane@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-gold focus:border-gold transition-all outline-none"
                  >
                    <option value="">Select a topic...</option>
                    <option value="join">Joining the Team</option>
                    <option value="sponsor">Sponsorship</option>
                    <option value="outreach">Outreach Collaboration</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-gold focus:border-gold transition-all outline-none resize-none"
                    placeholder="Tell us what's on your mind..."
                  />
                </div>
                
                <button type="submit" className="btn-gold w-full">
                  Send Message
                  <Send className="ml-2" size={20} />
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="lg:pl-12">
              <h2 className="font-display text-4xl text-primary mb-6">Get in Touch</h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center">
                    <Mail className="text-gold" size={24} />
                  </div>
                  <div>
                    <h3 className="font-display text-xl text-primary mb-1">Email Us</h3>
                    <p className="text-muted-foreground">roboroar30449@gmail.com</p>
                  </div>
                </div>

                <div className="bg-navy rounded-2xl p-8 text-white">
                  <h3 className="font-display text-2xl mb-6">Follow Us</h3>
                  <div className="flex gap-4">
                    <a
                      href="#"
                      className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-pink transition-colors"
                      aria-label="Instagram"
                    >
                      <Instagram size={24} />
                    </a>
                    <a
                      href="#"
                      className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-pink transition-colors"
                      aria-label="YouTube"
                    >
                      <Youtube size={24} />
                    </a>
                  </div>
                  <p className="text-white/60 mt-6 text-sm">
                    Follow us on social media for updates, competition highlights, and behind-the-scenes content!
                  </p>
                </div>

                <div className="bg-muted rounded-2xl p-8">
                  <h3 className="font-display text-2xl text-primary mb-4">Response Time</h3>
                  <p className="text-muted-foreground">
                    We typically respond to inquiries within 2-3 business days. For urgent 
                    matters, please mention that in your message subject.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
