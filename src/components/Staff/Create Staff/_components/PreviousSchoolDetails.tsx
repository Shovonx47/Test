

import { Controller } from "react-hook-form";
import { NotebookTabs } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import DynamicSelect from "@/components/Reusable/DynamicSelect";


interface PersonalInfoProps {
    control: any;
    setValue: (name: string, value: any) => void;
    watch: (name: string, defaultValue?: any) => any;
    trigger: (name?: string | string[]) => void;
}



const classes = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII"];

const PreviousSchoolDetails = ({ control, setValue, watch, trigger }: PersonalInfoProps) => {
    const isPreviousSchool = watch("previousSchool", true);

    return (
        <div className="p-6 bg-white">
            <div className="border rounded-md">
                <div className="p-4 bg-[#E9EDF4] rounded-md rounded-b-none flex justify-between items-center gap-2 mb-5">
                    <div className="flex items-center gap-2">
                        <NotebookTabs className="h-5 w-5" /> Previous School Details ( If Any)
                    </div>
                    <Controller
                        name="previousSchool"
                        control={control}
                        defaultValue={true}
                        render={({ field }) => (
                            <Switch
                                checked={field.value ?? true}
                                onCheckedChange={(checked: boolean) => {
                                    field.onChange(checked);
                                    setValue("previousSchool", checked);
                                    if (checked) {
                                        trigger(["previousSchoolName", "previousSchoolPosition", "previousSchoolRating", "previousSchoolAddress"]);
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
                                name="previousSchoolPosition"
                                control={control}
                                rules={{ required: "Position is required" }}
                                render={({ field, fieldState: { error } }) => (
                                    <div>
                                        <DynamicSelect
                                            {...field}
                                            label="Previous School Position"
                                            placeholder="Select position"
                                            options={classes}
                                            value={field.value}
                                            onChange={(val) => {
                                                setValue("previousSchoolPosition", val);
                                                trigger("previousSchoolPosition"); // Revalidate field
                                            }}
                                        />
                                        {error && <p className="text-red-500 text-sm">{error.message}</p>}
                                    </div>
                                )}
                            />
                        </div>
                        <div>
                            <label className="text-sm text-gray-600">Rating (Optional) </label>
                            <Controller
                                name="previousSchoolRating"
                                control={control}
                                render={({ field }) => (
                                    <div>
                                        <Input
                                            {...field}
                                            placeholder="Add your rating"
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


