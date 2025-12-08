import { Mail, Linkedin, Instagram, ArrowUpRight, Sparkles, Github } from "lucide-react";
import { Link } from "react-router-dom";

export default function FooterPreview() {
  const year = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-black flex items-end">
      <footer className="w-full bg-black text-white border-t border-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          
          {/* Top Section - Brand + CTA */}
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start justify-between pb-16 border-b border-gray-900">
            
            {/* Brand Section */}
            <div className="flex-1 max-w-xl">
              <Link to="/" className="flex items-center gap-4 mb-8">
                <div className="h-20 w-20 rounded-3xl bg-linear-to-br from-purple-500 via-pink-500 to-purple-600 p-0.5">
                  <div className="h-full w-full bg-black rounded-3xl flex items-center justify-center text-3xl">
                    🧠
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-black bg-linear-to-r from-purple-400 via-pink-400 to-purple-500 bg-clip-text text-transparent">
                    Rethink
                  </h3>
                  <p className="text-sm text-gray-500 font-medium">Digital Solutions</p>
                </div>
              </Link>

              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                We build fast, modern, AI-powered web experiences that people actually want to use. No fluff, just results.
              </p>

              {/* Service Tags */}
              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-linear-to-r from-purple-500/10 to-purple-600/10 border border-purple-500/20 rounded-2xl text-sm font-medium backdrop-blur-sm">
                  <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse"></span>
                  Web Dev
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-linear-to-r from-pink-500/10 to-pink-600/10 border border-pink-500/20 rounded-2xl text-sm font-medium backdrop-blur-sm">
                  <span className="w-2 h-2 rounded-full bg-pink-400 animate-pulse"></span>
                  UI/UX
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-linear-to-r from-green-500/10 to-green-600/10 border border-green-500/20 rounded-2xl text-sm font-medium backdrop-blur-sm">
                  <span className="w-2 h-2 rounded-full bg-green-800 animate-pulse"></span>
                  FrontEnd 
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-linear-to-r from-yellow-500/10 to-yellow-600/10 border border-yellow-500/20 rounded-2xl text-sm font-medium backdrop-blur-sm">
                  <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse"></span>
                  BackEnd
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-linear-to-r from-blue-500/10 to-blue-600/10 border border-blue-500/20 rounded-2xl text-sm font-medium backdrop-blur-sm">
                  <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                  AI Integration
                </span>
              </div>
            </div>

            {/* CTA Section */}
            <div className="relative bg-linear-to-br from-purple-500/10 via-pink-500/10 to-purple-600/10 border border-purple-500/20 rounded-3xl p-8 sm:p-10 max-w-lg backdrop-blur-sm overflow-hidden group">
              {/* Animated gradient background */}
              <div className="absolute inset-0 bg-linear-to-br from-purple-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 rounded-full border border-purple-400/30 mb-6">
                  <Sparkles className="w-4 h-4 text-purple-400" />
                  <span className="text-sm text-purple-300 font-medium">Let's collaborate</span>
                </div>
                <h4 className="text-3xl sm:text-4xl font-black mb-4 bg-linear-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Ready to build?
                </h4>
                <p className="text-gray-400 text-base mb-8 leading-relaxed">
                  Free consultation, no pressure. Let's discuss your project and see if we're a good fit.
                </p>
                
                <Link to="/Contact" className="hand inline-flex items-center gap-2 px-8 py-4 bg-linear-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 rounded-2xl font-bold text-base transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50 group/btn w-full sm:w-auto justify-center">
                  Start Your Project
                  <ArrowUpRight className="w-5 h-5 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                </Link>
              </div>
            </div>
          </div>

          {/* Middle Section - Links Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 py-16 border-b border-gray-900">
            
            {/* Navigation */}
            <div>
              <h4 className="text-xs font-bold mb-6 text-purple-400 uppercase tracking-[0.2em]">
                Navigate
              </h4>
              <ul className="space-y-4 text-base">
                <li>
                  <Link to="/" className="hand text-gray-400 hover:text-white transition-colors inline-flex items-center gap-2 group">
                    <span>Home</span>
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="hand text-gray-400 hover:text-white transition-colors inline-flex items-center gap-2 group">
                    <span>Services</span>
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </Link>
                </li>
                <li>
                  <Link to="/portfolio" className="hand text-gray-400 hover:text-white transition-colors inline-flex items-center gap-2 group">
                    <span>Portfolio</span>
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hand text-gray-400 hover:text-white transition-colors inline-flex items-center gap-2 group">
                    <span>About</span>
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hand text-gray-400 hover:text-white transition-colors inline-flex items-center gap-2 group">
                    <span>Contact</span>
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-xs font-bold mb-6 text-pink-400 uppercase tracking-[0.2em]">
                Services
              </h4>
              <ul className="space-y-4 text-base">
                <li>
                  <Link to="/Services/web-development" className="hand text-gray-400 hover:text-white transition-colors">
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link to="/Services/ui-ux-design" className="hand text-gray-400 hover:text-white transition-colors">
                    UI/UX Design
                  </Link>
                </li>
                <li>
                  <Link to="/services/frontend-development" className="hand text-gray-400 hover:text-white transition-colors">
                    Frontend Dev
                  </Link>
                </li>
                <li>
                  <Link to="/services/backend-development" className="hand text-gray-400 hover:text-white transition-colors">
                    Backend Dev
                  </Link>
                </li>
                <li>
                  <Link to="/services/ai-integration" className="hand text-gray-400 hover:text-white transition-colors">
                    AI Integration
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-xs font-bold mb-6 text-blue-400 uppercase tracking-[0.2em]">
                Connect
              </h4>
              <ul className="space-y-4 text-base">
                <li>
                  <a
                    href="mailto:20.rethink.25@gmail.com"
                    className="hand text-gray-400 hover:text-white transition-colors flex items-center gap-3 group"
                  >
                    <div className="w-8 h-8 rounded-xl bg-gray-900 flex items-center justify-center group-hover:bg-gray-800 transition-colors">
                      <Mail className="w-4 h-4" />
                    </div>
                    <span>Email</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/rethink-digitalsolution/posts/?feedView=all"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hand text-gray-400 hover:text-white transition-colors flex items-center gap-3 group"
                  >
                    <div className="w-8 h-8 rounded-xl bg-gray-900 flex items-center justify-center group-hover:bg-gray-800 transition-colors">
                      <Linkedin className="w-4 h-4" />
                    </div>
                    <span>LinkedIn</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/re_think.2025"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hand text-gray-400 hover:text-white transition-colors flex items-center gap-3 group"
                  >
                    <div className="w-8 h-8 rounded-xl bg-gray-900 flex items-center justify-center group-hover:bg-gray-800 transition-colors">
                      <Instagram className="w-4 h-4" />
                    </div>
                    <span>Instagram</span>
                  </a>
                </li>
              </ul>
              <div className="mt-6 px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-2xl">
                <p className="text-xs text-gray-500 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                  Response: 24-48hrs
                </p>
              </div>
            </div>

            {/* Social */}
            <div>
              <h4 className="text-xs font-bold mb-6 text-green-400 uppercase tracking-[0.2em]">
                Follow Us
              </h4>
              <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                Updates, projects, and insights. No spam, just the good stuff.
              </p>
              <div className="flex flex-col gap-3">
                <a
                  href="https://www.linkedin.com/company/rethink-digitalsolution/posts/?feedView=all"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hand inline-flex items-center justify-center gap-2 px-5 py-3 bg-linear-to-r from-blue-500/10 to-blue-600/10 border border-blue-500/20 hover:border-blue-500/40 rounded-2xl text-sm transition-all backdrop-blur-sm group"
                >
                  <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  LinkedIn
                </a>
                <a
                  href="https://www.instagram.com/re_think.2025"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hand inline-flex items-center justify-center gap-2 px-5 py-3 bg-linear-to-r from-pink-500/10 to-pink-600/10 border border-pink-500/20 hover:border-pink-500/40 rounded-2xl text-sm transition-all backdrop-blur-sm group"
                >
                  <Instagram className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  Instagram
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col sm:flex-row justify-center  items-center gap-6 pt-2 text-sm text-gray-500">
            <p className="flex items-center gap-2">
              © {year} Rethink Digital Solutions.
              <span className="text-purple-400">All vibes reserved 💜</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}