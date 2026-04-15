import { HeroSection } from "@/components/HeroSection";
import { NeuralBackground } from "@/components/NeuralBackground";

export default function LandingPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950">
      <NeuralBackground />
      <HeroSection />
    </main>
  );
}
