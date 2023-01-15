import { ContactMeForm } from "./ContactMeForm";
import { SocialLinks } from "./SocialLinks";

export function Footer() {
  return (
    <>
      <ContactMeForm />
      <SocialLinks />
      <div className="mt-28 max-sm:text-left text-right pb-4">
        <p>
          <span className="text-xl">&copy;</span> Ngwobia, Chukwudi Mike{" "}
          {new Date().getFullYear()}
        </p>
      </div>
    </>
  );
}
