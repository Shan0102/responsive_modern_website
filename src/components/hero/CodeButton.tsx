interface CodeButtonProps {
    title: string;
    codeTitle: "app" | "hero" | "navbar";
    activeCodeTitle: string;
    setActiveCodeTitle: React.Dispatch<React.SetStateAction<"app" | "hero" | "navbar">>;
}

const CodeButton = ({ title, codeTitle, activeCodeTitle, setActiveCodeTitle }: CodeButtonProps) => {
    const additionalStyles =
        codeTitle === activeCodeTitle
            ? "bg-blue-500/30 text-white border-blue-500/80"
            : "bg-white/5 border-white/60 text-white/60 hover:bg-white/10";
    return (
        <button
            onClick={() => setActiveCodeTitle(codeTitle)}
            className={`px-3 py-2 backdrop-blur-sm text-xs sm:text-sm rounded-t-lg border ${additionalStyles}`}
        >
            {title}
        </button>
    );
};

export default CodeButton;
