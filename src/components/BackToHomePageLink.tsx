import { FaBackward } from "react-icons/fa";
import { Link } from "react-router-dom";

export function BackToHomePageLink() {
  return (
    <div className="flex gap-2 items-center text-blue-600 hover:text-blue-400 dark:text-blue-400 dark:hover:text-blue-300 underline underline-offset-8">
      <Link to="/">
        <span>Back to home page</span>
      </Link>
      <FaBackward />
    </div>
  );
}
