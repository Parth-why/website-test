import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { supabase } from '../supabaseClient'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  const { error } = await supabase
    .from('contacts')
    .insert([
      {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        service: formData.service,
        message: formData.message
      }
    ]);

  setIsSubmitting(false);

  if (error) {
    console.log('Error:', error);
    alert('Something went wrong ❌');
  } else {
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    }, 3000);
  }
};

  return (
    <div className="pt-20">
      <div className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16">
        {/* Contact Info */}
        <div>
          <div className="sticky top-24">
            <div className="uppercase tracking-[4px] text-blue-600 dark:text-blue-400 text-sm">GET IN TOUCH</div>
            <h1 className="font-serif text-7xl tracking-tighter mt-4 mb-8">Let's Discuss Your Case.</h1>
            
            <div className="space-y-8 mt-12 text-lg">
              <div className="flex gap-5">
                <div className="mt-1"><MapPin className="text-blue-600" /></div>
                <div>
                  <div className="font-medium">New York Office</div>
                  <div className="text-gray-600 dark:text-gray-400 mt-1">1200 Lexington Avenue, 28th Floor<br />New York, NY 10022</div>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="mt-1"><Phone className="text-blue-600" /></div>
                <div>
                  <div className="font-medium">Main Line</div>
                  <a href="tel:+12125550199" className="text-gray-600 dark:text-gray-400 hover:underline">(212) 555-0199</a>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="mt-1"><Mail className="text-blue-600" /></div>
                <div>
                  <div className="font-medium">Email</div>
                  <a href="mailto:info@sterlinglaw.com" className="text-gray-600 dark:text-gray-400 hover:underline">info@sterlinglaw.com</a>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="mt-1"><Clock className="text-blue-600" /></div>
                <div>
                  <div className="font-medium">Office Hours</div>
                  <div className="text-gray-600 dark:text-gray-400 mt-1">Monday – Friday: 8:30am – 6:00pm<br />Saturday: By Appointment</div>
                </div>
              </div>
            </div>

            <div className="mt-16 border-l-4 border-blue-600 pl-8 text-sm text-gray-500 dark:text-gray-400">
              All inquiries are strictly confidential. We respond to new matters within 2 business hours.
            </div>
          </div>
        </div>

        {/* Form */}
        <div>
          <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-3xl p-12">
            <div className="text-sm uppercase tracking-widest text-blue-600 mb-2">CONFIDENTIAL CONSULTATION REQUEST</div>
            <h2 className="font-serif text-4xl tracking-tight mb-10">Tell us about your matter</h2>

            <AnimatePresence>
              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="py-16 text-center"
                >
                  <div className="mx-auto w-24 h-24 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-8">
                    <div className="text-6xl">✓</div>
                  </div>
                  <h3 className="text-3xl font-medium">Thank You</h3>
                  <p className="mt-4 text-gray-500">A senior partner will contact you within 2 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-7">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm mb-2 text-gray-600 dark:text-gray-400">Your Name</label>
                      <input 
                        type="text" 
                        name="name" 
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-5 py-4 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl focus:outline-none focus:border-blue-500" 
                        placeholder="Alex Rivera" 
                        required 
                      />
                    </div>
                    <div>
                      <label className="block text-sm mb-2 text-gray-600 dark:text-gray-400">Phone Number</label>
                      <input 
                        type="tel" 
                        name="phone" 
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-5 py-4 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl focus:outline-none focus:border-blue-500" 
                        placeholder="(917) 555-0123" 
                        required 
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm mb-2 text-gray-600 dark:text-gray-400">Email Address</label>
                    <input 
                      type="email" 
                      name="email" 
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-5 py-4 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl focus:outline-none focus:border-blue-500" 
                      placeholder="alex@domain.com" 
                      required 
                    />
                  </div>

                  <div>
                    <label className="block text-sm mb-2 text-gray-600 dark:text-gray-400">Service Needed</label>
                    <select 
                      name="service" 
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-5 py-4 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl focus:outline-none focus:border-blue-500 text-gray-900 dark:text-white"
                      required
                    >
                      <option value="">Select a practice area</option>
                      <option value="Corporate Law">Corporate Law</option>
                      <option value="Criminal Defense">Criminal Defense</option>
                      <option value="Family Law">Family Law</option>
                      <option value="Real Estate">Real Estate Law</option>
                      <option value="Intellectual Property">Intellectual Property</option>
                      <option value="Immigration">Immigration Law</option>
                      <option value="Other">Other / General Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm mb-2 text-gray-600 dark:text-gray-400">How can we help you?</label>
                    <textarea 
                      name="message" 
                      value={formData.message}
                      onChange={handleChange}
                      rows={6} 
                      className="w-full px-5 py-4 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-3xl focus:outline-none focus:border-blue-500 resize-y" 
                      placeholder="Please briefly describe your legal matter..." 
                      required
                    />
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full py-5 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white text-lg font-medium rounded-2xl flex items-center justify-center gap-3 transition-all mt-4"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        SENDING REQUEST...
                      </>
                    ) : (
                      'SUBMIT CONFIDENTIAL REQUEST'
                    )}
                  </button>
                  
                  <p className="text-center text-xs text-gray-500">Your information is kept strictly private and secure.</p>
                </form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Map Placeholder */}
      <div className="max-w-7xl mx-auto px-6 pb-24">
        <div className="bg-gray-900 rounded-3xl overflow-hidden h-96 relative">
          <img src="/images/courthouse.jpg" alt="Office Location" className="absolute inset-0 w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <div className="font-serif text-5xl tracking-tight mb-2">1200 Lexington Avenue</div>
              <div className="text-xl text-white/70">New York, NY 10022</div>
              <div className="mt-8 text-sm bg-white/10 px-4 py-2 rounded inline-block">Visit by Appointment Only</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;