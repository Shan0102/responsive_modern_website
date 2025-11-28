import { FiChevronDown } from "react-icons/fi";
import LogoAi from "../branding/LogoAi";
import MacDots from "../ui/MacDots";

const CodeNavbar = () => {
    return (
        <div className="flex justify-between items-center px-3 sm:px-4 py-2 sm:py-3 bg-white/5 backdrop-blur-sm border-b border-white/10">
            <div className="flex items-center space-x-2">
                <MacDots />
                <span className="text-xs sm:text-sm text-white/60">CodeFlow AI</span>
            </div>
            <div className="flex items-center space-x-2">
                <LogoAi />
                <FiChevronDown className="w-3 h-3 sm:w-4 sm:h-4" />
            </div>
        </div>
    );
};

export default CodeNavbar;
