import {SkillsDetailsProps} from "../../Data/Interfaces";
import {useEffect, useRef, useState} from "react";

export const SkillCard: React.FC<SkillsDetailsProps> = ({id, title, description, skillType, icon: Icon, bgColor }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [contentHeight, setContentHeight] = useState(0);
    const dropdownRef = useRef<HTMLDivElement | null>(null);

    const toggleExpand = () => {
        setIsOpen(!isOpen);
    };
    useEffect(() => {
        if (dropdownRef.current) {
            setContentHeight(dropdownRef.current.scrollHeight); // Get the full height of the content
        }
    }, []);


    return (
        <button
            className={`w-full rounded overflow-hidden shadow-lg ${bgColor} cursor-pointer shadow-black shadow-md hover:scale-105 transition-all duration-300 group`}
            onClick={toggleExpand}
        >
            <div className="flex justify-between p-4 flex-row items-center gap-5">
                <div className="font-bold text-gray-900 text-xl">{title}</div>
                <Icon size={32} className="text-gray-900"/>
            </div>


            <div
                ref={dropdownRef}
                style={{maxHeight: isOpen ? `${contentHeight}px` : "0px"}} // Dynamically set max-height
                className={`transition-all duration-500 overflow-hidden`} // Adjust duration as needed
            >
                <div>
                    <p className="p-4 text-gray-900">{description}</p>
                </div>
            </div>
        </button>
    );
}