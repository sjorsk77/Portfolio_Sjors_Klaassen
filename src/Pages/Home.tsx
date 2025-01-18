import {TypewriterEffect} from "../Components/TypeWriterEffect";
import {TypeWriterText, HomeText} from "../Text/HomeText";

export const Home: React.FC = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-y-24">
            <div className="flex flex-row flex-x-grow justify-around items-center md:gap-x-80 px-20 md:px-40">
                <div className="flex flex-col items-center justify-center">
                    <div className="w-full flex">
                        <TypewriterEffect input={TypeWriterText} typingSpeed={100}/>
                    </div>
                    <p className="mt-4 w-full text-left mb-3">
                        {HomeText}
                    </p>

                </div>
                <img src="/assets/images/human.jpeg" alt="laptop"
                     className="w-64 h-64 fade-up hidden lg:block rounded-full"/>
            </div>
            <button onClick={() => window.location.href = "/about"}
                className="px-6 py-2 text-lg font-semibold bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-blue-700 dark:text-gray-200 dark:hover:bg-blue-600 dark:focus:ring-blue-500 transition duration-200 ease-in-out">
                Lees meer over mij!
            </button>
        </div>
)
    ;
}