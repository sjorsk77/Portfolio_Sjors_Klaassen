import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "./ThemeContext";
import { ThemeToggle } from "./ThemeToggle";

export const NavBar: React.FC = () => {
    const { theme, toggleTheme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav>
            <div className="w-full flex flex-row justify-between items-center py-5 px-6">
                {/* Logo */}
                <div className="flex items-center">
                    <p className="font-bold font-mono">Thijs&nbsp;Vos</p>
                </div>

                {/* Desktop Navigation Links */}
                <ul className="hidden md:flex flex-row gap-10">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">Over mij</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>

                {/* Desktop ThemeToggle */}
                <div className="hidden md:block">
                    <ThemeToggle />
                </div>

                {/* Burger Menu Button (for screens smaller than `md`) */}
                <button
                    className="md:hidden p-2 text-xl"
                    onClick={toggleMenu}
                >
                    <span className="block w-6 h-1 bg-black dark:bg-white mb-1"></span>
                    <span className="block w-6 h-1 bg-black dark:bg-white mb-1"></span>
                    <span className="block w-6 h-1 bg-black dark:bg-white"></span>
                </button>
            </div>

            {/* Mobile Dropdown Button Overlay (positioned on the top-right) */}
            <div
                className={`${
                    isOpen ? "block" : "hidden"
                } fixed w-full top-16 justify-end z-50 flex flex-col gap-4 items-end bg-none p-6 rounded-md transition-all duration-300 ease-in-out`}
            >
                <Link
                    to="/"
                    className="px-6 py-3 bg-gray-200 dark:bg-gray-700 rounded-full text-xl text-black dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 transition-all"
                    onClick={() => setIsOpen(false)}
                >
                    Home
                </Link>
                <Link
                    to="/about"
                    className="px-6 py-3 bg-gray-200 dark:bg-gray-700 rounded-full text-xl text-black dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 transition-all"
                    onClick={() => setIsOpen(false)}
                >
                    About
                </Link>
                <Link
                    to="/projects"
                    className="px-6 py-3 bg-gray-200 dark:bg-gray-700 rounded-full text-xl text-black dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 transition-all"
                    onClick={() => setIsOpen(false)}
                >
                    Projects
                </Link>
                <Link
                    to="/contact"
                    className="px-6 py-3 bg-gray-200 dark:bg-gray-700 rounded-full text-xl text-black dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 transition-all"
                    onClick={() => setIsOpen(false)}
                >
                    Contact
                </Link>

                {/* ThemeToggle inside the dropdown for mobile */}
                <div className="px-6 py-3 bg-gray-200 dark:bg-gray-700 rounded-full text-xl text-black dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 transition-all">
                    <ThemeToggle />
                </div>
            </div>
        </nav>
    );
};
