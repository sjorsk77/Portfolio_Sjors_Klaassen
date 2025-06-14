import React from "react";
import { Link } from "react-router-dom";

interface Project {
    id: number;
    title: string;
    thumbnail: string;
    description: string;
    shortDescription: string;
}

interface ProjectCardProps {
    project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    return (
        <Link
            to={`/project/${project.id}`}
            className="group rounded-lg overflow-hidden"
        >
            <div
                className="bg-cover bg-center transition-transform h-64 w-96"
                style={{
                    backgroundImage: `url(${project.thumbnail})`,
                }}
            >
                <div className="relative flex w-full flex-col items-center h-full group overflow-hidden">
                    {/* Upper div */}
                    <div
                        className="relative bg-white dark:bg-gray-900 text-center flex flex-col justify-center items-center rounded-b-2xl px-5 py-3 transition-transform duration-300 group-hover:translate-y-[-100%] font-extrabold">
                        {project.title}
                    </div>

                    {/* Bottom div */}
                    <div
                        className="absolute bottom-0 dark:bg-gray-800 bg-gray-200 text-center gap-y-5 flex flex-col justify-center items-center h-full w-full p-5 transition-transform duration-300 translate-y-full group-hover:translate-y-0">
                        {project.shortDescription}
                        <p className="font-bold">Click to read more about this project</p>
                    </div>
                </div>


            </div>

        </Link>
    );
};
