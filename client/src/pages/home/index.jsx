import React, { useRef } from "react";

import CardForm from "../../components/home/CardForm";
import UploadImage from "../../components/home/UploadImage";
import UploadImagePreview from "../../components/home/UploadImagePreview";
import useUploadCard from "../../hooks/useUploadCard";
import useNotificationHook from "../../hooks/useNotificationHook";

const Page = () => {
  const formRef = useRef();
  const [file, setFile] = React.useState(null);
  const notification = useNotificationHook();
  const { mutateAsync } = useUploadCard();

  const handleReset = () => {
    setFile(null);
  };

  const handleImageProcess = async (file) => {
    if (!file) return;
    setFile(file);

    try {
      const formData = new FormData();
      formData.append("card", file);
      if (formRef.current) formRef.current.lockButton(true);
      await mutateAsync(formData, {
        onSuccess: (response) => {
          const { data, success } = response;

          if (!success) {
            return notification().warning(
              "Something went wrong. Try again later!"
            );
          }

          const {
            address,
            email,
            name,
            phone,
            jobTitle = "",
            companyName = "",
          } = data;

          if (formRef.current) {
            formRef.current.setFieldValue("address", address);
            formRef.current.setFieldValue("email", email);
            formRef.current.setFieldValue("name", name);
            formRef.current.setFieldValue("phone", phone);
            formRef.current.setFieldValue("jobTitle", jobTitle);
            formRef.current.setFieldValue("companyName", companyName);
          }
          notification().success("Image processed successfully!");
        },
        onError: (err) => {
          notification().error(`Upload failed: ${err.message}`);
        },
        onSettled: () => {
          if (formRef.current) formRef.current.lockButton(false);
        },
      });
    } catch (error) {
      notification().error(`An unexpected error occurred: ${error.message}`);
    }
  };

  return (
    <section className=" bg-gray-100 overflow-y-scroll h-[calc(100%-72px)]">
      <div className="h-full flex lg:flex-row gap-4 flex-col lg:w-[80%] w-full mx-auto px-10 py-5">
        <div className="lg:w-1/2 w-full flex flex-col gap-3">
          <UploadImage onUpload={handleImageProcess} fileData={file} />
          <div className="h-[300px] max-h-[300px]">
            <UploadImagePreview file={file} />
          </div>
        </div>
        <div className="lg:w-1/2 w-full">
          <CardForm ref={formRef} resetData={handleReset} />
        </div>
      </div>
    </section>
  );
};

export default Page;
