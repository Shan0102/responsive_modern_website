import type React from "react";

interface WatchButtonProps {
    children: React.ReactNode;
}

const WatchButton = ({ children }: WatchButtonProps) => {
    return (
        <button className="cursor-pointer max-w-lg bg-linear-to-b from-slate-900 to-slate-800 p-3 w-full rounded-lg border border-slate-600 transition ease-in-out duration-200 hover:from-slate-800 hover:to-slate-700 hover:scale-102 active:scale-98">
            <div className="flex items-center gap-2 justify-center">{children}</div>
        </button>
    );
};

export default WatchButton;
