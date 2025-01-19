import {SearchBar} from "../../components/common/SearchBar.tsx";

export function Dashboard() {
    return (
        <>
            <div className="ml-[250px] p-5 transition-all ease-in-out duration-300 bg-background h-lvh">
                <SearchBar/>
            </div>
        </>
    );
}