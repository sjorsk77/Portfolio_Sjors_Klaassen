import {IconType} from "react-icons";
import {SkillType, SkillLevel} from "./Enums";
export interface PageProps {
    path: string;
    component: JSX.Element;
    name: string;
    isOnNavigation: boolean;
}

export interface RoadmapProps {
    id: number;
    title: string;
    description: string;
    learningOutcomes: LearningOutcomeProps[];
    period: string;
}

export interface LearningOutcomeProps {
    id: number;
    title: string;
    description: string;
}

export interface SkillsDetailsProps {
    id: number;
    title: string;
    description: string;
    skillType: SkillType;
    skillLevel: SkillLevel;
    icon : IconType;
    bgColor: string;
}