import { useState } from "react";
import floatingCards from "../../data/floatingCards";
import FloatingCard from "../ui/FloatingCard";
import CodeNavbar from "./CodeNavbar";
import CodePicker from "./CodePicker";

const CodeBlock = () => {
    const [activeCodeTitle, setActiveCodeTitle] = useState<"app" | "hero" | "navbar">("app");

    return (
        <div className="bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl p-3 border shadow-2xl border-white/10">
            <div className="bg-linear-to-br from-gray-900/20 to-gray-600/20 backdrop-blur-sm rounded-lg overflow-hidden h-[280px] sm:h-[350px] md:h-[450px] border-white/5">
                <CodeNavbar />
                <CodePicker
                    activeCodeTitle={activeCodeTitle}
                    setActiveCodeTitle={setActiveCodeTitle}
                />
            </div>
            <div className="absolute -bottom-12 -right-3">
                <FloatingCard card={floatingCards[activeCodeTitle]} />
            </div>
        </div>
    );
};

export default CodeBlock;
