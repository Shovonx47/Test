"use client";

import { Input } from "@/components/ui/input";
import { Controller, useFieldArray } from "react-hook-form";
import { Trash2, SquarePlus, NotebookTabs } from "lucide-react";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { DatePickerForm } from "@/components/Reusable/DatePickerForm";

interface PersonalInfoProps {
    control: any;
    watch: any;
    getValues: any;
    setValue: (name: string, value: any) => void;
    trigger: (name?: string | string[]) => void;
}

const Experiences = ({ control, setValue, trigger, watch, getValues }: PersonalInfoProps) => {
    const hasExperience = watch("hasExperience", true);

    // UseFieldArray to handle dynamic experience fields
    const { fields, append, remove, replace } = useFieldArray({
        control,
        name: "experiences",
    });

    // Ensure at least one experience field is initialized
    useEffect(() => {
        if (hasExperience) {
            if (fields.length === 0) {
                replace([{ organizationName: "", startDate: "", endDate: "", designation: "", address: "" }]);
            }
        } else {
            replace([]); // Clear all experiences when "No" is selected
        }
    }, [hasExperience, replace, fields.length]);

    return (
        <div className="p-6 bg-white">
            <div className="border rounded-md">
                <div className="p-4 bg-[#E9EDF4] rounded-md rounded-b-none flex justify-between items-center gap-2 mb-5">
                    <div className="flex items-center gap-2">
                        <NotebookTabs className="h-5 w-5" /> Experience ( If Any)
                    </div>
                    <Controller
                        name="hasExperience"
                        control={control}
                        defaultValue={true}
                        render={({ field }) => (
                            <Switch
                                checked={field.value ?? true}
                                onCheckedChange={(checked: boolean) => {
                                    field.onChange(checked);
                                    setValue("hasExperience", checked);
                                    if (checked) {
                                        trigger(["organizationName", "startDate", "endDate", "designation", "address"]);
                                    }
                                }}
                            />
                        )}
                    />
                </div>

                {hasExperience && (
                    <div className="m-4">
                        {fields.map((field, index) => (
                            <div key={field.id} className="lg:flex justify-between gap-x-4 mb-4">
                                {/* Organization Name */}
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 w-full">
                                    <div>
                                        <label className="text-sm text-gray-600">Organization Name</label>
                                        <Controller
                                            name={`experiences.${index}.organizationName`}
                                            control={control}
                                            rules={{ required: "Organization Name is required" }}
                                            render={({ field, fieldState: { error } }) => (
                                                <div>
                                                    <Input {...field} placeholder="Enter organization name" />
                                                    {error && <p className="text-red-500 text-sm">{error.message}</p>}
                                                </div>
                                            )}
                                        />
                                    </div>

                                    {/* Start Date */}

                                    {/* <label className="text-sm text-gray-600">Start Date</label>
                                    <Controller
                                        name={`experiences.${index}.startDate`}
                                        control={control}
                                        rules={{ required: "Start Date is required" }}
                                        render={({ field, fieldState: { error } }) => (
                                            <div>
                                                <Input {...field} type="date" />
                                                {error && <p className="text-red-500 text-sm">{error.message}</p>}
                                            </div>
                                        )}
                                    /> */}

                                    {/* Start Date */}
                                    <Controller
                                        name={`experiences.${index}.startDate`}
                                        control={control}
                                        rules={{
                                            required: "Start Date is required",
                                            validate: (value) => {
                                                const endDate = getValues(`experiences.${index}.endDate`);
                                                if (endDate && value > endDate) {
                                                    return "Start Date cannot be greater than End Date.";
                                                }
                                                return true;
                                            },
                                        }}
                                        render={({ field, fieldState: { error } }) => (
                                            <div>
                                                <DatePickerForm
                                                    value={field.value}
                                                    onChange={(formattedDate) => {
                                                        setValue(`experiences.${index}.startDate`, formattedDate);
                                                        trigger(`experiences.${index}.startDate`);
                                                        trigger(`experiences.${index}.endDate`); // Revalidate End Date
                                                    }}
                                                    label="Start Date"
                                                />
                                                {error && <p className="text-red-500 text-sm">{error.message}</p>}
                                            </div>
                                        )}
                                    />

                                    {/* End Date */}
                                    <Controller
                                        name={`experiences.${index}.endDate`}
                                        control={control}
                                        rules={{
                                            required: "End Date is required",
                                            validate: (value) => {
                                                const startDate = getValues(`experiences.${index}.startDate`);
                                                if (startDate && value < startDate) {
                                                    return "End Date cannot be earlier than Start Date.";
                                                }
                                                return true;
                                            },
                                        }}
                                        render={({ field, fieldState: { error } }) => (
                                            <div>
                                                <DatePickerForm
                                                    value={field.value}
                                                    onChange={(formattedDate) => {
                                                        setValue(`experiences.${index}.endDate`, formattedDate);
                                                        trigger(`experiences.${index}.startDate`); // Revalidate Start Date
                                                        trigger(`experiences.${index}.endDate`);
                                                    }}
                                                    label="End Date"
                                                />
                                                {error && <p className="text-red-500 text-sm">{error.message}</p>}
                                            </div>
                                        )}
                                    />


                                    {/* Designation */}
                                    <div>
                                        <label className="text-sm text-gray-600">Designation</label>
                                        <Controller
                                            name={`experiences.${index}.designation`}
                                            control={control}
                                            rules={{ required: "Designation is required" }}
                                            render={({ field, fieldState: { error } }) => (
                                                <div>
                                                    <Input {...field} placeholder="Enter designation" />
                                                    {error && <p className="text-red-500 text-sm">{error.message}</p>}
                                                </div>
                                            )}
                                        />
                                    </div>

                                    {/* Address */}
                                    <div>
                                        <label className="text-sm text-gray-600">Address</label>
                                        <Controller
                                            name={`experiences.${index}.address`}
                                            control={control}
                                            rules={{ required: "Address is required" }}
                                            render={({ field, fieldState: { error } }) => (
                                                <div>
                                                    <Input {...field} placeholder="Enter address" />
                                                    {error && <p className="text-red-500 text-sm">{error.message}</p>}
                                                </div>
                                            )}
                                        />
                                    </div>
                                </div>

                                {/* Delete Button */}
                                <div className="flex items-end mt-4 lg:mt-0">
                                    <Button
                                        type="button"
                                        onClick={() => remove(index)}
                                        variant="destructive"
                                        className="flex items-center gap-2"
                                        disabled={fields.length === 1} // Prevent removing the last experience
                                    >
                                        <Trash2 size={16} />
                                    </Button>
                                </div>
                            </div>
                        ))}

                        {/* Add Experience Button */}
                        <Button
                            type="button"
                            onClick={() => append({ organizationName: "", startDate: "", endDate: "", designation: "", address: "" })}
                            className="mb-4"
                        >
                            <SquarePlus /> Add Experience
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Experiences;