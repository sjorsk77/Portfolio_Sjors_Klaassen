interface props {
    description: string;
}

export const ProjectDescription: React.FC<props> = ({description}) => {
    return(
        <div>
            <p>{description}</p>
        </div>
    )
}
