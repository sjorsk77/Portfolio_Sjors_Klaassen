import {TypewriterEffect} from "../Components/TypeWriterEffect";

export const Home: React.FC = () => {
    return (
        <div className="flex flex-row flex-grow justify-between items-center">
            <div className="flex flex-col items-center justify-center px-20 md:px-48">
                <div className="w-full flex">
                    <TypewriterEffect/>
                </div>
                <p className="mt-4 w-full text-left mb-3">
                    and I am a software engineering student from the Netherlands. I am passionate about web development and I am always looking for new opportunities to learn and grow.
                </p>
                <button
                    className="px-6 py-2 text-lg font-semibold bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-blue-700 dark:text-gray-200 dark:hover:bg-blue-600 dark:focus:ring-blue-500 transition duration-200 ease-in-out">
                    Learn more about me!
                </button>
            </div>
            <img src="/assets/images/img.png" alt="laptop" className="w-2/5 fade-up hidden lg:block"/>
        </div>
    );
}