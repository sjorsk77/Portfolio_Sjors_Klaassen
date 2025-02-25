import {ProjectsDetails, ProjectsIntroduction} from "../Text/ProjectsText";

import React from "react";
import {ProjectCard} from "../Components/Projects/ProjectCard";
import {PageContainer} from "./PageContainer";

export const Projects: React.FC = () => {
    return (
        <PageContainer>
            <h1 className="font-bold mb-8 text-center">My projects</h1>
            <div className="flex md:flex-wrap flex-col justify-center gap-8">
                {ProjectsDetails.map((project) => (
                    <ProjectCard key={project.id} project={project}/>
                ))}
            </div>
        </PageContainer>
    )
}