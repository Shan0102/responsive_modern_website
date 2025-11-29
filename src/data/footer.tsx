import { FaXTwitter } from "react-icons/fa6";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const footerLinks = [
    {
        title: "Product",
        links: ["Features", "Pricing", "Security", "Roadmap", "Changelog"],
    },
    {
        title: "Company",
        links: ["About", "Blog", "Careers", "Press", "Partners"],
    },
    {
        title: "Resources",
        links: ["Documentation", "Help Center", "Community", "API Reference", "Status"],
    },
    {
        title: "Legal",
        links: ["Privacy", "Terms", "Cookie Policy", "Licenses", "Compliance"],
    },
];

const iconClassName = "h-4 w-4 lg:h-5 lg:w-5";

const footerMediaLinks = [
    {
        name: "X",
        url: "https://x.com",
        icon: <FaXTwitter className={iconClassName} />,
    },
    {
        name: "GitHub",
        url: "https://github.com",
        icon: <FiGithub className={iconClassName} />,
    },
    {
        name: "LinkedIn",
        url: "https://linkedin.com",
        icon: <FiLinkedin className={iconClassName} />,
    },
    {
        name: "Email",
        url: "mailto:someone@example.com",
        icon: <FiMail className={iconClassName} />,
    },
];

export { footerLinks, footerMediaLinks };
