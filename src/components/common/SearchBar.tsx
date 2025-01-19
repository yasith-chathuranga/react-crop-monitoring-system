interface SearchBarProps {
    placeholder: string;
    value: string;
    onChange: (value: string) => void;
    onSearch: () => void;
}

export const SearchBar = ({placeholder, value, onChange, onSearch}: SearchBarProps) => {
    // const [currentTime, setCurrentTime] = useState("");
    //
    // useEffect(() => {
    //     const updateTime = () => {
    //         const now = new Date();
    //         const time = now.toLocaleTimeString([], {
    //             hour: "2-digit",
    //             minute: "2-digit",
    //             second: "2-digit",
    //         });
    //         setCurrentTime(time);
    //     };
    //
    //     updateTime();
    //     const timer = setInterval(updateTime, 1000);
    //     return () => clearInterval(timer);
    // }, []);

    return (
        <>
            <div className="top-bar bg-white p-5 rounded-xl shadow-md mb-6">
                <div className="flex items-center justify-between">
                    <div className="search-bar relative flex-grow">
                        <input
                            type="text"
                            value={value}
                            className="form-input w-3/4 py-2 pl-12 pr-4 border-2 border-accent rounded-lg"
                            placeholder={placeholder}
                            onChange={(e) => onChange(e.target.value)}
                        />
                        <button
                            onClick={onSearch}
                            className="bg-primary text-white py-2 px-8 ml-4 h-10 rounded-lg text-sm font-medium hover:bg-secondary w-32"
                        >
                            <i className="fas fa-search"></i>
                        </button>
                    </div>

                    {/*          <div className="live-time flex items-center ml-4 mr-">*/}
                    {/*              <i className="far fa-clock text-gray-600 mr-2"></i>*/}
          {/*              <span id="currentDateTime" className="text-gray-800">*/}
          {/*  {currentTime}*/}
          {/*</span>*/}
          {/*          </div>*/}
                </div>
            </div>
        </>
    );
}