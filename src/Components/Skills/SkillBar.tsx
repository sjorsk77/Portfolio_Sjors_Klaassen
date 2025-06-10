import {SkillsDetailsProps} from "../../Data/Interfaces";
import {SkillLevel} from "../../Data/Enums";
import {useMemo} from "react";

export const SkillBar: React.FC<SkillsDetailsProps> = ({title, skillLevel, icon: Icon, bgColor }) => {

    const skillLevelToPercentage = {
        [SkillLevel.Novice]: 20,
        [SkillLevel.Familiar]: 40,
        [SkillLevel.Competent]: 60,
        [SkillLevel.Advanced]: 80,
        [SkillLevel.Expert]: 100,
    };

    // Memoize random offset so it doesn't change on every render
    const randomWidth = useMemo(() => {
        const base = skillLevelToPercentage[skillLevel] || 0;
        const offset = (Math.random() * 4) - 2;
        return Math.max(0, Math.min(100, base + offset));
    }, [skillLevel]);

    return (
        <div className={`flex flex-col h-full w-full`}>
            <h2>{title}</h2>
            <div className={`w-full flex flex-row items-center`}>
                <Icon className={`text-gray-900 ${bgColor} rounded-full z-10 p-1 text-5xl lg:text-6xl`} />
                <div
                    className={`lg:h-8 h-5 -ml-6 z-0 ${bgColor} flex justify-center items-center transition-all ease-out rounded-full animate-grow_width`}
                    style={{
                        width: `${randomWidth}%`,
                        animationDuration: "1.5s",
                    }}
                />
            </div>
        </div>
    );
}