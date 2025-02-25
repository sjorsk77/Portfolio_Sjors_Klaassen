interface Detail {
    id: number;
    title: string;
    description: string;
    imgUrl: string;
}

interface ProjectDetailListProps {
    details: Detail[];
}

export const ProjectDetailList: React.FC<ProjectDetailListProps> = ({
                                                                        details,
                                                                    }) => {
    return (
        <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Details</h2>
            <div className="space-y-4">
                {details.map((detail) => (
                    <div
                        key={detail.id}
                        className="bg-gray-900 bg-opacity-50 p-4 rounded-lg shadow"
                    >
                        <img
                            src={detail.imgUrl}
                            alt={detail.title}
                            className="w-full h-40 object-cover rounded-md mb-4"
                        />
                        <h3 className="text-lg font-semibold">{detail.title}</h3>
                        <p className="text-gray-300">{detail.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
