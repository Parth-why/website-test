import { motion } from 'framer-motion';
import { Users, Award, BookOpen, Globe } from 'lucide-react';

const team = [
  {
    name: "Jonathan Sterling",
    title: "Founding Partner",
    image: "/images/lawyer1.jpg",
    bio: "A Harvard Law graduate with over 35 years experience in complex litigation and corporate law.",
    specialties: ["Corporate", "M&A", "Securities"]
  },
  {
    name: "Victoria Lang",
    title: "Managing Partner",
    image: "/images/lawyer2.jpg",
    bio: "Former federal prosecutor specializing in white-collar crime and regulatory matters.",
    specialties: ["Criminal Defense", "Compliance", "Litigation"]
  },
  {
    name: "Marcus Chen",
    title: "Senior Partner",
    image: "/images/lawyer3.jpg",
    bio: "Recognized expert in intellectual property and technology law with 28 years at the bar.",
    specialties: ["IP", "Patents", "Tech Law"]
  }
];

const values = [
  { icon: Users, title: "Client First", desc: "Every decision is made with your best interests at heart." },
  { icon: Award, title: "Excellence", desc: "Uncompromising standards in every case we handle." },
  { icon: BookOpen, title: "Integrity", desc: "Ethical practice and transparency in all our dealings." },
  { icon: Globe, title: "Innovation", desc: "Leveraging technology and modern strategies for superior results." },
];

const About = () => {
  return (
    <div className="pt-20">
      {/* Hero Banner */}
      <div className="relative h-[60vh] flex items-center bg-black">
        <div className="absolute inset-0 bg-[url('/images/courthouse.jpg')] bg-cover bg-center opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/80 to-black" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="text-blue-400 text-sm tracking-[4px]">SINCE 1978</div>
          <h1 className="font-serif text-white text-[68px] leading-none tracking-tighter mt-4">A Tradition of Excellence</h1>
        </div>
      </div>

      {/* Our Story */}
      <div className="max-w-4xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-5 gap-16">
          <div className="md:col-span-3">
            <div className="uppercase tracking-widest text-blue-600 text-sm mb-4">OUR STORY</div>
            <h2 className="font-serif text-6xl tracking-tight leading-none">Built on a foundation of trust and results.</h2>
          </div>
          <div className="md:col-span-2 text-lg text-gray-600 dark:text-gray-400 space-y-6 pt-2">
            <p>Founded in 1978 by Jonathan Sterling, our firm began as a small practice focused on high-profile corporate matters. Today, we stand as one of New York’s most respected law firms.</p>
            <p>With a team of 42 attorneys, we continue to uphold the highest standards in legal advocacy, serving Fortune 500 companies, leading institutions, and individuals facing the most challenging circumstances.</p>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="bg-gray-950 py-24 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-blue-400 text-sm tracking-[4px]">WHAT WE BELIEVE</div>
            <h3 className="font-serif text-6xl tracking-tight mt-3">Our Core Values</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div 
                key={index} 
                className="bg-gray-900 p-10 rounded-3xl group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <value.icon className="mb-8 text-blue-400 group-hover:scale-110 transition" size={48} />
                <h4 className="font-serif text-4xl tracking-tight mb-5">{value.title}</h4>
                <p className="text-gray-400 text-lg leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Team */}
      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <div className="text-blue-600 dark:text-blue-400 text-sm tracking-[4px]">MEET THE TEAM</div>
          <h3 className="font-serif text-6xl tracking-tight mt-4">Distinguished Legal Minds</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div 
              key={index} 
              className="group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="overflow-hidden rounded-3xl mb-8">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full aspect-[4/3] object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-500" 
                />
              </div>
              <div className="px-2">
                <h4 className="font-serif text-4xl tracking-tight">{member.name}</h4>
                <div className="text-blue-600 dark:text-blue-400 mt-1">{member.title}</div>
                <p className="mt-6 text-gray-600 dark:text-gray-400 leading-relaxed">{member.bio}</p>
                
                <div className="flex flex-wrap gap-2 mt-6">
                  {member.specialties.map((spec, i) => (
                    <span key={i} className="text-xs px-4 py-1.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300">{spec}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Credentials */}
      <div className="border-t border-gray-200 dark:border-gray-800 py-20 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="text-sm text-blue-600 dark:text-blue-400 tracking-[4px]">RECOGNITION</div>
          <div className="mt-8 text-4xl font-light tracking-tight max-w-md mx-auto">Consistently ranked among the Top 50 law firms in the United States.</div>
          
          <div className="mt-16 flex flex-wrap justify-center gap-x-16 gap-y-10 opacity-70">
            {["Chambers", "Best Lawyers", "Super Lawyers", "Legal 500", "Benchmark", "Martindale-Hubbell"].map((award, i) => (
              <div key={i} className="font-serif text-2xl tracking-widest">{award}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;