import { useLocation } from "react-router-dom";
import { BackToHomePageButton } from "../components/BackToHomePageButton";
import { NotFound404 } from "../svg/NotFound404.svg";

export function NotFoundPage() {
  const location = useLocation();
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="font-bold text-3xl mb-8">Oops!</h1>
      <div className="w-full md:h-1/2 md:w-1/2 mb-14">
        <NotFound404 />
      </div>
      <p className="text-center mb-10">
        The URL <span>{`(${location.pathname})`}</span> you tried to visit
        doesn't exist
      </p>

      <BackToHomePageButton />
    </div>
  );
}
