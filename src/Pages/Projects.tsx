import {ProjectsDetails, ProjectsIntroduction} from "../Text/ProjectsText";

import React from "react";
import {ProjectCard} from "../Components/Project/ProjectCard";

export const Projects: React.FC = () => {
    return (
        <div className="w-full">
            <h1 className="text-3xl font-bold mb-8 text-center">My projects</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {ProjectsDetails.map((project) => (
                    <ProjectCard key={project.id} project={project}/>
                ))}
            </div>
        </div>
    )
}