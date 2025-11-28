import { AiOutlineSlack } from "react-icons/ai";

const GlassTitle = () => {
    return (
        <div className="flex items-center gap-2 py-1 px-3 sm:px-4 backdrop-blur-md rounded-full border border-blue-800/60 bg-blue-800/30">
            <AiOutlineSlack className="text-blue-300/80" />
            <span className="text-sm md:text-base text-blue-300/80">
                Introducing CodeFlow AI 2.0
            </span>
        </div>
    );
};

export default GlassTitle;
