import { SoftwareEngineer as SoftwareEngineerSVG } from "../svg/SoftwareEngineer.svg";
import { IntroductionWithCarousel } from "../components/IntroductionWithCarousel";
import { Footer } from "../components/Footer";

export function Home() {
  return (
    <>
      <div className="h-screen flex items-center">
        <div className="w-full md:flex items-center">
          <div className="px-4 py-8 md:px-2 md:py-0 md:w-1/2 md:h-1/2 md:order-2">
            <SoftwareEngineerSVG />
          </div>

          <div className="px-4 md:px-2 mb-40 md:mb-0 md:order-1 md:w-[50%]">
            <IntroductionWithCarousel />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
