import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
  ];

  return (
    <footer className="bg-gray-950 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-12">
        {/* Brand */}
        <div className="md:col-span-4">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-full flex items-center justify-center">
              <span className="text-white text-2xl font-serif font-bold">S</span>
            </div>
            <div className="text-white">
              <div className="font-serif text-3xl font-semibold tracking-tight">Sterling Law</div>
              <div className="text-sm text-gray-400">EST. 1978</div>
            </div>
          </div>
          <p className="max-w-sm text-gray-400 leading-relaxed mb-8">
            Providing exceptional legal representation with integrity, expertise, and unwavering dedication for over four decades.
          </p>
          <div className="flex gap-4">
            {socialLinks.map((social, i) => (
              <a 
                key={i} 
                href={social.href} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-gray-900 hover:bg-gray-800 rounded-full transition-colors"
                aria-label={social.label}
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="md:col-span-2">
          <h4 className="text-white font-semibold mb-6">Navigation</h4>
          <div className="space-y-3">
            <Link to="/" className="block hover:text-white transition-colors">Home</Link>
            <Link to="/about" className="block hover:text-white transition-colors">About Us</Link>
            <Link to="/services" className="block hover:text-white transition-colors">Services</Link>
            <Link to="/cases" className="block hover:text-white transition-colors">Past Cases</Link>
            <Link to="/contact" className="block hover:text-white transition-colors">Contact</Link>
          </div>
        </div>

        {/* Services */}
        <div className="md:col-span-3">
          <h4 className="text-white font-semibold mb-6">Our Expertise</h4>
          <div className="grid grid-cols-1 gap-3 text-sm">
            {['Corporate Law', 'Criminal Defense', 'Family Law', 'Real Estate', 'Intellectual Property', 'Immigration'].map((service, i) => (
              <div key={i} className="text-gray-400 hover:text-white transition-colors cursor-pointer">{service}</div>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="md:col-span-3">
          <h4 className="text-white font-semibold mb-6">Contact Us</h4>
          <div className="space-y-4 text-sm">
            <div className="flex gap-3">
              <MapPin className="mt-1 flex-shrink-0" size={18} />
              <div>1200 Lexington Avenue<br />New York, NY 10022</div>
            </div>
            <div className="flex gap-3">
              <Phone className="mt-1 flex-shrink-0" size={18} />
              <div>(212) 555-0199</div>
            </div>
            <div className="flex gap-3">
              <Mail className="mt-1 flex-shrink-0" size={18} />
              <div>info@sterlinglaw.com</div>
            </div>
          </div>
          <div className="mt-8 text-xs text-gray-500">
            © {currentYear} Sterling Law Firm. All Rights Reserved.<br />
            Attorney Advertising. This is a fictional website for demonstration purposes.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;