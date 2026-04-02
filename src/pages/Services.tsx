import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, DollarSign } from 'lucide-react';

const services = [
  {
    id: 1,
    title: "Corporate Law",
    icon: "🏢",
    description: "Comprehensive legal support for businesses, including formation, governance, mergers & acquisitions, and compliance.",
    price: "$450/hr",
    flatFee: "Starting at $8,500",
    details: "Full-service representation for startups to Fortune 500 companies."
  },
  {
    id: 2,
    title: "Criminal Defense",
    icon: "⚖️",
    description: "Aggressive defense representation in federal and state criminal matters, from white-collar to violent crimes.",
    price: "$375/hr",
    flatFee: "Retainer from $15,000",
    details: "24/7 availability for urgent matters."
  },
  {
    id: 3,
    title: "Family Law",
    icon: "👨‍👩‍👧",
    description: "Compassionate guidance through divorce, custody, adoption, and estate planning matters.",
    price: "$295/hr",
    flatFee: "Divorce from $5,500",
    details: "Mediation and litigation services."
  },
  {
    id: 4,
    title: "Real Estate Law",
    icon: "🏠",
    description: "Expert handling of commercial and residential transactions, zoning, development, and disputes.",
    price: "$325/hr",
    flatFee: "Transaction from $4,200",
    details: "Title searches and due diligence included."
  },
  {
    id: 5,
    title: "Intellectual Property",
    icon: "💡",
    description: "Protection of patents, trademarks, copyrights, and trade secrets. Litigation and prosecution services.",
    price: "$425/hr",
    flatFee: "Patent filing from $7,800",
    details: "International IP protection available."
  },
  {
    id: 6,
    title: "Immigration Law",
    icon: "🌍",
    description: "Visa applications, green cards, citizenship, deportation defense, and employer sponsorships.",
    price: "$280/hr",
    flatFee: "Employment visa from $3,900",
    details: "Family-based and investment immigration."
  }
];

const Services = () => {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const selected = services.find(s => s.id === selectedService);

  return (
    <div className="pt-20">
      <div className="max-w-5xl mx-auto px-6 py-20 text-center">
        <div className="text-blue-600 dark:text-blue-400 tracking-[4px] text-sm">EXPERTISE ACROSS DISCIPLINES</div>
        <h1 className="font-serif text-7xl tracking-tighter mt-4">Our Legal Services</h1>
        <p className="mt-6 text-xl max-w-lg mx-auto text-gray-600 dark:text-gray-400">
          Transparent pricing. Exceptional results. Every matter handled with the highest level of care.
        </p>
      </div>

      {/* Pricing Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              onClick={() => setSelectedService(service.id)}
              className="group bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-3xl p-10 cursor-pointer hover:shadow-2xl hover:border-blue-500 dark:hover:border-blue-400 transition-all flex flex-col"
            >
              <div className="text-6xl mb-8">{service.icon}</div>
              
              <h3 className="font-serif text-4xl tracking-tight mb-5 group-hover:text-blue-600 transition-colors">{service.title}</h3>
              
              <p className="text-gray-600 dark:text-gray-400 flex-1 mb-8">{service.description}</p>
              
              <div className="pt-6 border-t border-gray-100 dark:border-gray-800 flex items-end justify-between">
                <div>
                  <div className="text-xs uppercase tracking-widest text-gray-500">Hourly Rate</div>
                  <div className="font-mono text-4xl font-medium tracking-tighter text-blue-600 dark:text-blue-400">{service.price}</div>
                </div>
                <div className="text-right text-sm text-gray-500 dark:text-gray-400">
                  {service.flatFee}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Service Detail Modal */}
      {selected && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-[70] p-6" onClick={() => setSelectedService(null)}>
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white dark:bg-gray-900 max-w-2xl w-full rounded-3xl overflow-hidden"
            onClick={e => e.stopPropagation()}
          >
            <div className="p-12">
              <div className="text-7xl mb-8">{selected.icon}</div>
              <h2 className="font-serif text-6xl tracking-tight">{selected.title}</h2>
              <div className="flex gap-4 mt-4 text-sm">
                <div className="flex items-center gap-1.5 text-blue-600 dark:text-blue-400">
                  <DollarSign size={15} /> {selected.price}
                </div>
                <div className="flex items-center gap-1.5 text-gray-500">
                  <Clock size={15} /> {selected.flatFee}
                </div>
              </div>

              <p className="mt-9 text-xl text-gray-600 dark:text-gray-400">{selected.description}</p>
              <p className="mt-6 text-gray-600 dark:text-gray-400">{selected.details}</p>

              <div className="mt-10 flex gap-4">
                <button 
                  onClick={() => setSelectedService(null)}
                  className="flex-1 py-4 border border-gray-300 dark:border-gray-700 rounded-2xl hover:bg-gray-50 dark:hover:bg-gray-800 transition"
                >
                  Close
                </button>
                <Link 
                  to="/contact" 
                  onClick={() => setSelectedService(null)}
                  className="flex-1 py-4 bg-blue-600 text-white rounded-2xl flex items-center justify-center gap-2 hover:bg-blue-700 transition"
                >
                  Inquire About This Service <ArrowRight />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Additional Info */}
      <div className="bg-gray-950 py-24 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="text-blue-400 text-sm tracking-widest">WHY STERLING</div>
          <h3 className="font-serif text-6xl tracking-tighter mt-4">Fair. Transparent.<br />No Surprises.</h3>
          
          <div className="mt-12 grid md:grid-cols-3 gap-8 text-left">
            <div className="bg-gray-900/50 p-8 rounded-2xl">
              <div className="text-blue-400 text-4xl mb-6">01</div>
              <h4 className="text-2xl font-medium mb-3">No Hidden Fees</h4>
              <p className="text-gray-400">All costs disclosed upfront with detailed engagement letters.</p>
            </div>
            <div className="bg-gray-900/50 p-8 rounded-2xl">
              <div className="text-blue-400 text-4xl mb-6">02</div>
              <h4 className="text-2xl font-medium mb-3">Flexible Billing</h4>
              <p className="text-gray-400">Hourly, flat fee, contingency — we tailor to your needs.</p>
            </div>
            <div className="bg-gray-900/50 p-8 rounded-2xl">
              <div className="text-blue-400 text-4xl mb-6">03</div>
              <h4 className="text-2xl font-medium mb-3">Payment Plans</h4>
              <p className="text-gray-400">Structured payment arrangements available for qualified clients.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;