import { useLocation } from "react-router-dom";
import { BackToHomePageButton } from "../components/BackToHomePageButton";
import { NotFound404 } from "../svg/NotFound404.svg";

export function NotFoundPage() {
  const location = useLocation();
  // FIXME: Improve UX
  return (
    <div className="flex flex-col items-center justify-center h-screen text-slate-900 dark:text-slate-50">
      <h1 className="font-bold text-5xl mb-8 text-slate-700 dark:text-slate-200">
        Oops!
      </h1>
      <div className="w-full md:h-1/2 md:w-1/2 mb-14">
        <NotFound404 />
      </div>
      <p className="text-center mb-10 text-xl">
        The URL <span>{`(${location.pathname})`}</span> you tried to visit
        doesn't exist
      </p>

      <BackToHomePageButton />
    </div>
  );
}
