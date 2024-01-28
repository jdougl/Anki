import React from "react";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import Search from "../components/Search";
import Chart from "../components/Chart";
import { CryptoProvider } from "../context/CryptoContext";
import { StorageProvider } from "../context/StorageContext";
import { TrendingProvider } from "../context/TrendingContext";

const HomePage = () => {
  return (
    <CryptoProvider>
      <TrendingProvider>
        <StorageProvider>
          <main
            className="w-full h-full flex flex-col first-letter:
    content-center items-center relative text-white font-nunito
    "
          >
            <div className="w-screen h-screen bg-gray-300 fixed -z-10" />
            <Logo />
            <Search />
            <Navigation />
            <Chart />

          </main>
        </StorageProvider>
      </TrendingProvider>
    </CryptoProvider>
  );
};

export default HomePage;
