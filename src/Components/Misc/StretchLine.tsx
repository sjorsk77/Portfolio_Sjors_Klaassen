interface Props {
    width: number | "full" | "150%";
    widthMetric: "px" | "vw" | "%";
    thickness: number;
    speed: number;
    startAnimation: "center" | "left" | "right";
    color: string;
}

export const StretchLine: React.FC<Props> = ({ width, thickness, speed, startAnimation, color, widthMetric }) => {
    return (
        <div
            className={`stretch-x-${startAnimation} w-${width}`}
            style={{
                width: `${width}${widthMetric}`,
                height: `${thickness}px`,
                backgroundColor: color,
                animation: `stretchX ${speed}s ease-in-out`,
            }}
        />
    );
};