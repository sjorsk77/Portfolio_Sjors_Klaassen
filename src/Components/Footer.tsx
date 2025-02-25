import React from "react";
import {FaEnvelope, FaLinkedin, FaPhone} from "react-icons/fa";
import {EmailIcon, LinkedInIcon, PhoneIcon} from "./Socials";

export const Footer: React.FC = () => {
    return (
        <footer className='mb-5 flex flex-col justify-center items-center gap-3 h-[var(--footer-height)]'>
            <div className="flex flex-row gap-5">
                <EmailIcon/>
                <PhoneIcon/>
                <LinkedInIcon/>
            </div>
            <p className="text-sm opacity-50">Copyright © {new Date().getFullYear()} - Sjors Klaassen</p>
        </footer>
    );
}