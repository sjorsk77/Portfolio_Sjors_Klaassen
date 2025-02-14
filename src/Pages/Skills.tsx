import {SkillsIntroduction} from "../Components/Skills/SkillsIntroduciton";
import {SkillsDetails} from "../Components/Skills/SkillsDetails";

export const Skills: React.FC = () => {
    return (
        <div className="w-full">
            <SkillsIntroduction/>
            <SkillsDetails/>
        </div>
    )
}