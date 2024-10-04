import { useForm } from "react-hook-form";
import Button from "../shared/Button";
import InputField from "../shared/InputField";
import { forwardRef, useImperativeHandle } from "react";
import useCreateUser from "../../hooks/useCreateUser";
import useNotificationHook from "../../hooks/useNotificationHook";

const CardForm = forwardRef(({ resetData }, ref) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm();
  const { isPending, mutateAsync } = useCreateUser();
  const notification = useNotificationHook();

  useImperativeHandle(ref, () => ({
    setFieldValue: (
      field = "name" |
        "jobTitle" |
        "companyName" |
        "email" |
        "phone" |
        "address",
      value
    ) => {
      setValue(field, value);
    },
  }));

  const onSubmit = async (data) => {
    try {
      await mutateAsync(data, {
        onSuccess: (responseData) => {
          notification().success("User created successfully!");
          console.log("Response Data:", responseData);

          reset();
          resetData();
        },
        onError: (error) => {
          notification().error(`Error creating user: ${error.message}`);
        },
      });
    } catch (error) {
      notification().error(`An unexpected error occurred: ${error.message}`);
    }
  };

  return (
    <div ref={ref} className=" w-full p-5 mx-auto">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <InputField
          label="Name"
          id="name"
          register={register("name", {
            required: { value: true, message: "Name is required" },
            minLength: {
              value: 2,
              message: "Name must be at least 2 characters",
            },
          })}
          error={errors.name}
        />

        {/* Job Title field */}
        <InputField
          label="Job Title"
          id="jobTitle"
          register={register("jobTitle", {
            required: { value: true, message: "Job title is required" },
          })}
          error={errors.jobTitle}
        />

        {/* Company Name field */}
        <InputField
          label="Company Name"
          id="companyName"
          register={register("companyName", {
            required: { value: true, message: "Company name is required" },
          })}
          error={errors.companyName}
        />

        {/* Email Address field */}
        <InputField
          label="Email Address"
          id="email"
          type="email"
          register={register("email", {
            required: { value: true, message: "Email is required" },
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Enter a valid email address",
            },
          })}
          error={errors.email}
        />

        {/* Phone Number field */}
        <InputField
          label="Phone Number"
          id="phone"
          type="tel"
          register={register("phone", {
            required: { value: true, message: "Phone number is required" },
            pattern: {
              value: /^[0-9]{10,15}$/,
              message: "Enter a valid phone number",
            },
          })}
          error={errors.phone}
        />

        {/* Address field */}
        <InputField
          label="Address"
          id="address"
          register={register("address", {
            required: { value: true, message: "Address is required" },
            minLength: {
              value: 5,
              message: "Address must be at least 5 characters",
            },
          })}
          error={errors.address}
        />
        {/* Submit Button */}
        <Button disabled={isPending} type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
});

export default CardForm;
