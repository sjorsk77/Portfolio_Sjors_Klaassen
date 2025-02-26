import {FaEnvelope, FaGithub, FaLinkedin, FaPhone} from "react-icons/fa";
import React from "react";

export const EmailIcon = () => {
    return (
        <a href="mailto:sjors.klaassen@gmail.com" target="_blank" rel="noopener noreferrer"
           className="flex items-center gap-2 hover:wiggle">
            <FaEnvelope size={24}/>
        </a>
    )
}

export const PhoneIcon = () => {
    return (
        <a href="tel:+31650262327" target="_blank" rel="noopener noreferrer"
           className="flex items-center gap-2 hover:wiggle ">
            <FaPhone size={24}/>
        </a>
    )
}

export const LinkedInIcon = () => {
    return (
        <a href="https://www.linkedin.com/in/sjors-klaassen/" target="_blank" rel="noopener noreferrer"
           className="flex items-center gap-2 hover:wiggle">
            <FaLinkedin size={24} color={"#0077B5"}/>
        </a>
    )
}

export const GitHubIcon = () => {
    return (
        <a href="https://github.com/sjorsk77" target="_blank" rel="noopener noreferrer"
           className="flex items-center gap-2 hover:wiggle">
            <FaGithub size={24}/>
        </a>
    )
}