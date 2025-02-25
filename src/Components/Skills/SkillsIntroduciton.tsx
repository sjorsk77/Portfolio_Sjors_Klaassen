import {useMediaQuery} from "react-responsive";
import {skillsIntroduction} from "../../Text/SkillsText";


export const SkillsIntroduction: React.FC = () => {
    const isMediumOrLarger = useMediaQuery({ query: '(min-width: 768px)' });
    return (
        <div className='flex justify-center items-center w-full flex-row gap-y-5 gap-x-20'>
            <div className="max-w-2xl fade-up flex justify-center flex-col text-left">
                <h1 className='font-extrabold'>My skills</h1>
                <p className=''>{skillsIntroduction}</p>
            </div>
            {isMediumOrLarger && (
                <img src='/assets/images/img.png' alt='placeholder' className=" h-64 fade-up" />
            )}
        </div>
    );
}