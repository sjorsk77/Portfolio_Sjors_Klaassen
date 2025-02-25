import React from "react";
import { useParams } from "react-router-dom";
import {ProjectsDetails} from "../Text/ProjectsText";
import {ProjectHeader} from "../Components/Project/ProjectHeader";
import {Timeline, Text} from "@mantine/core";
import {FaFlagCheckered} from "react-icons/fa";
import {MdOutlineNotStarted} from "react-icons/md";
import {PageContainer} from "../Pages/PageContainer";
import {ProjectDescription} from "../Components/Project/ProjectDescription";


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
            <ProjectHeader title={project.title}/>
            <ProjectDescription description={project.description}/>
            <div className="h-full">


            <Timeline active={2} bulletSize={64} lineWidth={6} style={{ flex: 1}}>
                <Timeline.Item bullet={<MdOutlineNotStarted size={32}/>} title="Project start">
                    <Text size="xs" mt={4}>{project.startDate}</Text>
                </Timeline.Item>
                <Timeline.Item bullet={<FaFlagCheckered size={32}/>} title="Project finished" style={{ flex: 1 }}>
                    <Text size="xs" mt={4}>{project.endDate}</Text>
                </Timeline.Item>
            </Timeline>
            </div>


        </PageContainer>
    );
};
