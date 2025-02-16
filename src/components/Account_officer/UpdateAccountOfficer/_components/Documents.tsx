import { Controller } from "react-hook-form";
import { FilePlus2 } from "lucide-react";
import { useState } from "react";

interface DocumentProps {
    data: {
        resume: string;
        joiningLetter: string;
    };
}

interface DocumentInfoProps {
    control: any;
    setValue: (name: string, value: any) => void;
    singleAccountOfficer: DocumentProps;
}

const Documents = ({ control, setValue, singleAccountOfficer }: DocumentInfoProps) => {
    // Local states for updated file names and URLs
    const [resumeFile, setResumeFile] = useState<string>(singleAccountOfficer?.data?.resume || "");
    const [joiningLetterFile, setJoiningLetterFile] = useState<string>(singleAccountOfficer?.data?.joiningLetter || "");
    const [resumeUrl, setResumeUrl] = useState<string | null>(singleAccountOfficer?.data?.resume || null);
    const [joiningLetterUrl, setJoiningLetterUrl] = useState<string | null>(singleAccountOfficer?.data?.joiningLetter || null);

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
                        <h3 className="font-semibold"> Upload Resume</h3>
                        <p className="text-sm text-gray-500">Upload file, Accepted Format: PDF</p>
                        <Controller
                            name="resume"
                            control={control}
                            defaultValue={singleAccountOfficer?.data?.resume || ""}
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
                                        onChange={(e) => handleFileChange(e, field, setResumeFile, setResumeUrl)}
                                    />
                                    {field.value && <span className="text-gray-700">{truncateFileName(resumeFile)}</span>}
                                </div>
                            )}
                        />
                        <div className="mt-5">
                            {renderPdfIframe(resumeUrl)}</div> {/* Dynamically renders the iframe */}
                    </div>

                    {/* Transfer Certificate Upload */}
                    <div>
                        <h3 className="font-semibold">Upload Joining Letter</h3>
                        <p className="text-sm text-gray-500">Upload file, Accepted Format: PDF</p>
                        <Controller
                            name="joiningLetter"
                            control={control}
                            defaultValue={singleAccountOfficer?.data?.joiningLetter || ""}
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
                                        onChange={(e) => handleFileChange(e, field, setJoiningLetterFile, setJoiningLetterUrl)}
                                    />
                                    {field.value && <span className="text-gray-700">{truncateFileName(joiningLetterFile)}</span>}
                                </div>
                            )}
                        />
                        <div className="mt-5">
                            {renderPdfIframe(joiningLetterUrl)}</div> {/* Dynamically renders the iframe */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Documents;
