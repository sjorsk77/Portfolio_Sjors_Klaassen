import {useMediaQuery} from "react-responsive";


export const RoadmapIntroduction: React.FC = () => {
    const isMediumOrLarger = useMediaQuery({ query: '(min-width: 768px)' });
    return (
        <div className='flex justify-center items-center w-full flex-row gap-y-5 gap-x-20'>
            <div className="max-w-2xl fade-up flex justify-center flex-col text-left">
                <h1 className='text-2xl font-extrabold'>Wat is PAP?</h1>
                <p className='text-xl'>{}</p>
            </div>
            {isMediumOrLarger && (
                <img src='/assets/images/papimg.png' alt='placeholder' className="rounded-full h-64 fade-up" />
            )}
        </div>
    );
}