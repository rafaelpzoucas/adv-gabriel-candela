import { AboutPage } from "./about";
import { BenefitsSection } from "./benefits";
import { BookSection } from "./book";
import { CourseSection } from "./course";
import { CourseModulesSection } from "./course-modules";
import { CTASection } from "./cta";
import { FAQSection } from "./faq";
import { HeroSection } from "./hero";
import { SecuritySection } from "./security";
import { SocialProofSection } from "./social-proof";

export default function CriminalRealPage() {
  return (
    <div>
      <HeroSection />
      <BenefitsSection />
      <AboutPage />
      <BookSection />
      <SocialProofSection />
      <CourseSection />
      <CourseModulesSection />
      <SecuritySection />
      <FAQSection />
      <CTASection />

      <footer className="flex items-center justify-center p-6 text-center">
        <p>© 2025 Prática Penal Estratégica. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
