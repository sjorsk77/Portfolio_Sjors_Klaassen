import {LuDownload} from "react-icons/lu";

interface props {
    file: string;
    text: string;
}

export const DownloadButton: React.FC<props> = ({file, text}) => {
    return (
        <a href={file} download>
            <button className="flex flex-row gap-x-3 items-center">{text}<LuDownload /></button>

        </a>
    );
}