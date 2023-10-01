"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Menu } from "lucide-react";
import { TabLinkProps, Tab } from "@/types";

export const tabs = [
  { id: "home", label: "Home", href: "/" },
  { id: "products", label: "Products", href: "products" },
  {
    id: "universal Chat",
    label: "Universal  ",
    href: "products/universal_chat",
  },
  {
    id: "aiOS pathfinder",
    label: " Pathfinder",
    href: "products/pathfinder",
  },
  { id: "about", label: "About", href: "about" },
  { id: "contact", label: "Contact", href: "contact" },
];
const TabLink = ({ tab, isActive, onClick }: TabLinkProps) => {
  return (
    <Link
      href={`/${tab.href}`}
      onClick={() => onClick(tab.id)}
      className={`${
        isActive ? "" : "hover:text-white/60"
      } relative mt-10 text-2xl  md:text-xl md:mt-0 rounded-full px-3 py-1.5 md:flex  sm:text-lg  font-thin text-white outline-sky-400 transition  focus-visible:outline-2`}
    >
      {isActive && (
        <motion.span
          layoutId="bubble"
          className="absolute inset-0 z-10 bg-white text-white mix-blend-difference"
          style={{ borderRadius: 9999 }}
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
        />
      )}
      {tab.label}
    </Link>
  );
};

const NavBar = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  }, [activeTab, setActiveTab]);

  const handleAfterfleaClick = () => {
    setActiveTab("home");
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full p-4 absolute  ">
      <div className="container  mx-auto flex justify-between p-6 items-center">
        <div className="z-10">
          <Link href="/" onClick={handleAfterfleaClick}>
            <h3 className="text-white text-xl font-normal hover:text-white/80 z-20 transition">
              Afterflea
            </h3>
          </Link>
        </div>

        <div
          className={`menu flex z-50  space-x-1 md:flex ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          {tabs.map((tab) => (
            <TabLink
              key={tab.id}
              tab={tab}
              isActive={activeTab === tab.id}
              onClick={setActiveTab}
            />
          ))}
        </div>
        <div className="md:hidden no z-50">
          <button
            className="text-white p-2"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
