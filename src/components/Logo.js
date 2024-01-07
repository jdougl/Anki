import React from "react";
import logoSvg from "../assets/logo.svg";
import Link from 'next/link';

const Logo = () => {
  return (
    <Link
      href="/"
      className="
     absolute top-[1.5rem] left-[1.5rem] [text-decoration:none]
text-lg text-cyan flex items-center
     "
    >
      <img src={logoSvg} alt="CryptoBucks" />
      <span>AnkiCoin</span>
    </Link>
  );
};

export default Logo;
