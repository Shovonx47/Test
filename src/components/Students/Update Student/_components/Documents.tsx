import { Controller } from "react-hook-form";
import { FilePlus2 } from "lucide-react";
import { useState } from "react";

interface DocumentProps {
    data: {
        birthCertificate: string;
        transferCertificate: string;
    };
}

interface DocumentInfoProps {
    control: any;
    setValue: (name: string, value: any) => void;
    singleStudent: DocumentProps;
}

const Documents = ({ control, setValue, singleStudent }: DocumentInfoProps) => {
    // Local states for updated file names and URLs
    const [birthCertificateFile, setBirthCertificateFile] = useState<string>(singleStudent?.data?.birthCertificate || "");
    const [transferCertificateFile, setTransferCertificateFile] = useState<string>(singleStudent?.data?.transferCertificate || "");
    const [birthCertificateUrl, setBirthCertificateUrl] = useState<string | null>(singleStudent?.data?.birthCertificate || null);
    const [transferCertificateUrl, setTransferCertificateUrl] = useState<string | null>(singleStudent?.data?.transferCertificate || null);

    // Truncate file names for display
    const extractFileName = (url: string) => {
        return url.split('/').pop() || ''; // Extracts the last part of the URL (the file name)
      };
      
      const truncateFileName = (url: string ) => {
        const fileName = extractFileName(url);
        return fileName
      };

    // Handle file input change
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, field: any, setFileName: React.Dispatch<React.SetStateAction<string>>, setFileUrl: React.Dispatch<React.SetStateAction<string | null>>) => {
        const file = e.target.files?.[0] || null;
        if (file) {
            field.onChange(file);
            setValue(field.name, file);
            setFileName(file.name); // Update file name in state
            const fileUrl = URL.createObjectURL(file); // Create a URL for the file to be displayed in the iframe
            setFileUrl(fileUrl); // Update file URL state
        }
    };

    // Render the iframe with the appropriate file URL
    const renderPdfIframe = (fileUrl: string | null) => {
        if (fileUrl) {
            return (
                <iframe
                    src={fileUrl}
                    width="100%"
                    height="200"
                    frameBorder="0">
                </iframe>
            );
        } else {
            return <p>No file uploaded or preview available.</p>;
        }
    };

    return (
        <div className="p-6">
            <div className="bg-white border rounded-md">
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
                            defaultValue={singleStudent?.data?.birthCertificate || ""}
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
                                        onChange={(e) => handleFileChange(e, field, setBirthCertificateFile, setBirthCertificateUrl)}
                                    />
                                    {field.value && <span className="text-gray-700">{truncateFileName(birthCertificateFile)}</span>}
                                </div>
                            )}
                        />
                        <div className="mt-5">
                            {renderPdfIframe(birthCertificateUrl)}</div> {/* Dynamically renders the iframe */}
                    </div>

                    {/* Transfer Certificate Upload */}
                    <div>
                        <h3 className="font-semibold">Upload Transfer Certificate Document</h3>
                        <p className="text-sm text-gray-500">Upload file size of 4MB, Accepted Format: PDF</p>
                        <Controller
                            name="transferCertificate"
                            control={control}
                            defaultValue={singleStudent?.data?.transferCertificate || ""}
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
                                        onChange={(e) => handleFileChange(e, field, setTransferCertificateFile, setTransferCertificateUrl)}
                                    />
                                    {field.value && <span className="text-gray-700">{truncateFileName(transferCertificateFile)}</span>}
                                </div>
                            )}
                        />
                        <div className="mt-5">
                            {renderPdfIframe(transferCertificateUrl)}</div> {/* Dynamically renders the iframe */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Documents;
