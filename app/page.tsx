import CompanyStatistics from "@/components/landing/CompanyStatistics/CompanyStatistics";
import InsightSection from "@/components/landing/Insight/InsightSection";
import ValueSection from "@/components/landing/ValueSection";

export default function Home() {
  //sample
  return (
    <main className="landing-page-wrapper ">
      <ValueSection />
      <CompanyStatistics />
      <InsightSection />
    </main>
  );
}
