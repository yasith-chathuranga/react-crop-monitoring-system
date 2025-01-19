import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/Store";
import { Field as FieldModel } from "../../models/Field.ts";
import { deleteField } from "../../reducers/FieldSlice.ts";
import { FieldForm } from "./FieldForm.tsx";
import { SearchBar } from "../../components/SearchBar";
import { AddBtnModel } from "../../components/AddBtnModel";
import {FieldCardModel} from "../../components/FieldCardModel.tsx";

export function Fields() {
    const fieldList = useSelector((state: RootState) => state.fields) || [];
    const [selectedField, setSelectedField] = useState<FieldModel | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isViewMode, setIsViewMode] = useState(false);
    const dispatch = useDispatch();

    const openModalForAdd = () => {
        setSelectedField(null);
        setIsViewMode(false);
        setIsModalOpen(true);
    };

    const openModalForView = (field: FieldModel) => {
        setSelectedField(field);
        setIsViewMode(true);
        setIsModalOpen(true);
    };

    const openModalForEdit = (field: FieldModel) => {
        setSelectedField(field);
        setIsViewMode(false);
        setIsModalOpen(true);
    };

    const handleDelete = (field: FieldModel) => {
        dispatch(deleteField({ fieldCode: field.fieldCode }));
    };

    return (
        <>
            <div className="ml-[250px] p-5 transition-all ease-in-out duration-300 bg-background h-lvh">
                <div>
                    <SearchBar />
                </div>
                <div className="flex justify-end">
                    <AddBtnModel onClick={openModalForAdd}>Add New Field</AddBtnModel>
                </div>
                <div className="custom-table w-full overflow-x-auto bg-white rounded-[15px] p-6 mt-6 shadow-md scrollbar-thin">
                    <h1 className="text-2xl font-medium mb-4">Field Records</h1>
                    <div className="overflow-y-auto max-h-[450px] scrollbar-thin p-2">
                        <div className="grid lg:grid-cols-5 gap-6">
                            {fieldList.length > 0 ? (
                                fieldList.map((field) => (
                                    <FieldCardModel
                                        key={field.fieldCode}
                                        field={field}
                                        onView={openModalForView}
                                        onUpdate={openModalForEdit}
                                        onDelete={handleDelete}
                                    />
                                ))
                            ) : (
                                <p>No fields available.</p>
                            )}
                        </div>
                    </div>
                </div>
                {isModalOpen && (
                    <FieldForm
                        field={selectedField}
                        isViewMode={isViewMode}
                        onClose={() => setIsModalOpen(false)}
                    />
                )}
            </div>
        </>
    );
}