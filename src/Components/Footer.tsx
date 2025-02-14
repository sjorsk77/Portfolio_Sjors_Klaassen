import React from "react";
import {FaEnvelope, FaLinkedin, FaPhone} from "react-icons/fa";
import {EmailIcon, PhoneIcon} from "./Socials";

export const Footer: React.FC = () => {
    return (
        <footer className='mb-5 flex flex-col justify-center items-center gap-3'>
            <div className="flex flex-row gap-5">
                <EmailIcon/>
                <PhoneIcon/>
            </div>
            <p className="text-sm opacity-50">Copyright © {new Date().getFullYear()} - Sjors Klaassen</p>
        </footer>
    );
}