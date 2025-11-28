import { useState, useEffect } from "react";

const MouseShadow = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        function handleMouseMove(e: MouseEvent) {
            setMousePosition({ x: e.clientX, y: e.clientY });
        }

        window.addEventListener("mousemove", handleMouseMove);

        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div
            className="fixed inset-0 opacity-20 pointer-events-none"
            style={{
                background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(20, 70, 230, 0.5), transparent 50%)`,
            }}
        />
    );
};

export default MouseShadow;
