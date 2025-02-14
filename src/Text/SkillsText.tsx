import {SkillsDetailsProps} from "../Data/Interfaces";
import {FaCode, FaGithub, FaJava, FaJs, FaLeaf, FaNode, FaReact} from "react-icons/fa";
import {SkillType} from "../Data/Enums";
import {SiDotnet, SiC, SiMysql, SiMariadb, SiJetbrains, SiSpring} from "react-icons/si";
import {AiOutlineCode} from "react-icons/ai";
import {VscVscode} from "react-icons/vsc";
import {TbBrandCSharp} from "react-icons/tb";

export const skillsIntroduction = "This page highlights the skills developed over the years in the tech industry, with experience in both frontend and backend development. Proficiency spans various programming languages, frameworks, and libraries, alongside solid knowledge of databases and CI/CD tools. There’s hands-on experience in developing web applications, mobile apps, and APIs, as well as working collaboratively in teams or independently on individual projects. Additionally, expertise includes applying different methodologies to effectively tackle diverse challenges in development.";

export const skillsDetials: SkillsDetailsProps[] = [
    {
        id: 1,
        title: "React",
        description: "React is a JavaScript library for building user interfaces. It allows developers to create reusable components that efficiently update when data changes. I use React to build the frontends for my web applications.",
        skillType: SkillType.Framework,
        icon: FaReact,
        bgColor: "bg-[#61DAFB]"
    },
    {
        id: 2,
        title: "Node",
        description: "Node.js is a platform that allows developers to run JavaScript on the server side. It's great for building fast and scalable applications, like websites and APIs. I use node.js to help me enhance my web applications with it's numerous libraries.",
        skillType: SkillType.Framework,
        icon: FaNode,
        bgColor: "bg-[#8CC84B]"
    },
    {
        id: 3,
        title: "Java",
        description: "Java is a versatile and widely-used programming language known for its portability, stability, and scalability. It's commonly used for building large-scale enterprise applications, web services, and mobile applications. Java follows the principle of \"Write Once, Run Anywhere,\" allowing developers to create cross-platform applications. Java's strong security features and extensive community support contribute to its ongoing success in the tech industry.",
        skillType: SkillType.Language,
        icon: FaJava,
        bgColor: "bg-[#5283a2]"
    },
    {
        id: 4,
        title: "JavaScript",
        description: "JavaScript is a programming language used to create interactive web applications, running in the browser and essential for front-end development. TypeScript is a superset of JavaScript that adds static typing, improving code quality and maintainability. It compiles to JavaScript, making it suitable for both small and large projects. I primarily use TypeScript for front-end development, as it helps me catch errors early and write more robust code.",
        skillType: SkillType.Language,
        icon: FaJs,
        bgColor: "bg-[#F7DF1E]"
    },
    {
        id: 9,
        title: "MySQL",
        description: "MySQL is a popular open-source relational database management system. It uses Structured Query Language (SQL) to store, manage, and query data in tables. Known for its speed, reliability, and ease of use, MySQL is commonly used in web applications and backend systems. It supports a variety of data types and offers powerful features for data storage and retrieval.",
        skillType: SkillType.Database,
        icon: SiMysql,
        bgColor: "bg-[#00618A]"
    },
    {
        id: 5,
        title: "GitHub",
        description: "GitHub is a web-based platform for version control and collaboration, allowing developers to store, manage, and track changes to their code. It uses Git, a version control system, to help developers work on projects individually or in teams, managing different versions of code seamlessly. GitHub makes it easy to share code, collaborate on open-source projects, and review changes through pull requests. It also offers additional features like issue tracking, project management, and CI/CD integrations to streamline development workflows.",
        skillType: SkillType.Tool,
        icon: FaGithub,
        bgColor: "bg-gray-300"
    },
    {
        id: 6,
        title: "SpringBoot",
        description: "Spring Boot is a framework that helps developers create Java applications quickly and easily. It simplifies the setup process by providing default configurations and tools. With SpringBoot, developers can build everything from simple web apps to complex, enterprise-level systems. I use SpringBoot whenever I create a backend using the Java programming language.",
        skillType: SkillType.Framework,
        icon: SiSpring,
        bgColor: "bg-[#6DB33F]"
    },
    {
        id: 7,
        title: "ASP.NET",
        description: "ASP.NET is a framework for building web applications and APIs using the .NET platform. It allows developers to create dynamic websites and services with ease. It supports multiple programming languages, primarily C#, and can be used to build both small and large-scale applications. I use ASP.NET whenever I create a program using the C# programming language.",
        skillType: SkillType.Framework,
        icon: SiDotnet,
        bgColor: "bg-gradient-to-r from-[#556cf5] to-[#ed63c1]"
    },
    {
        id: 8,
        title: "C#",
        description: "C# is a versatile programming language developed by Microsoft, commonly used for building Windows applications, web services, and games. It's part of the .NET framework and is known for its strong typing, object-oriented design, and ease of use. C# is popular in enterprise-level applications and cross-platform development with .NET Core.",
        skillType: SkillType.Language,
        icon: TbBrandCSharp,
        bgColor: "bg-[#af4796]"
    },
    {
        id: 10,
        title: "Visual Studio Code",
        description: "Visual Studio Code (VS Code) is a lightweight, open-source code editor developed by Microsoft. It supports a wide range of programming languages and comes with features like syntax highlighting, debugging tools, and IntelliSense (code completion). VS Code also allows for extensive customization through extensions, making it versatile for various development tasks. It's known for its speed, user-friendly interface, and integrated Git support, which makes it a popular choice for developers. Whether you're working on web, backend, or mobile development, VS Code provides a flexible environment to write and debug code efficiently.",
        skillType: SkillType.Tool,
        icon: VscVscode,
        bgColor: "bg-[#007ACC]"
    },
    {
        id: 11,
        title: "JetBrains",
        description: "JetBrains offers a range of powerful IDEs designed to improve the coding experience. Tools like IntelliJ IDEA, Rider, and WebStorm support different programming languages with features like code completion and debugging. These IDEs help developers write, test, and manage their code more efficiently. JetBrains is popular for its user-friendly interface and strong language-specific support, making it a top choice for many developers. I mainly use the JetBrains IDE's for my projects.",
        skillType: SkillType.Tool,
        icon: SiJetbrains,
        bgColor: "bg-gradient-to-r from-[#ff8c19] to-[#e600ff]"
    },
    {
        id: 12,
        title: "MariaDB",
        description: "MariaDB is an open-source relational database management system, created as a fork of MySQL. It offers similar features to MySQL, such as using SQL for data management, but is known for improved performance and additional features. MariaDB is highly compatible with MySQL, making it easy to switch between the two. It supports a wide range of storage engines and is often preferred for its speed and reliability.",
        skillType: SkillType.Database,
        icon: SiMariadb,
        bgColor: "bg-[#ba7257]"
    }
    ];


