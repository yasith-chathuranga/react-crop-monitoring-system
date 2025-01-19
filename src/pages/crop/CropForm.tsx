import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCrop, updateCrop } from "../../reducers/CropSlice.ts";
import { Crop } from "../../models/Crop.ts";

interface CropFormProps {
    crop: Crop | null;
    isViewMode: boolean;
    onClose: () => void;
}

export function CropForm({ crop, isViewMode, onClose }: CropFormProps) {
    const [cropCode, setCropCode] = useState("");
    const [cropCommonName, setCropCommonName] = useState("");
    const [cropScientificName, setCropScientificName] = useState("");
    const [category, setCategory] = useState("");
    const [cropSeason, setCropSeason] = useState("");
    const [, setCropImage] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<string | null>("");

    const dispatch = useDispatch();

    useEffect(() => {
        if (crop) {
            setCropCode(crop.cropCode);
            setCropCommonName(crop.cropCommonName);
            setCropScientificName(crop.cropScientificName);
            setCategory(crop.category);
            setCropSeason(crop.cropSeason);
            setImagePreview(crop.cropImage);
        }
    }, [crop]);

    const handleClear = () => {
        setCropCode("");
        setCropCommonName("");
        setCropScientificName("");
        setCategory("");
        setCropSeason("");
        setCropImage(null);
        setImagePreview(null);
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setCropImage(file);
            const reader = new FileReader();
            reader.onload = () => {
                setImagePreview(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSave = () => {
        const updatedCrop = {
            ...crop,
            cropCode,
            cropCommonName,
            cropScientificName,
            category,
            cropSeason,
            cropImage: imagePreview,
        } as Crop;

        if (crop) {
            dispatch(updateCrop(updatedCrop));
        } else {
            dispatch(addCrop(updatedCrop));
        }
        onClose();
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        handleSave();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30">
            <div className="bg-white rounded-lg shadow-lg w-3/4 max-w-4xl">
                <div className="bg-primary text-white rounded-t-lg p-4 flex justify-between items-center">
                    <h2 className="font-bold text-2xl">
                        {isViewMode ? "View Crop" : crop ? "Update Crop" : "Add New Crop"}
                    </h2>
                    <button
                        className="px-6 py-2 bg-primary text-white rounded"
                        type="button"
                        onClick={onClose}
                    >
                        <i className="fa-regular fa-circle-xmark fa-2x"></i>
                    </button>
                </div>
                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                            <label className="block font-semibold text-primary">Crop Code</label>
                            <input
                                className="w-full p-2 border border-accent rounded"
                                type="text"
                                value={cropCode}
                                onChange={(e) => setCropCode(e.target.value)}
                                required
                                disabled={isViewMode}
                            />
                        </div>
                        <div>
                            <label className="block font-semibold text-primary">Crop Common Name</label>
                            <input
                                className="w-full p-2 border border-accent rounded"
                                type="text"
                                placeholder="e.g. Potato"
                                value={cropCommonName}
                                onChange={(e) => setCropCommonName(e.target.value)}
                                required
                                disabled={isViewMode}
                            />
                        </div>
                        <div>
                            <label className="block font-semibold text-primary">Crop Scientific Name</label>
                            <input
                                className="w-full p-2 border border-accent rounded"
                                type="text"
                                placeholder="e.g. Solanum tuberosum"
                                value={cropScientificName}
                                onChange={(e) => setCropScientificName(e.target.value)}
                                required
                                disabled={isViewMode}
                            />
                        </div>
                        <div>
                            <label className="block font-semibold text-primary">Category</label>
                            <input
                                className="w-full p-2 border border-accent rounded"
                                type="text"
                                placeholder="e.g. Vegetables"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                required
                                disabled={isViewMode}
                            />
                        </div>
                        <div>
                            <label className="block font-semibold text-primary">
                                Season
                            </label>
                            <select
                                className="w-full p-2 border border-accent rounded"
                                value={cropSeason}
                                onChange={(e) => setCropSeason(e.target.value)}
                                required
                                disabled={isViewMode}
                            >
                                <option value="">Select Season</option>
                                <option value="Spring">Spring</option>
                                <option value="Summer">Summer</option>
                                <option value="Autumn">Autumn</option>
                                <option value="Winter">Winter</option>
                            </select>
                        </div>
                        <div>
                            <label className="block font-semibold text-primary">Crop Image</label>
                            {!isViewMode && (
                                <input
                                    className="w-full p-2 border border-accent rounded"
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageChange}
                                />
                            )}
                            {imagePreview && (
                                <div className="mt-4 border-2 border-dashed border-secondary p-2">
                                    <img
                                        src={imagePreview}
                                        alt="Preview"
                                        className="w-full h-full object-cover rounded-md"
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="flex justify-end gap-4">
                        {!isViewMode && (
                            <>
                                <button
                                    className="px-6 py-2 w-32 bg-primary text-white rounded hover:bg-secondary"
                                    type="button"
                                    onClick={handleClear}
                                >
                                    Clear
                                </button>
                                <button
                                    className="px-6 py-2 w-32 bg-primary text-white rounded hover:bg-secondary"
                                    type="submit"
                                >
                                    {crop ? "Update" : "Save"}
                                </button>
                            </>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
}