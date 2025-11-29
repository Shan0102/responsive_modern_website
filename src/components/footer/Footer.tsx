import { footerLinks } from "../../data/footer";
import Copyright from "./Copyright";
import FooterAbout from "./FooterAbout";
import FooterGroup from "./FooterGroup";

const Footer = () => {
    return (
        <footer id="testimonials" className="px-4 sm:px-6 lg:px-8 md:border-t border-white/30">
            <div className="max-w-7xl mx-auto">
                <div className="hidden md:block py-16 lg:py-20">
                    <div className="flex items-start justify-between">
                        <div className="max-w-3xs lg:max-w-xs">
                            <FooterAbout />
                        </div>
                        {footerLinks.map(({ title, links }) => (
                            <FooterGroup key={title} title={title} links={links} />
                        ))}
                    </div>
                </div>
                <Copyright />
            </div>
        </footer>
    );
};

export default Footer;
