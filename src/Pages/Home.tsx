import {TypewriterEffect} from "../Components/TypeWriterEffect";
import {TypeWriterText, HomeText} from "../Text/HomeText";
import {PageContainer} from "../Pages/PageContainer";
import {DownloadButton} from "../Components/Misc/DownloadButton";

export const Home: React.FC = () => {
    return (
        <PageContainer>
            <div className="flex flex-row flex-x-grow justify-around items-center gap-x-20">
                <div className="flex flex-col items-start justify-center">
                    <div className="w-full flex">
                        <TypewriterEffect input={TypeWriterText} typingSpeed={100}/>
                    </div>
                    <p className="w-full text-left mb-5">
                        {HomeText}
                    </p>
                    <DownloadButton file={"/assets/files/cv_sjors_klaassen.docx"} text={"download cv"}/>
                </div>
                <img src="/assets/images/Portret.jpg" alt="laptop"
                     className="w-64 h-64 fade-up hidden lg:block rounded-full"/>
            </div>
        </PageContainer>
)
    ;
}