import React from "react";
import { useParams } from "react-router-dom";
import {ProjectsDetails} from "../Text/ProjectsText";
import {PageContainer} from "./PageContainer";
import {skillsDetials} from "../Text/SkillsText";


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
        <PageContainer>
            <div className={"flex flex-row items-center my-10"}>
                <div className="flex flex-col items-start gap-y-3">
                    <h1 className={`font-bold`}>{project.title}</h1>
                    <p>{project.startDate} - {project.endDate}</p>
                    <div className={`flex flex-row items-center gap-4`}>
                        {project.skillIds.map(skillId => {
                            const skill = skillsDetials.find(s => s.id === skillId);
                            return skill ? (
                                <div key={skillId} className={`w-full flex text-gray-900 flex-row text-lg font-extrabold ${skill.bgColor} px-2 py-1 rounded-full gap-x-3`}>
                                    <skill.icon className={`text-gray-900 ${skill.bgColor}  text-2xl lg:text-3xl`} />
                                    {skill.title}
                                </div>
                            ) : null;
                        })}
                    </div>
                    <p>{project.description}</p>
                </div>
                <img src={project.thumbnail} alt={project.title} className="w-64 h-64 object-cover rounded-lg ml-10" />
            </div>
        </PageContainer>
    );
};
