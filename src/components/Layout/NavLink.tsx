interface NavLinkProps {
    title: string;
    href: string;
}

const NavLink = ({ title, href }: NavLinkProps) => {
    return (
        <a href={href} className="text-gray-300 hover:text-white text-sm lg:text-base">
            {title}
        </a>
    );
};

export default NavLink;
