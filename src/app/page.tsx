import MainLayout from "@/components/layout/MainLayout";
import HeroSection from "@/components/ui/HeroSection";
import FeaturedSection from "@/components/ui/FeaturedSection";
import CommunitySection from "@/components/ui/CommunitySection";

export default function HomePage() {
  return (
    <MainLayout>
      <HeroSection />
      <FeaturedSection />
      <CommunitySection />
    </MainLayout>
  );
}
