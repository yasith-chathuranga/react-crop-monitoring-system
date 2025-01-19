import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addField, updateField } from "../../reducers/FieldSlice.ts";
import { Field } from "../../models/Field.ts";

interface FieldFormProps {
    field: Field | null;
    isViewMode: boolean;
    onClose: () => void;
}

export function FieldForm({ field, isViewMode, onClose }: FieldFormProps) {
    const [fieldCode, setFieldCode] = useState("");
    const [fieldName, setFieldName] = useState("");
    const [fieldLocation, setFieldLocation] = useState("");
    const [fieldExtentSize, setFieldExtentSize] = useState("");
    const [, setFieldImage1] = useState<File | null>(null);
    const [, setFieldImage2] = useState<File | null>(null);
    const [imagePreview1, setImagePreview1] = useState<string | null>("");
    const [imagePreview2, setImagePreview2] = useState<string | null>("");

    const dispatch = useDispatch();

    useEffect(() => {
        if (field) {
            setFieldCode(field.fieldCode);
            setFieldName(field.fieldName);
            setFieldLocation(field.fieldLocation);
            setFieldExtentSize(field.fieldExtentSize);
            setImagePreview1(field.fieldImage1);
            setImagePreview2(field.fieldImage2);
        }
    }, [field]);

    const handleClear = () => {
        setFieldCode("");
        setFieldName("");
        setFieldLocation("");
        setFieldExtentSize("");
        setFieldImage1(null);
        setFieldImage2(null);
        setImagePreview1(null);
        setImagePreview2(null);
    };

    const handleImageChangeOne = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setFieldImage1(file);
            const reader = new FileReader();
            reader.onload = () => {
                setImagePreview1(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleImageChangeTwo = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setFieldImage2(file);
            const reader = new FileReader();
            reader.onload = () => {
                setImagePreview2(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSave = () => {
        const updatedField = {
            ...field,
            fieldCode,
            fieldName,
            fieldLocation,
            fieldExtentSize,
            fieldImage1: imagePreview1,
            fieldImage2: imagePreview2,
        } as Field;

        if (field) {
            dispatch(updateField(updatedField));
        } else {
            dispatch(addField(updatedField));
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
                        {isViewMode ? "View Field" : field ? "Update Field" : "Add New Field"}
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
                            <label className="block font-semibold text-primary">Field Code</label>
                            <input
                                className="w-full p-2 border border-accent rounded"
                                type="text"
                                value={fieldCode}
                                onChange={(e) => setFieldCode(e.target.value)}
                                required
                                disabled={isViewMode}
                            />
                        </div>
                        <div>
                            <label className="block font-semibold text-primary">Field Name</label>
                            <input
                                className="w-full p-2 border border-accent rounded"
                                type="text"
                                placeholder="e.g. South Field"
                                value={fieldName}
                                onChange={(e) => setFieldName(e.target.value)}
                                required
                                disabled={isViewMode}
                            />
                        </div>
                        <div>
                            <label className="block font-semibold text-primary">Field Location</label>
                            <input
                                className="w-full p-2 border border-accent rounded"
                                type="text"
                                placeholder="e.g. 37.7749,-122.4194"
                                value={fieldLocation}
                                onChange={(e) => setFieldLocation(e.target.value)}
                                required
                                disabled={isViewMode}
                            />
                        </div>
                        <div>
                            <label className="block font-semibold text-primary">Field Extent Size</label>
                            <input
                                className="w-full p-2 border border-accent rounded"
                                type="text"
                                placeholder="e.g. 20 acres"
                                value={fieldExtentSize}
                                onChange={(e) => setFieldExtentSize(e.target.value)}
                                required
                                disabled={isViewMode}
                            />
                        </div>
                        <div>
                            <label className="block font-semibold text-primary">Field Image 1</label>
                            {!isViewMode && (
                                <input
                                    className="w-full p-2 border border-accent rounded"
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageChangeOne}
                                />
                            )}
                            {imagePreview1 && (
                                <div className="mt-4 border-2 border-dashed border-secondary p-2 flex justify-center items-center">
                                    <img
                                        src={imagePreview1}
                                        alt="Preview"
                                        className="w-32 h-32 object-cover rounded-md"
                                    />
                                </div>
                            )}
                        </div>
                        <div>
                            <label className="block font-semibold text-primary">Field Image 2</label>
                            {!isViewMode && (
                                <input
                                    className="w-full p-2 border border-accent rounded"
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageChangeTwo}
                                />
                            )}
                            {imagePreview2 && (
                                <div className="mt-4 border-2 border-dashed border-secondary p-2 flex justify-center items-center">
                                    <img
                                        src={imagePreview2}
                                        alt="Preview"
                                        className="w-32 h-32 object-cover rounded-md"
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
                                    {field ? "Update" : "Save"}
                                </button>
                            </>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
}