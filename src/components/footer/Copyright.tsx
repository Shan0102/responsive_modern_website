const Copyright = () => {
    return (
        <div className="border-t border-white/30 py-8 sm:py-10 md:py-12">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between text-center text-xs sm:text-sm text-white/50">
                <p>&copy; {new Date().getFullYear()} CodeFlow. All rights reserved.</p>
                <div className="space-x-6">
                    <a className="hover:text-white" href="#">
                        Privacy Policy
                    </a>
                    <a className="hover:text-white" href="#">
                        Terms of Service
                    </a>
                    <a className="hover:text-white" href="#">
                        Cookie Settings
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Copyright;
