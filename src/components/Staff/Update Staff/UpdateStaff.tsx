"use client";
import { useForm } from "react-hook-form";
import PersonalInfo from "./_components/PersonalInfo";
import ParentsAndGuardianInformation from "./_components/Parents&GuardianInformation";
import Address from "./_components/Address";
import TransportInformation from "./_components/TransportInformation";
import PreviousSchoolDetails from "./_components/PreviousSchoolDetails";
import { Button } from "../../ui/button";
import HostelInformation from "./_components/HostelInformation";
import Documents from "./_components/Documents";
import uploadFile from "@/Helper/uploadFile";
import { toast } from "sonner";
import LoadingSpinner from "@/components/Loader";
import PayrollInformation from "./_components/Payroll";
import BankAccountDetail from "./_components/BankAccountDetail";
import { useGetSingleStaffQuery, useUpdateStaffMutation } from "@/redux/api/Staff/staffApi";



const formSections = [
    PersonalInfo,
    PayrollInformation,
    ParentsAndGuardianInformation,
    Address,
    BankAccountDetail,
    TransportInformation,
    HostelInformation,
    PreviousSchoolDetails,
    Documents
];

const UpdateStaffForm = () => {
    const id = "67ac671421b2c70944c5c083"

    const { control, handleSubmit, setValue, watch, trigger } = useForm({});

    const { data: singleStaff, isLoading, refetch } = useGetSingleStaffQuery(id)

    const [updateStaff, { isLoading: updateLoading }] = useUpdateStaffMutation()

    const onSubmit = async (data: any) => {

        // Upload files and update data
        const profileImage = await uploadFile(data.profileImage);
        const resume = await uploadFile(data.resume);
        const joiningLetter = await uploadFile(data.joiningLetter);

        data.profileImage = profileImage?.secure_url;
        data.resume = resume?.secure_url;
        data.joiningLetter = joiningLetter?.secure_url;

        try {

            const values = {
                id,
                data
            }

            const response = await updateStaff(values).unwrap();

            if (response.success) {
                toast.success(response.message);
                refetch()
            } else if (response.success === false && response.errorSources) {
                // Extract error messages from errorSources array
                const errorMessage = response.errorSources.map((err: any) => err.message).join(", ");
                toast.error(errorMessage);
            }
        } catch (error: any) {
            let errorMessage = "Network error, please try again!";
            // Check if error contains data with specific error messages
            if (error?.data?.errorSources) {
                errorMessage = error.data.errorSources.map((err: any) => err.message).join(", ");
            } else if (error?.data?.message) {
                errorMessage = error.data.message;
            }

            toast.error(errorMessage);
        }
    };


    if (isLoading) {
        return <LoadingSpinner />
    }

    return (


        <form onSubmit={handleSubmit(onSubmit)}>
            {formSections.map((Component, index) => (
                <Component key={index} control={control} setValue={setValue} watch={watch} trigger={trigger} singleStaff={singleStaff} />
            ))}

            <div className="flex justify-end m-10">
                <Button
                    disabled={updateLoading}
                    variant="default" type="submit">
                    {
                        updateLoading ? "Submitting..." :
                            "Submit"
                    } </Button>
            </div>
        </form>

    );
}

export default UpdateStaffForm