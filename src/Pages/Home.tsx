import {TypewriterEffect} from "../Components/TypeWriterEffect";
import {TypeWriterText, HomeText} from "../Text/HomeText";

export const Home: React.FC = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-y-24 mx-80">
            <div className="flex flex-row flex-x-grow justify-around items-center gap-x-20">
                <div className="flex flex-col items-center justify-center">
                    <div className="w-full flex">
                        <TypewriterEffect input={TypeWriterText} typingSpeed={100}/>
                    </div>
                    <p className="mt-4 w-full text-left mb-3 text-xl">
                        {HomeText}
                    </p>

                </div>
                <img src="/assets/images/Portret.jpg" alt="laptop"
                     className="w-64 h-64 fade-up hidden lg:block rounded-full"/>
            </div>
        </div>
)
    ;
}