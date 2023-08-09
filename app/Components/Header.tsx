const links = ["Services", "Blog", "Abouts"];

import Link from "next/link";
import { LuGraduationCap } from "react-icons/lu";

const Header = () => {
  return (
    <nav className="bg-gray-800 flex justify-between items-center h-20 p-4">
      <LuGraduationCap className="w-9 h-9 text-white" />
      <p className="text-yellow-50 ml-4 font-semibold text-2xl mr-auto">
        ImanEdu
      </p>
      <ul className="flex gap-6 list-none text-gray-200 font-semibold">
        {links.map((link) => (
          <li key={link}>
            <Link
              href={link.toLowerCase()}
              className="p-2 hover:underline hover:gray-900 active:bg-purple-700 focus:ring focus:ring-green-700 focus:outline-none"
            >
              {link}
            </Link>
          </li>
        ))}{" "}
      </ul>
    </nav>
  );
};

export default Header;
