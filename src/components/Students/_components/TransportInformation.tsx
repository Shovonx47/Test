
import { Controller } from "react-hook-form";
import { NotebookTabs } from "lucide-react";
import DynamicSelect from "@/components/Reusable/DynamicSelect";


const academicYears = ["June 2024/25", "July 2025/26"];

interface PersonalInfoProps {
    control: any; // control from useForm
    setValue: (name: string, value: any) => void;
}

const TransportInformation = ({ control, setValue }: PersonalInfoProps) => {
    return (
        <div className="p-6 bg-white">

            <div className="border rounded-md">
                <div className="p-4 bg-[#E9EDF4] rounded-md rounded-b-none flex items-center gap-2 mb-5">
                    <NotebookTabs className="h-5 w-5" /> Transport Information
                </div>
                <div className="m-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Academic Year Select */}

                    {/* Admission Number */}
                    <Controller
                        name="route"
                        control={control}
                        render={({ field }) => (
                            <DynamicSelect
                                label="Route"
                                placeholder="Select route"
                                options={academicYears}
                                value={field.value}
                                onChange={(value: string) => setValue("route", value)} // single value is passed to onChange
                            />
                        )}
                    />
                    <Controller
                        name="vehicleNumber"
                        control={control}
                        render={({ field }) => (
                            <DynamicSelect
                                label="Vehicle Number"
                                placeholder="Select Vehicle Number"
                                options={academicYears}
                                value={field.value}
                                onChange={(value: string) => setValue("vehicleNumber", value)} // single value is passed to onChange
                            />
                        )}
                    />
                    <Controller
                        name="pickupPoint"
                        control={control}
                        render={({ field }) => (
                            <DynamicSelect
                                label="Pickup Point"
                                placeholder="Select Pickup Point"
                                options={academicYears}
                                value={field.value}
                                onChange={(value: string) => setValue("pickupPoint", value)} // single value is passed to onChange
                            />
                        )}
                    />
                    

                </div>
            </div>
        </div>
    );
};

export default TransportInformation;
