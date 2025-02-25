import {SkillsIntroduction} from "../Components/Skills/SkillsIntroduciton";
import {SkillsDetails} from "../Components/Skills/SkillsDetails";
import {SkillDonut} from "../Components/Skills/SkillDonut";
import {FaNode} from "react-icons/fa";
import {PageContainer} from "./PageContainer";

export const Skills: React.FC = () => {
    return (
        <PageContainer>
            <SkillsIntroduction/>
            <SkillsDetails/>
        </PageContainer>
    )
}