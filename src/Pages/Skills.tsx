import {SkillsIntroduction} from "../Components/Skills/SkillsIntroduciton";
import {SkillsDetails} from "../Components/Skills/SkillsDetails";
import {SkillDonut} from "../Components/Skills/SkillDonut";
import {FaNode} from "react-icons/fa";

export const Skills: React.FC = () => {
    return (
        <div className="w-full">
            <SkillsIntroduction/>
            <SkillsDetails/>
        </div>
    )
}