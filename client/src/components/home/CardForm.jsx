import { useForm } from "react-hook-form";
import Button from "../shared/Button";
import InputField from "../shared/InputField";

const CardForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <div className="max-w-lg mx-auto p-5">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <InputField
          label="Name"
          id="name"
          register={register}
          required={{ value: true, message: "Name is required" }}
          error={errors.name}
        />

        <InputField
          label="Job Title"
          id="jobTitle"
          register={register}
          required={{ value: true, message: "Job title is required" }}
          error={errors.jobTitle}
        />

        <InputField
          label="Company Name"
          id="companyName"
          register={register}
          required={{ value: true, message: "Company name is required" }}
          error={errors.companyName}
        />

        <InputField
          label="Email Address"
          id="email"
          type="email"
          register={register}
          required={{
            value: true,
            message: "Email is required",
          }}
          error={errors.email}
        />

        <InputField
          label="Phone Number"
          id="phone"
          type="tel"
          register={register}
          required={{ value: true, message: "Phone number is required" }}
          error={errors.phone}
        />

        <TextareaField
          label="Address"
          id="address"
          register={register}
          required={{ value: true, message: "Address is required" }}
          error={errors.address}
        />

        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default CardForm;
