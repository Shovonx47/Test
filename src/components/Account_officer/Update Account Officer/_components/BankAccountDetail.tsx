import { Input } from "@/components/ui/input";
import { Controller } from "react-hook-form";
import { UserRoundCogIcon } from "lucide-react";

interface BankAccountDetails {
    data: {
        accountName?: string;
        accountNumber?: string;
        bankName?: string;
        IFSCCode?: string;
        branchName?: string;
    };
}

interface BankAccountProps {
    control: any;
    setValue: (name: string, value: any) => void;
    trigger: (name: string) => void;
    singleAccountOfficer: BankAccountDetails;
}

const BankAccountDetail = ({ control, setValue, trigger, singleAccountOfficer }: BankAccountProps) => {
    return (
        <div className="p-6 bg-white">
            <div className="border rounded-md">
                <div className="p-4 bg-[#E9EDF4] rounded-md rounded-b-none flex items-center gap-2 mb-5">
                    <UserRoundCogIcon className="w-5 h-5" /> Bank Account Details
                </div>

                <div className="m-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                        { name: "accountName", label: "Account Name", defaultValue: singleAccountOfficer?.data?.accountName || "" },
                        { name: "accountNumber", label: "Account Number", defaultValue: singleAccountOfficer?.data?.accountNumber || "" },
                        { name: "bankName", label: "Bank Name", defaultValue: singleAccountOfficer?.data?.bankName || "" },
                        { name: "IFSCCode", label: "IFSC Code", defaultValue: singleAccountOfficer?.data?.IFSCCode || "" },
                        { name: "branchName", label: "Branch Name", defaultValue: singleAccountOfficer?.data?.branchName || "" }
                    ].map(({ name, label, defaultValue }) => (
                        <div key={name}>
                            <label className="text-sm text-gray-600">{label}</label>
                            <Controller
                                name={name}
                                control={control}
                                defaultValue={defaultValue}
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
                </div>
            </div>
        </div>
    );
};

export default BankAccountDetail;
