import {useEffect, useState} from "react";

export function SearchBar() {
    const [currentTime, setCurrentTime] = useState("");

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const time = now.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
            });
            setCurrentTime(time);
        };

        updateTime();
        const timer = setInterval(updateTime, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <>
            <div className="top-bar bg-white p-5 rounded-xl shadow-md mb-6">
                <div className="flex items-center justify-between">
                    <div className="search-bar relative flex-grow">
                        <i className="fas fa-search absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
                        <input
                            type="text"
                            className="form-input w-3/4 py-2 pl-12 pr-4 border-2 border-accent rounded-lg focus:border-secondary focus:ring focus:ring-accent/20 focus:outline-none"
                            placeholder="Search anything..."
                        />
                    </div>

                    <div className="live-time flex items-center ml-4">
                        <i className="far fa-clock text-gray-600 mr-2"></i>
                        <span id="currentDateTime" className="text-gray-800">
            {currentTime}
          </span>
                    </div>
                </div>
            </div>
        </>
    );
}