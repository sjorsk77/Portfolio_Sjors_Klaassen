import React from "react";
import { useParams } from "react-router-dom";
import {ProjectsDetails} from "../Text/ProjectsText";
import {ProjectDetails} from "../Components/Project/ProjectDetails";
import {ProjectHeader} from "../Components/Project/ProjectHeader";
import {ProjectDetailList} from "../Components/Project/DetailsList";


export const Project: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const project = ProjectsDetails.find((p: any) => p.id === parseInt(id || "0"));

    if (!project) {
        return (
            <div className="flex items-center justify-center h-screen">
                <h2 className="text-red-500 text-2xl">Project not found!</h2>
            </div>
        );
    }

    return (
        <div
            className=" "
            style={{
                backgroundImage: `url(${project.thumbnail})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="absolute inset-0  bg-opacity-70"></div>
            <div className="relative z-10 p-8 max-w-4xl mx-auto">
                <ProjectHeader title={project.title} description={project.description} />
                <ProjectDetails
                    startDate={project.startDate}
                    endDate={project.endDate}
                    skillIds={project.skillIds}
                />

            </div>
        </div>
    );
};
