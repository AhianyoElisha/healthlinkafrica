import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import logoSvg from "@/assets/healthlinkafrica.svg";

const Contact = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    organization: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-2">
              <img src={logoSvg} alt="Health Link Africa" className="h-20 w-auto" />
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-6 lg:px-8 py-16 md:py-24">
        <Link
          to="/"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors mb-10 group"
        >
          <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to Home
        </Link>

        <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
          Get in Touch
        </h1>
        <p className="text-muted-foreground text-lg mb-12 leading-relaxed">
          Interested in partnering, funding, or collaborating with Health Link Africa? We'd love to hear from you.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">Full Name</label>
              <input
                type="text" id="name" name="name"
                value={formData.name} onChange={handleChange} required
                className="w-full px-4 py-3 text-sm border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">Email</label>
              <input
                type="email" id="email" name="email"
                value={formData.email} onChange={handleChange} required
                className="w-full px-4 py-3 text-sm border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              />
            </div>
          </div>
          <div>
            <label htmlFor="organization" className="block text-sm font-medium text-foreground mb-2">Organisation</label>
            <input
              type="text" id="organization" name="organization"
              value={formData.organization} onChange={handleChange}
              className="w-full px-4 py-3 text-sm border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">Message</label>
            <textarea
              id="message" name="message"
              value={formData.message} onChange={handleChange} required rows={6}
              className="w-full px-4 py-3 text-sm border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-y"
            />
          </div>
          <button
            type="submit"
            className="w-full md:w-auto px-8 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:opacity-90 transition-opacity"
          >
            Send Message
          </button>
        </form>

        <div className="mt-16 pt-12 border-t border-border">
          <h2 className="font-display text-xl font-semibold text-foreground mb-4">Other Ways to Reach Us</h2>
          <div className="space-y-3 text-sm text-muted-foreground">
            <p>Based in Accra, Ghana — serving communities across the Ashanti and Brong-Ahafo regions.</p>
            <p>
              Email:{" "}
              <a href="mailto:hello@healthlinkafrica.org" className="text-primary hover:underline">
                hello@healthlinkafrica.org
              </a>
            </p>
          </div>
        </div>
      </main>

      <footer className="py-8 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-muted-foreground text-sm">© 2024–2026 Health Link Africa. Accra, Ghana.</p>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
