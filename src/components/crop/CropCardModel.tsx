import { Crop } from "../../models/Crop.ts";

interface CropCardProps {
    crop: Crop;
    onView?: (crop: Crop) => void;
    onUpdate?: (crop: Crop) => void;
    onDelete?: (crop: Crop) => void;
}

export function CropCardModel({ crop, onView, onUpdate, onDelete }: CropCardProps) {
    const defaultImage = "";

    return (
        <div className="card p-5 bg-white shadow-md rounded-lg hover:shadow-lg max-w-xs border-2">
            <h2 className="text-xl font-bold mb-2">{crop.cropCode}</h2>
            <div className="flex justify-center items-center relative w-48 h-48 bg-gray-200 overflow-hidden mx-auto">
                <img
                    src={crop.cropImage || defaultImage}
                    alt={crop.cropCommonName || "Crop Image"}
                    className="object-cover w-full h-full"
                />
            </div>
            <h3 className="pt-2 text-justify">{crop.cropCommonName}</h3>
            <p className="pt-2 text-gray-600"><i className="fa-solid fa-temperature-low"></i> - {crop.cropSeason}</p>
            <div className="flex justify-around gap-4 pt-4">
                {onView && (
                    <button
                        onClick={() => onView(crop)}
                        className="bg-blue-500 px-4 py-2 text-white rounded flex items-center justify-center hover:bg-blue-400"
                    >
                        <i className="fas fa-eye"></i>
                    </button>
                )}
                {onUpdate && (
                    <button
                        onClick={() => onUpdate(crop)}
                        className="bg-primary px-4 py-2 text-white rounded flex items-center justify-center hover:bg-secondary"
                    >
                        <i className="fas fa-edit"></i>
                    </button>
                )}
                {onDelete && (
                    <button
                        onClick={() => onDelete(crop)}
                        className="bg-red-500 px-4 py-2 text-white rounded flex items-center justify-center hover:bg-red-400"
                    >
                        <i className="fas fa-trash-alt"></i>
                    </button>
                )}
            </div>
        </div>
    );
}