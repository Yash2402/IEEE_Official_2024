import {
  FAQ,
  Featured,
  Chapters,
  Join,
  HeroSection,
  Testimonials,
  Events,
} from "@/components";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Featured />
      <Events />
      <Join />
      <Chapters />
      <Testimonials />
      <FAQ />
    </main>
  );
}
