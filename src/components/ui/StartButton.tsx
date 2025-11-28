import type React from "react";

interface StartButtonProps {
    children: React.ReactNode;
}

const StartButton = ({ children }: StartButtonProps) => {
    return (
        <button className="cursor-pointer max-w-lg bg-linear-to-b from-blue-700 to-blue-500 p-3 w-full rounded-lg border border-blue-300 transition ease-in-out duration-200 hover:from-blue-600 hover:to-blue-400 hover:scale-102 active:scale-98">
            <div className="flex items-center gap-2 justify-center">{children}</div>
        </button>
    );
};

export default StartButton;
