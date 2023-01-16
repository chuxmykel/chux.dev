import { FaBackward } from "react-icons/fa";
import { Link } from "react-router-dom";

export function BackToHomePageButton() {
  return (
    <div className="flex gap-2 items-center text-blue-600 dark:text-blue-400 underline underline-offset-8">
      <Link to="/">
        <span>Back to home page</span>
      </Link>
      <FaBackward />
    </div>
  );
}
