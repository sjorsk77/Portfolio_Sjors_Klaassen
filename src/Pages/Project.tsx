import React from "react";
import { useParams } from "react-router-dom";
import {ProjectsDetails} from "../Text/ProjectsText";
import {ProjectHeader} from "../Components/Project/ProjectHeader";
import {Timeline, Text} from "@mantine/core";
import {FaFlagCheckered} from "react-icons/fa";
import {MdOutlineNotStarted} from "react-icons/md";
import {PageContainer} from "../Pages/PageContainer";
import {ProjectDescription} from "../Components/Project/ProjectDescription";
import {WorkingOnIt} from "../Components/WorkingOnIt";


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
            <WorkingOnIt/>
        </PageContainer>
    );
};
