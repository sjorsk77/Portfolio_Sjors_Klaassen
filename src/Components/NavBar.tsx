import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { useTheme } from "./ThemeContext";
import { ThemeToggle } from "./ThemeToggle";
import {pages} from "../Data/Pages";
import {EmailIcon, GitHubIcon, LinkedInIcon, PhoneIcon} from "./Misc/Socials";

export const NavBar: React.FC = () => {
    const { theme, toggleTheme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        // Cleanup on unmount or menu close
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOpen]);


    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav>
            <div className="w-full flex flex-row justify-between items-center h-[var(--navbar-height)] py-5 md:px-6">
                {/* Logo */}
                <div className="flex items-center">
                    <p className="font-bold font-mono">Sjors&nbsp;Klaassen</p>
                </div>

                {/* Desktop Navigation Links */}
                <ul className="hidden md:flex flex-row gap-10">
                    {pages
                        .filter(page => page.isOnNavigation)
                        .map(page => (
                            <li key={page.path}>
                                <Link to={page.path} className="font-extrabold link transition duration-300">{page.name}</Link>
                            </li>
                        ))}
                </ul>

                {/* Desktop ThemeToggle */}
                <div className="hidden md:block">
                    <ThemeToggle/>
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

            {/* Mobile Sliding Menu */}
            <div
                className={`fixed top-0 right-0 h-full bg-gray-100 dark:bg-gray-900 z-50 shadow-lg transition-transform transform ${
                    isOpen ? "translate-x-0" : "translate-x-full"
                } w-3/4 md:hidden`}
            >
                <button
                    className="absolute top-4 right-4 text-4xl text-black dark:text-white"
                    onClick={toggleMenu}
                >
                    &times;
                </button>

                {/* Menu Links */}
                <div className="flex flex-col items-start p-6 space-y-6 mt-12">
                    {pages
                        .filter(page => page.isOnNavigation)
                        .map(page => (
                            <Link
                                key={page.path}
                                to={page.path}
                                className="text-lg text-black dark:text-white hover:text-blue-500 dark:hover:text-blue-300 transition duration-300 font-bold"
                                onClick={() => setIsOpen(false)}
                            >
                                {page.name}
                            </Link>
                        ))}
                </div>

                {/* ThemeToggle in Sliding Menu */}
                <div className="absolute bottom-6 px-5 flex flex-row justify-between w-full">
                    <div className={"flex flex-row w-fit gap-5"}>
                        <PhoneIcon/>
                        <EmailIcon/>
                        <LinkedInIcon/>
                        <GitHubIcon/>
                    </div>
                    <ThemeToggle/>
                </div>
            </div>

            {/* Background Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black opacity-50 z-40"
                    onClick={() => setIsOpen(false)}
                ></div>
            )}
        </nav>
    );
};
