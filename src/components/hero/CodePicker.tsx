import SyntaxHighlighter from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";
import codeExamples from "../../data/codeExamples";
import CodeButton from "./CodeButton";

interface CodePickerProps {
    activeCodeTitle: "app" | "hero" | "navbar";
    setActiveCodeTitle: React.Dispatch<React.SetStateAction<"app" | "hero" | "navbar">>;
}

const CodePicker = ({ activeCodeTitle, setActiveCodeTitle }: CodePickerProps) => {
    return (
        <div className="p-3 sm:p-4 max-h-full">
            <div className="flex space-x-1 sm:space-x-2 mb-3 sm:mb-4">
                <CodeButton
                    title="App.jsx"
                    codeTitle="app"
                    activeCodeTitle={activeCodeTitle}
                    setActiveCodeTitle={setActiveCodeTitle}
                />
                <CodeButton
                    title="Hero.jsx"
                    codeTitle="hero"
                    activeCodeTitle={activeCodeTitle}
                    setActiveCodeTitle={setActiveCodeTitle}
                />
                <CodeButton
                    title="Navbar.jsx"
                    codeTitle="navbar"
                    activeCodeTitle={activeCodeTitle}
                    setActiveCodeTitle={setActiveCodeTitle}
                />
            </div>
            <div className="overflow-hidden max-w-full rounded-xl border border-white/10">
                <SyntaxHighlighter
                    language="javascript"
                    style={nightOwl}
                    customStyle={{ margin: 0, fontSize: "0.75rem", height: "100%" }}
                >
                    {codeExamples[activeCodeTitle]}
                </SyntaxHighlighter>
            </div>
        </div>
    );
};

export default CodePicker;
