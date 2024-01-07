import React from "react";
import Link from 'next/link';

const Navigation = () => {
  return (
    <nav
      className="w-[40%] mt-16 flex justify-around align-middle
    border border-cyan rounded-lg
    "
    >
      <Link
        href="/"
        className={({ isActive }) => {
          return `w-full text-base text-center font-nunito m-2.5

${
  isActive
    ? "bg-cyan text-gray-300"
    : "bg-gray-200 text-gray-100hover:text-cyan active:bg-cyan active:text-gray-300"
}
    border-0 cursor-pointer rounded capitalize font-semibold`;
        }}
      >
        Crypto
      </Link>

      <Link
        href="/trending"
        className={({ isActive }) => {
          return `w-full text-base text-center font-nunito m-2.5

${
  isActive
    ? "bg-cyan text-gray-300"
    : "bg-gray-200 text-gray-100hover:text-cyan active:bg-cyan active:text-gray-300"
}
    border-0 cursor-pointer rounded capitalize font-semibold`;
        }}
      >
        trending
      </Link>

      <Link
        href="/saved"
        className={({ isActive }) => {
          return `w-full text-base text-center font-nunito m-2.5

${
  isActive
    ? "bg-cyan text-gray-300"
    : "bg-gray-200 text-gray-100hover:text-cyan active:bg-cyan active:text-gray-300"
}
    border-0 cursor-pointer rounded capitalize font-semibold`;
        }}
      >
        saved
      </Link>
    </nav>
  );
};

export default Navigation;
