import { ContactMeForm } from "./ContactMeForm";
import { SocialLinks } from "./SocialLinks";

export function Footer() {
  return (
    <>
      <ContactMeForm />

      <div className="max-sm:px-0 px-4">
        <SocialLinks />
      </div>

      <div className="mt-28 max-sm:text-left text-right max-sm:px-0 px-4 pb-4">
        <p>
          <span className="text-xl">&copy;</span> Ngwobia, Chukwudi Mike{" "}
          {new Date().getFullYear()}
        </p>
      </div>
    </>
  );
}
