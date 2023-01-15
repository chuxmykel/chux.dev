import { ContactMeForm } from "./ContactMeForm";
import { SocialLinks } from "./SocialLinks";

export function Footer() {
  return (
    <>
      <ContactMeForm />

      <div className="px-4">
        <SocialLinks />
      </div>

      <div className="mt-28 text-right px-4 pb-4">
        <p>
          <span className="text-xl">&copy;</span> Ngwobia, Chukwudi Mike{" "}
          {new Date().getFullYear()}
        </p>
      </div>
    </>
  );
}
