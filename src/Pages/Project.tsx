import React from "react";
import { useParams } from "react-router-dom";
import {ProjectsDetails} from "../Text/ProjectsText";
import {ProjectDetails} from "../Components/Project/ProjectDetails";
import {ProjectHeader} from "../Components/Project/ProjectHeader";
import {ProjectDetailList} from "../Components/Project/DetailsList";
import {Timeline, Text} from "@mantine/core";
import {FaClock, FaFlagCheckered} from "react-icons/fa";
import {FcStart} from "react-icons/fc";
import {MdOutlineNotStarted, MdStart} from "react-icons/md";


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
        <div className='min-h-screen'>
            <ProjectHeader title={project.title} description={project.description}/>
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


        </div>
    );
};
