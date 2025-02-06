import { Controller } from "react-hook-form";
import { NotebookTabs } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import DynamicSelect from "@/components/Reusable/DynamicSelect";



interface PreviousSchoolProps {
    data:{
        previousSchoolName: string
        previousSchoolAddress: string
        previousClassName: string
        previousClassGpa: string
    }
}

interface PreviousSchoolInfoProps {
    control: any;
    setValue: (name: string, value: any) => void;
    watch: (name: string, defaultValue?: any) => any;
    trigger: (name?: string | string[]) => void;
    singleStudent: PreviousSchoolProps
}



const classes = ["I", "II", "III"];

const PreviousSchoolDetails = ({ control, setValue, watch, trigger, singleStudent }: PreviousSchoolInfoProps) => {
    const isPreviousSchool = watch("previousSchool", true);

    return (
        <div className="p-6 bg-white">
            <div className="border rounded-md">
                <div className="p-4 bg-[#E9EDF4] rounded-md rounded-b-none flex justify-between items-center gap-2 mb-5">
                    <div className="flex items-center gap-2">
                        <NotebookTabs className="h-5 w-5" /> Previous School Details
                    </div>
                    <Controller
                        name="previousSchool"
                        control={control}
                        defaultValue={true}
                        render={({ field }) => (
                            <Switch
                                checked={field.value ?? true}
                                onCheckedChange={(checked) => {
                                    field.onChange(checked);
                                    setValue("previousSchool", checked);
                                    if (checked) {
                                        trigger(["previousSchoolName", "previousSchoolAddress", "previousClassName", "previousClassGpa"]);
                                    }
                                }}
                            />
                        )}
                    />
                </div>

                {isPreviousSchool && (
                    <div className="m-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Route Select */}

                        <div>
                            <label className="text-sm text-gray-600">School Name </label>
                            <Controller
                                name="previousSchoolName"
                                control={control}
                                defaultValue={singleStudent?.data?.previousSchoolName}
                                rules={{ required: "School name is required" }}
                                render={({ field, fieldState: { error } }) => (
                                    <div>
                                        <Input
                                            {...field}
                                            placeholder="Add school name"
                                            onChange={(e) => {
                                                field.onChange(e.target.value);
                                                trigger("previousSchoolName"); // Revalidate field
                                            }}
                                        />
                                        {error && <p className="text-red-500 text-sm">{error.message}</p>}
                                    </div>
                                )}
                            />
                        </div>
                        <div>
                            <Controller
                                name="previousClassName"
                                control={control}
                                defaultValue={singleStudent?.data?.previousClassName}
                                rules={{ required: "Class name is required" }}
                                render={({ field, fieldState: { error } }) => (
                                    <div>
                                        <DynamicSelect
                                            {...field}
                                            label="Previous Class Name"
                                            placeholder="Select Class"
                                            options={classes}
                                            value={field.value}
                                            onChange={(val) => {
                                                 setValue("previousClassName", val);
                                                trigger("previousClassName"); // Revalidate field
                                            }}
                                        />
                                        {error && <p className="text-red-500 text-sm">{error.message}</p>}
                                    </div>
                                )}
                            />
                        </div>
                        <div>
                            <label className="text-sm text-gray-600">GPA (Optional) </label>
                            <Controller
                                name="previousClassGpa"
                                control={control}
                                defaultValue={singleStudent?.data?.previousClassGpa}
                                render={({ field }) => (
                                    <div>
                                        <Input
                                            {...field}
                                            placeholder="Add your gpa"
                                            onChange={(e) => {
                                                field.onChange(e.target.value)
                                            }} />
                                    </div>
                                )}
                            />
                        </div>

                        {/* address Select */}
                        <div>
                            <label className="text-sm text-gray-600">Address</label>
                            <Controller
                                name="previousSchoolAddress"
                                control={control}
                                defaultValue={singleStudent?.data?.previousSchoolAddress}
                                rules={{ required: "School address is required" }}
                                render={({ field, fieldState: { error } }) => (
                                    <div>
                                        <Input
                                            {...field}

                                            placeholder="Add school address"
                                            onChange={(e) => {
                                                field.onChange(e.target.value);
                                                trigger("previousSchoolAddress"); // Revalidate field
                                            }}
                                        />
                                        {error && <p className="text-red-500 text-sm">{error.message}</p>}
                                    </div>
                                )}
                            />
                        </div>


                    </div>
                )}
            </div>
        </div>
    );
};

export default PreviousSchoolDetails;


