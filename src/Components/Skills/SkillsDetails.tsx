import {skillsDetials} from "../../Text/SkillsText";
import {SkillCard} from "./SkillCard";
import {SkillsDetailsProps} from "../../Data/Interfaces";
import {SkillType} from "../../Data/Enums";
import {StretchLine} from "../Misc/StretchLine";

export const SkillsDetails: React.FC = () => {

    const groupedSkills = skillsDetials.reduce<{[key in SkillType]: SkillsDetailsProps[]}>((acc, skill) => {
        const {skillType} = skill;
        if (!acc[skillType]) {
            acc[skillType] = [];
        }
        acc[skillType].push(skill);
        return acc;
    }, {} as {[key in SkillType]: SkillsDetailsProps[]});



    return (
        <div className="mt-20">
            {Object.entries(groupedSkills).map(([skillType, skills], index) => (
                <div key={skillType} className={`flex flex-col opacity-0 justify-center mb-10 fade-up`} style={{animationDelay: `${0.3 + (index * 0.6)}s`}}>
                    <h1 className="font-bold text-center">{skillType}</h1>
                    <div className="md:w-96 w-full scale-x-0 h-1 mx-auto bg-current rounded-full stretch-x" style={{animationDelay: `${1.2 + (index * 0.6)}s`}}></div>
                    <div className="flex flex-wrap justify-center gap-x-10 gap-5">
                        {skills.map(skill => (
                            <div key={skill.id}
                                 className="flex-grow basis-full md:basis-[calc(40%)] md:max-w-[calc(40%)] lg:basis-[calc(30%)] lg:max-w-[calc(30%)]">
                                <SkillCard {...skill} />
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>

    );
}