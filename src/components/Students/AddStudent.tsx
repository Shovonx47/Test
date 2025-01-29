"use client";
import { useForm } from "react-hook-form";
import PersonalInfo from "./_components/PersonalInfo";
import ParentsAndGuardianInformation from "./_components/Parents&GuardianInformation";
import Siblings from "./_components/Siblings";
import Address from "./_components/Address";

const AddStudentForm = () => {
    const { control, handleSubmit, setValue } = useForm({});

    const onSubmit = (data: any) => {
        console.log("Form Data: ", data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <PersonalInfo control={control} setValue={setValue} />
            <ParentsAndGuardianInformation control={control} setValue={setValue} />
            <Siblings control={control} setValue={setValue} />
            <Address control={control} setValue={setValue} />

            <button type="submit">Submit</button>
        </form>
    );
}

export default AddStudentForm