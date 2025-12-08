import React, { useState, useEffect, useRef } from 'react';
import { Send, Mail, Sparkles, CheckCircle, Linkedin, Instagram, Loader2 } from 'lucide-react';

const ContactHero = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    website: '',
    projectType: '',
    timeframe: '',
    message: ''
  });
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const formRef = useRef(null);
  const headerRef = useRef(null);

  // backend API
  const API_BASE_URL = 'https://subintentionally-skint-cayden.ngrok-free.dev';

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubmit = async () => {
    // Validation
    if (!formData.name || !formData.email) {
      setSubmitStatus({ type: 'error', message: 'Please fill in your name and email! 📧' });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus({ type: 'error', message: 'Please enter a valid email address' });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch(`${API_BASE_URL}/api/rcontact/save`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'ngrok-skip-browser-warning': 'true', // Skip ngrok warning page
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company || '',
          website: formData.website || '',
          projectType: formData.projectType || '',
          timeframe: formData.timeframe || '',
          message: formData.message || ''
        })
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: 'Thanks for reaching out! We\'ll get back to you within 24-48 hours 🚀'
        });
        // Reset form
        setFormData({
          name: '',
          email: '',
          company: '',
          website: '',
          projectType: '',
          timeframe: '',
          message: ''
        });

        // Scroll to top to show success message
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        throw new Error(data.message || 'Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Oops! Something went wrong. Please try again or email us directly at 20.rethink.25@gmail.com'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (submitStatus) setSubmitStatus(null);
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* Header Section */}
        <div
          ref={headerRef}
          className="text-center mb-20 transition-all duration-1000 ease-out"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(50px)'
          }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600/20 rounded-full border border-purple-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-purple-300">Let's create magic together</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 bg-linear-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent leading-tight">
            Let's Build Something<br />Together
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-4">
            Tell us about your idea, and we'll come back with a clear plan, timeline, and budget.
          </p>

          <p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto">
            Whether you're starting from a rough idea or a detailed brief, this is the place to start.
            Share a few details about your project and the Rethink team will review it and get back to you within 24–48 hours with next steps.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Contact Form - Takes 2 columns */}
          <div
            ref={formRef}
            className="lg:col-span-2 transition-all duration-1000 ease-out"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
              transitionDelay: '200ms'
            }}
          >
            <div className="bg-linear-to-br from-gray-900 to-black border border-gray-800 rounded-3xl p-8 md:p-10 shadow-2xl hover:border-purple-900/50 transition-all duration-500">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl md:text-4xl font-bold">Start a Project</h2>
                <div className="w-12 h-12 bg-linear-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                  <Send className="w-6 h-6" />
                </div>
              </div>

              <p className="text-gray-400 mb-8">
                Fill out the form and we'll reach out with a short follow-up and a no-pressure discovery call.
              </p>

              {/* Status Messages */}
              {submitStatus && (
                <div className={`mb-6 p-4 rounded-xl border animate-fade-in ${submitStatus.type === 'success'
                    ? 'bg-green-900/20 border-green-500/50 text-green-300'
                    : 'bg-red-900/20 border-red-500/50 text-red-300'
                  }`}>
                  <div className="flex items-center gap-2">
                    {submitStatus.type === 'success' ? (
                      <CheckCircle className="w-5 h-5" />
                    ) : (
                      <span className="text-xl">⚠️</span>
                    )}
                    <span>{submitStatus.message}</span>
                  </div>
                </div>
              )}

              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-300">Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all text-white placeholder-gray-600 disabled:opacity-50"
                      placeholder="John Doe"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-300">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all text-white placeholder-gray-600 disabled:opacity-50"
                      placeholder="john@company.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-300">Company / Brand Name</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all text-white placeholder-gray-600 disabled:opacity-50"
                      placeholder="Your Company"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-300">Website (if you have one)</label>
                    <input
                      type="url"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all text-white placeholder-gray-600 disabled:opacity-50"
                      placeholder="yourwebsite.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-300">Project Type</label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all text-white appearance-none cursor-pointer disabled:opacity-50"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23a855f7' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'right 0.75rem center',
                        backgroundSize: '1.5rem'
                      }}
                    >
                      <option value="" className="bg-gray-900">Select project type</option>
                      <option value="website" className="bg-gray-900">Website</option>
                      <option value="webapp" className="bg-gray-900">Web App</option>
                      <option value="uiux" className="bg-gray-900">UI/UX Design</option>
                      <option value="ai" className="bg-gray-900">AI Integration</option>
                      <option value="other" className="bg-gray-900">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-300">Deadline or Timeframe</label>
                    <input
                      type="text"
                      name="timeframe"
                      value={formData.timeframe}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all text-white placeholder-gray-600 disabled:opacity-50"
                      placeholder="e.g., 3 months, ASAP, Q2 2025"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">Message / Project Details</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    rows="5"
                    className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all text-white placeholder-gray-600 resize-none disabled:opacity-50"
                    placeholder="Tell us about your project, goals, and any specific requirements..."
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full py-4 bg-linear-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/50 flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Project Details
                      <Send className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Side Panel - Takes 1 column */}
          <div
            className="space-y-6 transition-all duration-1000 ease-out"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
              transitionDelay: '400ms'
            }}
          >
            {/* Direct Contact */}
            <div className="bg-linear-to-br from-gray-900 to-black border border-gray-800 rounded-3xl p-6 shadow-2xl hover:border-purple-900/50 transition-all duration-500">
              <h3 className="text-xl font-bold mb-4">Prefer to reach out directly?</h3>

              <div className="space-y-4">
                <a
                  href="mailto:20.rethink.25@gmail.com"
                  className="flex items-start gap-3 p-3 bg-black/30 rounded-xl hover:bg-black/50 transition-all group cursor-pointer"
                >
                  <Mail className="w-5 h-5 text-purple-400 mt-0.5 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="text-white">20.rethink.25@gmail.com</p>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/company/rethink-digitalsolution/posts/?feedView=all"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 p-3 bg-black/30 rounded-xl hover:bg-black/50 transition-all group"
                >
                  <Linkedin className="w-5 h-5 text-blue-400 mt-0.5 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="text-sm text-gray-400">LinkedIn</p>
                    <p className="text-white">Rethink Digital Solution</p>
                  </div>
                </a>

                <a
                  href="https://www.instagram.com/re_think.2025?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 p-3 bg-black/30 rounded-xl hover:bg-black/50 transition-all group"
                >
                  <Instagram className="w-5 h-5 text-pink-400 mt-0.5 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="text-sm text-gray-400">Instagram</p>
                    <p className="text-white">@re_think.2025</p>
                  </div>
                </a>
              </div>
            </div>

            {/* What to Expect */}
            <div className="bg-linear-to-br from-purple-900/20 to-pink-900/20 border border-purple-800/30 rounded-3xl p-6 shadow-2xl">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-purple-400" />
                What you can expect:
              </h3>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 shrink-0" />
                  <p className="text-sm text-gray-300">A reply within 24–48 hours</p>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 shrink-0" />
                  <p className="text-sm text-gray-300">Honest feedback on what's realistic</p>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 shrink-0" />
                  <p className="text-sm text-gray-300">Clear next steps, no spam, no endless sales pitches</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default ContactHero;