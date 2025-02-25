interface ProjectDetailsProps {
    startDate: string;
    endDate: string;
    skillIds: number[];
}

export const ProjectDetails: React.FC<ProjectDetailsProps> = ({
                                                                  startDate,
                                                                  endDate,
                                                                  skillIds,
                                                              }) => {
    return (
        <div className="bg-gray-900 bg-opacity-50 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Project Timeline</h2>
            <p>
                <strong>Start Date:</strong> {startDate}
            </p>
            <p className="mb-4">
                <strong>End Date:</strong> {endDate}
            </p>
            <h3 className="text-xl font-semibold mb-2">Skills Used</h3>
            <ul className="flex space-x-4">
                {skillIds.map((skillId) => (
                    <li
                        key={skillId}
                        className="bg-blue-600 text-white px-3 py-1 rounded-lg"
                    >
                        Skill {skillId}
                    </li>
                ))}
            </ul>
        </div>
    );
};
