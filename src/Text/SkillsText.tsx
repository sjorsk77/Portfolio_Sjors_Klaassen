import {SkillsDetailsProps} from "../Data/Interfaces";
import {FaGithub, FaJava, FaJs, FaNode, FaPython, FaReact} from "react-icons/fa";
import {SkillType, SkillLevel} from "../Data/Enums";
import {SiDotnet, SiMysql, SiMariadb, SiJetbrains, SiSpring, SiTypescript, SiElm} from "react-icons/si";
import {VscVscode} from "react-icons/vsc";
import {PiFileCSharpBold} from "react-icons/pi";

export const skillsIntroduction = "On this page I showcase the skills I have developed throughout my learning path in software development. There are many tools and skills in the software development world, these are the ones I have experience with. I am always eager to learn new skills and work with new tools to improve my knowledge and experience. Below you can find a list of relevant skills I can safely say I do have enough experience with to use in a project. For each skill I will provide a short description of what it is and how I mainly use it.";

export const skillsDetials: SkillsDetailsProps[] = [
    {
        id: 1,
        title: "React",
        description: "React is a JavaScript library for building front-end applications. I mainly use React as the framework for the front-end of my applications.",
        skillType: SkillType.Framework,
        skillLevel: SkillLevel.Advanced,
        icon: FaReact,
        bgColor: "bg-[#61DAFB]"
    },
    {
        id: 2,
        title: "Node",
        description: "Node.js is a platform that allows developers to run JavaScript on the server side. I use node.js to help me enhance my web applications with it's numerous libraries.",
        skillType: SkillType.Framework,
        skillLevel: SkillLevel.Advanced,
        icon: FaNode,
        bgColor: "bg-[#8CC84B]"
    },
    {
        id: 3,
        title: "Java",
        description: "Java is and widely-used object oriented programming language. I use Java for backend development such as API's.",
        skillType: SkillType.Language,
        skillLevel: SkillLevel.Advanced,
        icon: FaJava,
        bgColor: "bg-[#5283a2]"
    },
    {
        id: 4,
        title: "JavaScript",
        description: "JavaScript is a programming language which runs in the browser. Javascript is necessary for front-end development. So I use it in all my front-end projects.",
        skillType: SkillType.Language,
        skillLevel: SkillLevel.Advanced,
        icon: FaJs,
        bgColor: "bg-[#F7DF1E]"
    },
    {
        id: 9,
        title: "MySQL",
        description: "MySQL is a popular open-source relational database management system. It uses SQL as its query language. I use MySQL for my databases in my projects.",
        skillType: SkillType.Database,
        skillLevel: SkillLevel.Familiar,
        icon: SiMysql,
        bgColor: "bg-[#00618A]"
    },
    {
        id: 5,
        title: "GitHub",
        description: "GitHub is a web-based platform for version control using Git. I use GitHub to store my repositories and deploy my projects.",
        skillType: SkillType.Tool,
        skillLevel: SkillLevel.Advanced,
        icon: FaGithub,
        bgColor: "bg-gray-300"
    },
    {
        id: 6,
        title: "SpringBoot",
        description: "Spring Boot is a Java framework to build web applications. I use Spring Boot whenever I create a program using the Java.",
        skillType: SkillType.Framework,
        skillLevel: SkillLevel.Familiar,
        icon: SiSpring,
        bgColor: "bg-[#6DB33F]"
    },
    {
        id: 7,
        title: "ASP.NET",
        description: "ASP.NET is a framework for building web applications using C#. I use ASP.NET whenever I create a program using the C# programming language.",
        skillType: SkillType.Framework,
        skillLevel: SkillLevel.Advanced,
        icon: SiDotnet,
        bgColor: "bg-gradient-to-r from-[#556cf5] to-[#ed63c1]"
    },
    {
        id: 8,
        title: "C#",
        description: "C# is a versatile object oriented programming language developed by Microsoft. C# is my first programming language. I use C# for backend development. ",
        skillType: SkillType.Language,
        skillLevel: SkillLevel.Advanced,
        icon: PiFileCSharpBold,
        bgColor: "bg-[#af4796]"
    },
    {
        id: 10,
        title: "Visual Studio Code",
        description: "Visual Studio Code (VS Code) is a lightweight, open-source code editor developed by Microsoft. I am using VS Code more often instead of other code editors because of it's flexibility.",
        skillType: SkillType.Tool,
        skillLevel: SkillLevel.Familiar,
        icon: VscVscode,
        bgColor: "bg-[#007ACC]"
    },
    {
        id: 11,
        title: "JetBrains",
        description: "JetBrains offers a range of powerful IDEs designed to improve the coding experience. It helps a lot with learning new languages and frameworks. I use JetBrains when I am learning a new language or framework.",
        skillType: SkillType.Tool,
        skillLevel: SkillLevel.Advanced,
        icon: SiJetbrains,
        bgColor: "bg-gradient-to-r from-[#ff8c19] to-[#e600ff]"
    },
    {
        id: 12,
        title: "MariaDB",
        description: "MariaDB is an open-source relational database management system. Just like MySQL it uses SQL as it's query language. I sometimes use MariaDB as an alternative for MySQL.",
        skillType: SkillType.Database,
        skillLevel: SkillLevel.Novice,
        icon: SiMariadb,
        bgColor: "bg-[#ba7257]"
    },
    {
        id: 13,
        title: "ELM",
        description: "ELM is a functional programming language for front-end development. I use ELM to create web applications with a focus on simplicity and maintainability.",
        skillType: SkillType.Language,
        skillLevel: SkillLevel.Familiar,
        icon: SiElm,
        bgColor: "bg-[#60B5CC]"
    },
    {
        id: 14,
        title: "TypeScript",
        description: "TypeScript is a superset of JavaScript that adds optional static typing. I use TypeScript over JavaScript in my projects because it makes my code more consistent.",
        skillType: SkillType.Language,
        skillLevel: SkillLevel.Advanced,
        icon: SiTypescript,
        bgColor: "bg-[#007ACC]"
    },
    {
        id: 15,
        title: "Python",
        description: "Python is a versatile programming language known for its readability and simplicity. I use Python for various tasks, including data analysis, scripting, and web development.",
        skillType: SkillType.Language,
        skillLevel: SkillLevel.Competent,
        icon: FaPython,
        bgColor: "bg-[#306998]"
    },
    ];


