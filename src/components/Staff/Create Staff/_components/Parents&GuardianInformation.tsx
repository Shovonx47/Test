import { Input } from "@/components/ui/input";
import { Controller, useForm } from "react-hook-form";
import { UserRoundCogIcon } from "lucide-react";
import DynamicSelect from "@/components/Reusable/DynamicSelect";

const occupations = [
    "Agricultural Laborer", "Bank Manager", "Construction Worker", "Doctor", "Driver", "Engineer",
    "Factory Worker", "Journalist", "Lawyer", "Mid-Level Manager", "Nurse", "Others",
    "Pharmacist", "School Teacher", "Street Vendor", "University Professor"
];

interface PersonalInfoProps {
    control: any;
    setValue: (name: string, value: any) => void;
    trigger: (name: string) => void; // Added trigger function
}

const ParentsAndGuardianInformation = ({ control, setValue, trigger }: PersonalInfoProps) => {
    return (
        <div className="p-6 bg-white">
            <div className="border rounded-md">
                <div className="p-4 bg-[#E9EDF4] rounded-md rounded-b-none flex items-center gap-2 mb-5">
                    <UserRoundCogIcon className="w-5 h-5" /> Parent's Information
                </div>

                {/* Father's Info */}
                <div className="ml-4">Father’s Info</div>
                <div className="m-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {[
                        { name: "fatherName", label: "Father Name" },
                        { name: "fatherEmail", label: "Father Email" },
                        { name: "fatherContactNumber", label: "Father Contact Number" },
                        { name: "fatherNidNumber", label: "Father NID Number" }
                    ].map(({ name, label }) => (
                        <div key={name}>
                            <label className="text-sm text-gray-600">{label}</label>
                            <Controller
                                name={name}
                                control={control}
                                rules={{ required: `${label} is required` }}
                                render={({ field, fieldState: { error } }) => (
                                    <>
                                        <Input {...field} placeholder={`Enter ${label}`} />
                                        {error && <p className="text-red-500 text-sm">{error.message}</p>}
                                    </>
                                )}
                            />
                        </div>
                    ))}

                    {/* Father's Occupation Select */}
                    <Controller
                        name="fatherOccupation"
                        control={control}
                        rules={{ required: "Father Occupation is required" }}
                        render={({ field, fieldState: { error } }) => (
                            <div>
                                <DynamicSelect
                                    label="Father Occupation"
                                    placeholder="Select Occupation"
                                    options={occupations}
                                    value={field.value}
                                    onChange={(val) => {
                                        setValue("fatherOccupation", val);
                                        trigger("fatherOccupation"); // Remove error when selecting a value
                                    }}
                                />
                                {error && <p className="text-red-500 text-sm">{error.message}</p>}
                            </div>
                        )}
                    />
                </div>

                <div className="border-t mt-6 m-4"></div>

                {/* Mother's Info */}
                <div className="ml-4">Mother's Info</div>
                <div className="m-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {[
                        { name: "motherName", label: "Mother Name" },
                        { name: "motherEmail", label: "Mother Email" },
                        { name: "motherContactNumber", label: "Mother Contact Number" },
                        { name: "motherNidNumber", label: "Mother NID Number" }
                    ].map(({ name, label }) => (
                        <div key={name}>
                            <label className="text-sm text-gray-600">{label}</label>
                            <Controller
                                name={name}
                                control={control}
                                rules={{ required: `${label} is required` }}
                                render={({ field, fieldState: { error } }) => (
                                    <>
                                        <Input {...field} placeholder={`Enter ${label}`} />
                                        {error && <p className="text-red-500 text-sm">{error.message}</p>}
                                    </>
                                )}
                            />
                        </div>
                    ))}

                    {/* Mother's Occupation Select */}
                    <Controller
                        name="motherOccupation"
                        control={control}
                        rules={{ required: "Mother Occupation is required" }}
                        render={({ field, fieldState: { error } }) => (
                            <div>
                                <DynamicSelect
                                    label="Mother Occupation"
                                    placeholder="Select Occupation"
                                    options={occupations}
                                    value={field.value}
                                    onChange={(val) => {
                                        setValue("motherOccupation", val);
                                        trigger("motherOccupation");
                                    }}
                                />
                                {error && <p className="text-red-500 text-sm">{error.message}</p>}
                            </div>
                        )}
                    />
                </div>

                {/* <div className="border-t mt-6 m-4"></div> */}

                {/* Local Guardian's Info */}
                {/* <div className="ml-4">Local Guardian's Info</div>
                <div className="m-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {[
                        { name: "localGuardianName", label: "Local Guardian Name" },
                        { name: "relationshipWithLocalGuardian", label: "Relationship" },
                        { name: "localGuardianEmail", label: "Local Guardian Email" },
                        { name: "localGuardianContactNumber", label: "Local Guardian Contact Number" },
                        { name: "localGuardianNidNumber", label: "Local Guardian NID Number" }
                    ].map(({ name, label }) => (
                        <div key={name}>
                            <label className="text-sm text-gray-600">{label}</label>
                            <Controller
                                name={name}
                                control={control}
                                rules={{ required: `${label} is required` }}
                                render={({ field, fieldState: { error } }) => (
                                    <>
                                        <Input {...field} placeholder={`Enter ${label}`} />
                                        {error && <p className="text-red-500 text-sm">{error.message}</p>}
                                    </>
                                )}
                            />
                        </div>
                    ))}

                    {/* Local Guardian's Occupation Select */}
                    {/* <Controller
                        name="localGuardianOccupation"
                        control={control}
                        rules={{ required: "Local Guardian Occupation is required" }}
                        render={({ field, fieldState: { error } }) => (
                            <div>
                                <DynamicSelect
                                    label="Guardian Occupation"
                                    placeholder="Select Occupation"
                                    options={occupations}
                                    value={field.value}
                                    onChange={(val) => {
                                        setValue("localGuardianOccupation", val);
                                        trigger("localGuardianOccupation");
                                    }}
                                />
                                {error && <p className="text-red-500 text-sm">{error.message}</p>}
                            </div>
                        )}
                    />
                </div> */} 
            </div>
        </div>
    );
};

export default ParentsAndGuardianInformation;
