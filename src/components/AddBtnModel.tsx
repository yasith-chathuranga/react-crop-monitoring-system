interface AddBtnModelProps {
    onClick: () => void;
    children: string;
}

export function AddBtnModel(props: AddBtnModelProps) {
    return (
        <>
            <button
                className="bg-primary hover:bg-secondary text-white hover:text-black px-6 py-2 rounded-md transition-all duration-300 w-40 h-10 mt-2 mb-2" onClick={props.handleSubmit}>
                {props.children}
            </button>

        </>
    );
}