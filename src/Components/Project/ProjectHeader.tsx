import {StretchLine} from "../Misc/StretchLine";

interface props {
    title: string;
}
export const ProjectHeader: React.FC<props> = ({title}) =>{
    return (
        <div className="flex flex-col items-center my-10">
        <div className={"text-2xl font-extrabold mb-2"}>{title}</div>
        <StretchLine width={150} widthMetric={"%"} thickness={3} speed={2} startAnimation={"left"} color={"#000000"}/>
        </div>
    )
}