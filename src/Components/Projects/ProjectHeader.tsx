interface ProjectHeaderProps {
    title: string;
    description: string;
}

export const ProjectHeader: React.FC<ProjectHeaderProps> = ({
                                                                title,
                                                                description,
                                                            }) => {
    return (
        <>
            <h1 className="text-4xl font-bold mb-4">{title}</h1>
            <p className="text-lg mb-6">{description}</p>
        </>
    );
};
