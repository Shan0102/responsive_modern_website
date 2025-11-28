interface BackgroundPulseProps {
    top?: number;
    left?: number;
    right?: number;
    bottom?: number;
}

const BackgroundPulse = ({ bottom, right, left, top }: BackgroundPulseProps) => {
    return (
        <div
            className={`absolute w-48 h-48 rounded-full bg-blue-700 blur-3xl animate-pulse-fast`}
            style={{
                top: top ? `${top}rem` : "auto",
                left: left ? `${left}rem` : "auto",
                bottom: bottom ? `${bottom}rem` : "auto",
                right: right ? `${right}rem` : "auto",
            }}
        />
    );
};

export default BackgroundPulse;
