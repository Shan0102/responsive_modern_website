import React from "react";

interface SocialLinkProps {
    icon: React.ReactElement;
    url: string;
}

const SocialLink = ({ icon, url }: SocialLinkProps) => {
    return (
        <a
            className="block p-2 lg:p-3 rounded-lg bg-linear-to-br from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 transition ease-in-out duration-200"
            href={url}
        >
            {icon}
        </a>
    );
};

export default SocialLink;
