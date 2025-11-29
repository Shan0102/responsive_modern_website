interface FooterGroupProps {
    title: string;
    links: string[];
}

const FooterGroup = ({ title, links }: FooterGroupProps) => {
    return (
        <div className="flex flex-col gap-4 lg:gap-6">
            <h3 className="font-semibold text-base lg:text-lg">{title}</h3>
            <ul className="space-y-2 lg:space-y-3">
                {links.map((link) => (
                    <li key={link}>
                        <a href="#" className="text-sm lg:text-base text-white/60 hover:text-white">
                            {link}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FooterGroup;
