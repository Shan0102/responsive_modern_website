const Logo = () => {
    return (
        <div className="flex items-center space-x-1 cursor-pointer">
            <img src="./logo.png" alt="CodeFlow logo" className="w-6 h-6 sm:w-8 sm:h-8" />
            <div>
                <span className="text-white">Code</span>
                <span className="text-blue-400">Flow</span>
            </div>
        </div>
    );
};

export default Logo;
