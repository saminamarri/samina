import React from 'react';
import { FadeIn } from './FadeIn';
import { ContactButton } from './ContactButton';
import { ArrowUp } from 'lucide-react';

export const FooterSection: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0C0C0C] text-[#D7E2EA] pt-20 pb-12 px-6 md:px-10 border-t border-[#D7E2EA]/10 relative z-20">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <span className="text-xs sm:text-sm uppercase tracking-widest text-[#D7E2EA]/60 font-light block mb-2">
              Have a project in mind?
            </span>
            <h3 className="hero-heading font-black text-3xl sm:text-5xl uppercase tracking-tight">
              Let&apos;s Work Together
            </h3>
          </div>

          <ContactButton label="Start a Project" />
        </div>

        {/* Links & Copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 pt-8 border-t border-[#D7E2EA]/10 text-xs sm:text-sm uppercase tracking-wider text-[#D7E2EA]/70">
          <div className="flex items-center gap-6">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              X / Twitter
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://dribbble.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              Dribbble
            </a>
            <a
              href="https://artstation.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              ArtStation
            </a>
          </div>

          <div className="flex items-center gap-4">
            <span>&copy; {new Date().getFullYear()} Jack. All rights reserved.</span>
            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="p-2.5 rounded-full border border-[#D7E2EA]/20 hover:border-[#D7E2EA] text-[#D7E2EA] hover:bg-[#D7E2EA]/10 transition-colors cursor-pointer"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
