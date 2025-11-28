import { FiArrowRight, FiPlay } from "react-icons/fi";
import GlassTitle from "../ui/GlassTitle";
import StartButton from "../ui/StartButton";
import WatchButton from "../ui/WatchButton";

const Introducing = () => {
    return (
        <div className="flex flex-col gap-3 sm:gap-4 items-center justify-center">
            <GlassTitle />
            <h1 className="font-semibold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl space-y-1 sm:space-y-2 text-center">
                <div className="bg-linear-to-r from-amber-50 to-indigo-200 bg-clip-text text-transparent">
                    Code Faster
                </div>
                <div className="bg-linear-to-b from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                    Build Better
                </div>
                <div className="bg-linear-to-r from-amber-50 to-indigo-200 bg-clip-text text-transparent">
                    With CodeFlow AI
                </div>
            </h1>
            <div className="text-sm sm:text-base lg:text-lg  text-white/60 text-center">
                Accelerate your development workflow with intelligent code completion, automated
                testing, and smart debugging. Ship production-ready code 10x faster.
            </div>
            <div className="w-full gap-2 sm:gap-3 flex flex-col items-center lg:flex-row">
                <StartButton>
                    <span>Start Coding Free</span>
                    <FiArrowRight className="h-4 w-4" />
                </StartButton>
                <WatchButton>
                    <FiPlay className="h-3 w-3" />
                    <span>Watch Demo</span>
                </WatchButton>
            </div>
        </div>
    );
};

export default Introducing;
