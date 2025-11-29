import { footerMediaLinks } from "../../data/footer";
import Logo from "../branding/Logo";
import SocialLink from "../ui/SocialLink";

const FooterAbout = () => {
    return (
        <div className="space-y-3 lg:space-y-4">
            <Logo />
            <p>
                Transform your workflow with AI-powered tools and automation. Built for modern
                teams.
            </p>
            <div className="flex items-center gap-2 lg:gap-3">
                {footerMediaLinks.map((link) => (
                    <SocialLink key={link.name} icon={link.icon} url={link.url} />
                ))}
            </div>
        </div>
    );
};

export default FooterAbout;
