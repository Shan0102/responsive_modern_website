import NavLinks from "./NavLinks";

interface BurgerMenuProps {
    IsOpen: boolean;
    setrIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const BurgerMenu = ({ IsOpen, setrIsOpen }: BurgerMenuProps) => {
    return (
        <>
            {IsOpen && (
                <div className="md:hidden bg-slate-950/40 backdrop-blur-lg border-t border-slate-600 animate-in">
                    <div
                        className="flex flex-col px-4 py-4 sm:py-6 space-y-4 sm:space-y-5"
                        onClick={() => setrIsOpen(false)}
                    >
                        <NavLinks />
                    </div>
                </div>
            )}
        </>
    );
};

export default BurgerMenu;
