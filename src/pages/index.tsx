import { SoftwareEngineer as SoftwareEngineerSVG } from "../svg/SoftwareEngineer.svg";
import { IntroductionWithCarousel } from "../components/IntroductionWithCarousel";
import { ContactMeForm } from "../components/ContactMeForm";
import { SocialLinks } from "../components/SocialLinks";

export function Home() {
  return (
    <>
      <div className="h-screen flex items-center">
        <div className="w-full md:flex items-center">
          <div className="py-8 md:py-0 md:w-1/2 md:h-1/2 md:order-2">
            <SoftwareEngineerSVG />
          </div>

          <div className="mb-40 md:mb-0 md:order-1 md:w-[50%]">
            <IntroductionWithCarousel />
          </div>
        </div>
      </div>
      <ContactMeForm />
      <SocialLinks />
    </>
  );
}

console.log(`
  ========================================================================================
  =  ====  =========  ==  ==============  ====  ================  =====================  =
  =  ====  =========  ==  ==============  ====  ================  =====================  =
  =  ====  =========  ==  ==============  ====  ================  =====================  =
  =  ====  ===   ===  ==  ===   ========  ====  ===   ====   ===  =  ===   ===  =   ===  =
  =        ==  =  ==  ==  ==     =======        ==  =  ==  =  ==    ===  =  ==    =  ==  =
  =  ====  ==     ==  ==  ==  =  =======  ====  =====  ==  =====   ====     ==  =======  =
  =  ====  ==  =====  ==  ==  =  =======  ====  ===    ==  =====    ===  =====  ==========
  =  ====  ==  =  ==  ==  ==  =  =======  ====  ==  =  ==  =  ==  =  ==  =  ==  =======  =
  =  ====  ===   ===  ==  ===   ========  ====  ===    ===   ===  =  ===   ===  =======  =
  ========================================================================================
`);

console.log(
  "You can find the code for this website on https://github.com/chuxmykel/chux.dev"
);
