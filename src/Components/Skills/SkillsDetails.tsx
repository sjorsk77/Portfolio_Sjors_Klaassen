import {skillsDetials} from "../../Text/SkillsText";
import {SkillsDetailsProps} from "../../Data/Interfaces";
import {SkillType} from "../../Data/Enums";
import {SkillBar} from "./SkillBar";

export const SkillsDetails: React.FC = () => {

    const groupedSkills = skillsDetials.reduce<{[key in SkillType]: SkillsDetailsProps[]}>((acc, skill) => {
        const {skillType} = skill;
        if (!acc[skillType]) {
            acc[skillType] = [];
        }
        acc[skillType].push(skill);
        return acc;
    }, {} as {[key in SkillType]: SkillsDetailsProps[]});

    const skillLevelToWidthClass: Record<number, string> = {
        1: "Novice",
        2: "Familiar",
        3: "Competent",
        4: "Advanced",
        5: "Expert",
    }



    return (
        <div className="mt-20 w-full">
            {Object.entries(groupedSkills).map(([skillType, skills]) => (
                <div key={skillType} className={`flex flex-col justify-center items-center mb-20`}>
                    <h1 className="font-bold text-center">{skillType}</h1>
                    <div className="md:w-96 w-full h-1 mx-auto bg-current rounded-full animate-stretch_x mb-3"/>
                    <div className="relative w-full lg:w-1/2">
                        {/* Overlay with 5 vertical lines */}
                        <div className="absolute inset-0 z-10 pointer-events-none">
                            <div className="h-full w-full flex justify-between items-end lg:ml-[45px] ml-[20px]">
                                {[...Array(6)].map((_, idx) => (
                                    <div key={idx}
                                        className={`relative top-3 h-full border-l border-2 border-dotted border-current ${idx === 0 ? "opacity-0" : ""}`}
                                    >
                                        <h2 className={`absolute inset-0 top-[99%] lg:text-lg text-xs -translate-x-10`}>{skillLevelToWidthClass[idx] ?? ""}</h2>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Content: skill bars */}
                        <div className="flex flex-col w-full justify-center gap-x-10 gap-10 relative z-0">
                            {skills.map(skill => (
                                <div key={skill.id} className="w-full h-20">
                                    <SkillBar {...skill} />
                                </div>
                            ))}
                        </div>
                    </div>


                </div>
            ))}
        </div>

    );
}