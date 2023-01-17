import { BackToHomePageLink } from "../components/BackToHomePageLink";

export function WIP() {
  return (
    <div className="pt-20 flex flex-col items-center justify-center">
      <h1 className="mb-20 text-5xl font-extrabold text-slate-700 dark:text-slate-200">
        This page is a WIP!
      </h1>
      <BackToHomePageLink />
    </div>
  );
}
