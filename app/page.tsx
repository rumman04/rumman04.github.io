import HeroSection from '@/sections/HeroSection';
import AboutSection from '@/sections/AboutSection';
import EducationSection from '@/sections/EducationSection';
import ExperienceSection from '@/sections/ExperienceSection';
import SkillsSection from '@/sections/SkillsSection';
import ProjectsSection from '@/sections/ProjectsSection';
import ResearchSection from '@/sections/ResearchSection';
import CertificationsSection from '@/sections/CertificationsSection';
import AchievementsSection from '@/sections/AchievementsSection';
import ResumeSection from '@/sections/ResumeSection';
import GallerySection from '@/sections/GallerySection';
import TestimonialsSection from '@/sections/TestimonialsSection';
import ContactSection from '@/sections/ContactSection';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import BackToTopButton from '@/components/BackToTopButton';
import ThemeToggle from '@/components/ThemeToggle';

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-x-hidden text-slate-100">
      <Navbar />
      <div className="fixed right-4 top-24 z-50 flex flex-col gap-3">
        <ThemeToggle />
      </div>
      <div className="relative isolate overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[520px] bg-[radial-gradient(circle_at_top,rgba(96,165,250,0.18),transparent_40%),radial-gradient(circle_at_50%_0%,rgba(168,85,247,0.16),transparent_30%)]" />
        <HeroSection />
      </div>
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <AboutSection />
        <EducationSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <ResearchSection />
        <CertificationsSection />
        <AchievementsSection />
        <ResumeSection />
        <GallerySection />
        <TestimonialsSection />
        <ContactSection />
      </div>
      <Footer />
      <BackToTopButton />
    </main>
  );
}
