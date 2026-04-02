import { motion } from 'framer-motion';

const cases = [
  {
    id: 1,
    title: "United States v. Hamilton Capital",
    client: "Hamilton Capital Partners",
    type: "Securities Fraud Defense",
    outcome: "All charges dismissed",
    year: "2023",
    description: "Successfully defended a major investment firm against SEC allegations of market manipulation. Secured a landmark dismissal after 14 months of litigation.",
    image: "/images/case1.jpg",
    amount: "$142M",
    details: "Complex case involving 9 defendants and 4 jurisdictions. Utilized expert forensic accounting."
  },
  {
    id: 2,
    title: "Blackstone Group Acquisition",
    client: "Blackstone Inc.",
    type: "Corporate Merger",
    outcome: "Transaction completed successfully",
    year: "2022",
    description: "Advised on the $2.3 billion acquisition of a global logistics company. Negotiated favorable terms and obtained regulatory approvals in record time.",
    image: "/images/case2.jpg",
    amount: "$2.3B",
    details: "Handled antitrust review and shareholder litigation."
  },
  {
    id: 3,
    title: "Patel v. Vertex Pharmaceuticals",
    client: "Dr. Anika Patel",
    type: "Intellectual Property Litigation",
    outcome: "Jury verdict for client",
    year: "2021",
    description: "Represented a renowned scientist in a patent dispute against a major pharmaceutical company. Obtained $94 million in damages and permanent injunction.",
    image: "/images/case1.jpg",
    amount: "$94M",
    details: "Trial lasted 27 days. Established new precedent in biotech patent law."
  },
  {
    id: 4,
    title: "In re: Estate of William Kensington",
    client: "Kensington Family Trust",
    type: "Estate & Probate",
    outcome: "Favorable settlement",
    year: "2024",
    description: "Successfully resolved a contested $87 million estate dispute involving multiple beneficiaries across 3 continents.",
    image: "/images/case2.jpg",
    amount: "$87M",
    details: "Mediated settlement after 9 months. Avoided 2-year trial."
  }
];

const PastCases = () => {
  return (
    <div className="pt-20">
      <div className="max-w-5xl mx-auto px-6 py-20 text-center">
        <div className="text-blue-600 dark:text-blue-400 tracking-[4px] text-sm">RESULTS THAT SPEAK FOR THEMSELVES</div>
        <h1 className="font-serif text-7xl tracking-tighter mt-4">Notable Past Cases</h1>
        <p className="mt-6 text-xl max-w-md mx-auto text-gray-600 dark:text-gray-400">
          A selection of significant matters where we delivered exceptional results.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-24">
        <div className="space-y-8">
          {cases.map((caseItem, index) => (
            <motion.div 
              key={caseItem.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group grid md:grid-cols-12 gap-8 bg-white dark:bg-gray-900 rounded-3xl overflow-hidden border border-gray-100 dark:border-gray-800 hover:border-blue-500/30 transition-all"
            >
              <div className="md:col-span-5 relative h-80 md:h-auto overflow-hidden">
                <img 
                  src={caseItem.image} 
                  alt={caseItem.title} 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
                
                <div className="absolute bottom-8 left-8 text-white">
                  <div className="text-5xl font-mono font-light tracking-tighter">{caseItem.amount}</div>
                  <div className="text-sm uppercase tracking-[2px] opacity-70">{caseItem.year}</div>
                </div>
              </div>

              <div className="md:col-span-7 p-12 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-xs px-4 py-1 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400">{caseItem.type}</span>
                  <span className="text-xs px-4 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400">{caseItem.year}</span>
                </div>

                <h3 className="font-serif text-4xl tracking-tight mb-4 pr-6">{caseItem.title}</h3>
                
                <div className="text-sm text-gray-500 mb-4">Client: {caseItem.client}</div>
                
                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-6">{caseItem.description}</p>
                
                <div className="pt-6 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
                  <div>
                    <div className="text-xs text-gray-500">OUTCOME</div>
                    <div className="font-medium text-lg text-green-600 dark:text-green-400">{caseItem.outcome}</div>
                  </div>
                  
                  <div className="text-right text-sm max-w-[200px] text-gray-500">
                    {caseItem.details}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="bg-gray-950 py-20 text-white text-center">
        <div className="max-w-md mx-auto px-6">
          <div className="text-blue-400 text-sm tracking-widest mb-4">CONFIDENTIALITY</div>
          <h3 className="font-serif text-5xl tracking-tight">Many of our greatest victories remain confidential.</h3>
          <p className="mt-6 text-gray-400">We are honored to represent clients who prefer discretion. Our results speak louder than any public record.</p>
        </div>
      </div>
    </div>
  );
};

export default PastCases;