"use client";
import { Controller } from "react-hook-form";
import { FilePlus2 } from "lucide-react";
import { useState } from "react";

interface PersonalInfoProps {
    control: any;
    setValue: (name: string, value: any) => void;
}

const Documents = ({ control, setValue }: PersonalInfoProps) => {

    const truncateFileName = (name: string, maxLength: number = 20) => {
        return name.length > maxLength ? name.substring(0, maxLength) + "..." : name;
    };


    return (
        <div className="p-6">
            <div className=" bg-white border rounded-md">
            <div className="p-4 bg-[#E9EDF4] rounded-t-md flex items-center gap-2 mb-5">
                <FilePlus2 className="h-5 w-5" />
                <span className="font-semibold">Documents</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
                {/* Medical Condition Upload */}
                <div>
                    <h3 className="font-semibold">Upload Birth Certificate Document</h3>
                    <p className="text-sm text-gray-500">Upload file size of 4MB, Accepted Format: PDF</p>
                    <Controller
                        name="birthCertificate"
                        control={control}
                        render={({ field }) => (
                            <div className="mt-3 flex items-center gap-3">
                                <label htmlFor="birth-certificate" className="bg-black text-white w-[90px] text-center py-2 rounded-md cursor-pointer">
                                    {field.value ? "Change" : "Upload"}
                                </label>
                                <input
                                    type="file"
                                    id="birth-certificate"
                                    className="hidden"
                                    accept=".pdf"
                                    onChange={(e) => {
                                        const file = e.target.files?.[0] || null;
                                        field.onChange(file);
                                        setValue("birthCertificate", file);
                                    }}
                                />
                                {field.value && <span className="text-gray-700">{truncateFileName(field.value.name)}</span>}

                            </div>
                        )}
                    />
                </div>

                {/* Transfer Certificate Upload */}
                <div>
                    <h3 className="font-semibold">Upload Transfer Certificate Document</h3>
                    <p className="text-sm text-gray-500">Upload file size of 4MB, Accepted Format: PDF</p>
                    <Controller
                        name="transferCertificate"
                        control={control}
                        render={({ field }) => (
                            <div className="mt-3 flex items-center gap-3">
                                <label htmlFor="transfer-certificate" className="bg-black text-white px-4 py-2 rounded-md cursor-pointer">
                                    {field.value ? "Change" : "Upload Document"}
                                </label>
                                <input
                                    type="file"
                                    id="transfer-certificate"
                                    className="hidden"
                                    accept=".pdf"
                                    onChange={(e) => {
                                        const file = e.target.files?.[0] || null;
                                        field.onChange(file);
                                        setValue("transferCertificate", file);
                                    }}
                                />
                                {field.value && <span className="text-gray-700">{truncateFileName(field.value.name)}</span>}

                            </div>
                        )}
                    />
                </div>
            </div>
        </div>
        </div>
    );
};

export default Documents;
