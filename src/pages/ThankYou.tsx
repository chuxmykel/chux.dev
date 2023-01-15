import { BackToHomePageButton } from "../components/BackToHomePageButton";
import { SocialLinks } from "../components/SocialLinks";

export function ThankYou() {
  return (
    <div className="pt-20 flex flex-col items-center justify-center gap-6">
      <h1 className="font-bold text-2xl text-center">
        Thank you for reaching out.
      </h1>
      <p className="text-center text-xl">I will be in touch.</p>

      <p className="text-center text-lg">
        You can also connect with me using one of the links below{" "}
        <span className="text-3xl">👇🏿</span>
      </p>

      <span className="text-xl">Cheers! 🎉</span>
      <div className="pt-20">
        <SocialLinks />
      </div>

      <BackToHomePageButton />
    </div>
  );
}
