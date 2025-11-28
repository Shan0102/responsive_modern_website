interface FloatingCardProps {
    card: {
        bgColor: string;
        iconColor: string;
        textColor: string;
        contentColor: string;
        icon: string;
        title: string;
        content: string;
    };
}

const FloatingCard = ({ card }: FloatingCardProps) => {
    return (
        <div className={`backdrop-blur-lg p-3 sm:p-4 rounded-xl border ${card.bgColor}`}>
            <div className={`flex items-center space-x-2`}>
                <div className={`text-xs sm:text-sm ${card.iconColor}`}>{card.icon}</div>
                <div className={`font-bold${card.textColor}`}>{card.title}</div>
            </div>
            <div className={`${card.contentColor}`}>{card.content}</div>
        </div>
    );
};

export default FloatingCard;
