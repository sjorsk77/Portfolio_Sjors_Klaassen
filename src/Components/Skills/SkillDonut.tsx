import { IconType } from "react-icons";
import { DonutChart } from "@mantine/charts";

interface input {
    skill: string;
    icon: IconType;
    percentage: number;
}

export const SkillDonut: React.FC<input> = ({skill, percentage, icon: Icon}) => {

    const data = [
        { name: 'Practising', value: 6, color: 'indigo.6' },
        { name: 'RestOfCarreer', value: 12, color: 'gray' }
    ];


    return (
        <DonutChart data={data} startAngle={180} endAngle={0} withTooltip={false} paddingAngle={5} thickness={20} chartLabel="JS"/>
    )

}