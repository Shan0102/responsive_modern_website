import SyntaxHighlighter from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";
import MacDots from "./MacDots";

interface CodeContentCustomProps {
    title: string;
    codeSnippet: string;
}

const CodeContentCustom = ({ codeSnippet, title }: CodeContentCustomProps) => {
    return (
        <div className="p-3 bg-gray-950/80 rounded-xl space-y-3 border border-white/20">
            <div className="flex gap-3">
                <MacDots />
                <span className="text-xs sm:text-sm text-white/60">{title}</span>
            </div>
            <div className="text-xs sm:text-sm  text-white/80">
                <SyntaxHighlighter
                    language="javascript"
                    style={nightOwl}
                    customStyle={{
                        backgroundColor: "transparent",
                    }}
                >
                    {codeSnippet}
                </SyntaxHighlighter>
            </div>
        </div>
    );
};

export default CodeContentCustom;
