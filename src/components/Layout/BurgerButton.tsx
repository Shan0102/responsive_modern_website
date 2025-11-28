import { FiX, FiMenu } from "react-icons/fi";

interface BurgerButtonProps {
    IsOpen: boolean;
    setrIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const BurgerButton = ({ IsOpen, setrIsOpen }: BurgerButtonProps) => {
    return (
        <button
            className="md:hidden p-2 text-gray-300 hover:text-white"
            onClick={() => setrIsOpen((prev) => !prev)}
        >
            {IsOpen ? (
                <FiX className="w-5 h-5 sm:w-6 sm:h-6" />
            ) : (
                <FiMenu className="w-5 h-5 sm:w-6 sm:h-6" />
            )}
        </button>
    );
};

export default BurgerButton;
