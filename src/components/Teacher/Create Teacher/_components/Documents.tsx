"use client";
import { Controller } from "react-hook-form";
import { FilePlus2 } from "lucide-react";
import { useState } from "react";

interface PersonalInfoProps {
    control: any;
    setValue: (name: string, value: any) => void;
}

const Documents = ({ control, setValue }: PersonalInfoProps) => {

    // Local states to store the file URL for rendering PDFs
    const [birthCertificateUrl, setBirthCertificateUrl] = useState<string | null>(null);
    const [transferCertificateUrl, setTransferCertificateUrl] = useState<string | null>(null);

    // Truncate file name for display
    const truncateFileName = (name: string, maxLength: number = 20) => {
        return name.length > maxLength ? name.substring(0, maxLength) + "..." : name;
    };

    // Handle file change for both certificates
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, setFileUrl: React.Dispatch<React.SetStateAction<string | null>>) => {
        const file = e.target.files?.[0] || null;
        if (file) {
            // Create a URL for the uploaded file
            const fileUrl = URL.createObjectURL(file);
            setFileUrl(fileUrl); // Update the state with the file URL
        }
    };

    return (
        <div className="p-6">
            <div className=" bg-white border rounded-md">
                <div className="p-4 bg-[#E9EDF4] rounded-t-md flex items-center gap-2 mb-5">
                    <FilePlus2 className="h-5 w-5" />
                    <span className="font-semibold">Documents</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
                    {/* Birth Certificate Upload */}
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
                                            field.onChange(e.target.files?.[0]);
                                            setValue("birthCertificate", e.target.files?.[0]);
                                            handleFileChange(e, setBirthCertificateUrl); // Update URL for preview
                                        }}
                                    />
                                    {field.value && <span className="text-gray-700">{truncateFileName(field.value.name)}</span>}
                                </div>
                            )}
                        />
                        {/* Display the PDF preview */}
                        {birthCertificateUrl && (
                            <iframe
                                src={birthCertificateUrl}
                                width="100%"
                                height="200"
                                frameBorder="0"
                                title="Birth Certificate PDF"
                                 className="mt-5"
                            />
                        )}
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
                                            field.onChange(e.target.files?.[0]);
                                            setValue("transferCertificate", e.target.files?.[0]);
                                            handleFileChange(e, setTransferCertificateUrl); // Update URL for preview
                                        }}
                                    />
                                    {field.value && <span className="text-gray-700">{truncateFileName(field.value.name)}</span>}
                                </div>
                            )}
                        />
                        {/* Display the PDF preview */}
                        {transferCertificateUrl && (
                            <iframe
                                src={transferCertificateUrl}
                                width="100%"
                                height="200"
                                frameBorder="0"
                                title="Transfer Certificate PDF"
                                className="mt-5"
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Documents;
