import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Award, Users, Clock, Shield } from 'lucide-react';

const testimonials = [
  {
    name: "Margaret Chen",
    role: "CEO, TechVentures Inc.",
    image: "/images/client.jpg",
    quote: "Sterling Law helped us navigate a complex merger with precision and expertise. Their team was exceptional.",
    rating: 5
  },
  {
    name: "David Rodriguez",
    role: "Founder, Apex Dynamics",
    image: "/images/lawyer1.jpg",
    quote: "The best legal counsel I've ever worked with. They won our patent dispute in record time.",
    rating: 5
  },
  {
    name: "Elena Vasquez",
    role: "Real Estate Developer",
    image: "/images/lawyer2.jpg",
    quote: "Their expertise in real estate law saved us millions in a high-stakes negotiation.",
    rating: 5
  }
];

const stats = [
  { icon: Award, label: "Cases Won", value: "850+" },
  { icon: Users, label: "Clients Served", value: "2,100" },
  { icon: Clock, label: "Years Experience", value: "46" },
  { icon: Shield, label: "Success Rate", value: "98%" },
];

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[95vh] flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 bg-[url('/images/hero.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-black/70" />
        
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white text-sm tracking-[3px] mb-6">ESTABLISHED 1978 • NEW YORK</div>
            
            <h1 className="font-serif text-white text-[72px] md:text-[96px] leading-[1.05] font-semibold tracking-tighter mb-6">
              Excellence in<br />Legal Advocacy
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-10">
              Trusted by the most discerning clients for complex legal matters.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="group px-9 py-4 bg-white text-black rounded-full font-medium flex items-center justify-center gap-3 hover:bg-gray-100 transition-all"
              >
                Schedule Consultation
                <ArrowRight className="group-hover:translate-x-1 transition" />
              </Link>
              <Link 
                to="/services" 
                className="px-9 py-4 border border-white/60 text-white rounded-full font-medium hover:bg-white/10 transition-all"
              >
                Explore Our Services
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/60 text-sm">
          SCROLL TO BEGIN
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.8 }} className="mt-1">↓</motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <div className="border-b border-gray-200 dark:border-gray-800 py-8 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div 
              key={index} 
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <stat.icon className="text-blue-600 dark:text-blue-400 mb-4" size={32} />
              <div className="font-serif text-5xl font-semibold tracking-tighter mb-1">{stat.value}</div>
              <div className="text-sm uppercase tracking-[2px] text-gray-500">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* About Teaser */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="uppercase tracking-[3px] text-blue-600 dark:text-blue-400 text-sm font-medium mb-4">OUR LEGACY</div>
            <h2 className="font-serif text-6xl leading-none tracking-tight mb-8">Four decades of uncompromising legal excellence.</h2>
            
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              Founded in 1978, Sterling Law has grown into one of New York’s most respected firms, handling the most challenging cases with precision and integrity.
            </p>
            
            <Link to="/about" className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline font-medium">
              Meet Our Team <ArrowRight />
            </Link>
          </div>
          
          <div className="relative">
            <img src="/images/courthouse.jpg" alt="Courthouse" className="rounded-3xl shadow-2xl" />
            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl max-w-[260px]">
              <div className="font-medium">“The gold standard of legal representation.”</div>
              <div className="text-sm text-gray-500 mt-3">— The New York Times</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-100 dark:bg-gray-900 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="text-blue-600 dark:text-blue-400 text-sm tracking-[3px] uppercase mb-3">TRUSTED BY LEADERS</div>
            <h3 className="font-serif text-5xl tracking-tight">What Our Clients Say</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-950 p-9 rounded-3xl shadow-lg flex flex-col"
              >
                <div className="flex mb-6">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <span key={i} className="text-yellow-500">★</span>
                  ))}
                </div>
                
                <blockquote className="text-lg flex-1">"{testimonial.quote}"</blockquote>
                
                <div className="flex items-center gap-4 mt-8 pt-8 border-t border-gray-100 dark:border-gray-800">
                  <img src={testimonial.image} alt={testimonial.name} className="w-14 h-14 rounded-full object-cover" />
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-gradient-to-br from-blue-950 to-black text-white">
        <div className="max-w-2xl mx-auto text-center">
          <div className="text-blue-400 text-sm tracking-[4px] mb-4">BEGIN YOUR JOURNEY</div>
          <h2 className="font-serif text-6xl tracking-tight mb-6">Ready to protect what matters most?</h2>
          <p className="text-xl text-gray-400 mb-10">Schedule a confidential consultation with one of our senior partners.</p>
          
          <Link to="/contact" className="inline-block px-14 py-5 bg-white text-black rounded-full text-lg font-medium hover:bg-gray-200 transition">
            Request a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;