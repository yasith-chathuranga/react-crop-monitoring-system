import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/Store";
import { Crop as CropModel } from "../../models/Crop";
import { deleteCrop } from "../../reducers/CropSlice";
import { CropForm } from "./CropForm";
import { SearchBar } from "../../components/common/SearchBar.tsx";
import { AddBtnModel } from "../../components/common/AddBtnModel.tsx";
import { CropCardModel } from "../../components/crop/CropCardModel.tsx";

export function Crops() {
    const cropList = useSelector((state: RootState) => state.crops) || [];
    const [selectedCrop, setSelectedCrop] = useState<CropModel | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isViewMode, setIsViewMode] = useState(false);
    const dispatch = useDispatch();

    const openModalForAdd = () => {
        setSelectedCrop(null);
        setIsViewMode(false);
        setIsModalOpen(true);
    };

    const openModalForView = (crop: CropModel) => {
        setSelectedCrop(crop);
        setIsViewMode(true);
        setIsModalOpen(true);
    };

    const openModalForEdit = (crop: CropModel) => {
        setSelectedCrop(crop);
        setIsViewMode(false);
        setIsModalOpen(true);
    };

    const handleDelete = (crop: CropModel) => {
        dispatch(deleteCrop({ cropCode: crop.cropCode }));
    };

    return (
        <>
            <div className="ml-[250px] p-5 transition-all ease-in-out duration-300 bg-background h-lvh">
                <div>
                    <SearchBar />
                </div>
                <div className="flex justify-end">
                    <AddBtnModel onClick={openModalForAdd}>Add New Crop</AddBtnModel>
                </div>
                <div className="custom-table w-full overflow-x-auto bg-white rounded-[15px] p-6 mt-6 shadow-md scrollbar-thin">
                    <h1 className="text-2xl font-medium mb-4">Crop Records</h1>
                    <div className="overflow-y-auto max-h-[450px] scrollbar-thin p-2">
                        <div className="grid lg:grid-cols-5 gap-6">
                            {cropList.length > 0 ? (
                                cropList.map((crop) => (
                                    <CropCardModel
                                        key={crop.cropCode}
                                        crop={crop}
                                        onView={openModalForView}
                                        onUpdate={openModalForEdit}
                                        onDelete={handleDelete}
                                    />
                                ))
                            ) : (
                                <p>No crops available.</p>
                            )}
                        </div>
                    </div>
                </div>
                {isModalOpen && (
                    <CropForm
                        crop={selectedCrop}
                        isViewMode={isViewMode}
                        onClose={() => setIsModalOpen(false)}
                    />
                )}
            </div>
        </>
    );
}