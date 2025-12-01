import { useState, useEffect } from "react";

const useScrolled = (threshold = 0) => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        let timeoutId: number;

        const handleScroll = () => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                setIsScrolled(window.scrollY > threshold);
            }, 100);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            clearTimeout(timeoutId);
        };
    }, [threshold]);

    return isScrolled;
};

export { useScrolled };
