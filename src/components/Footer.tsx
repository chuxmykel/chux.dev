import { MdCopyright } from "react-icons/md";

export function Footer() {
  return (
    <>
      <div className="mt-28 max-sm:text-left text-right pb-4">
        <span className="text-slate-300 dark:text-slate-700">
          <MdCopyright className="inline -mt-1" />
          {` ${new Date().getFullYear()} Copyright. Ngwobia, Chukwudi Mike`}
        </span>
      </div>
    </>
  );
}
