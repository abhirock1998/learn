import React from "react";

import Navbar from "../../components/shared/Navbar";
import Button from "../../components/shared/Button";
import UploadImage from "../../components/home/UploadImage";
import UploadImagePreview from "../../components/home/UploadImagePreview";
import useUploadCard from "../../hooks/useUploadCard";
import useNotificationHook from "../../hooks/useNotificationHook";

const Page = () => {
  const [file, setFile] = React.useState(null);
  const notification = useNotificationHook();
  const { isPending, mutateAsync } = useUploadCard();
  const [responseData, setResponseData] = React.useState(null);

  const handleReset = () => {
    setFile(null);
    setResponseData(null);
  };

  const handleImageProcess = async () => {
    if (!file) return;

    try {
      const formData = new FormData();
      formData.append("card", file);
      await mutateAsync(formData, {
        onSuccess: () => {
          notification().success("Image proicess successfully!");
        },
        onError: (err) => {
          notification().error(`Upload failed: ${err.message}`);
        },
      });
    } catch (error) {
      notification().error(`An unexpected error occurred: ${error.message}`);
    }
  };

  return (
    <section className="h-full bg-gray-100 overflow-y-scroll">
      <Navbar />
      <div className="h-full mt-[60px] py-10 flex flex-col md:w-[80%] w-[90%] mx-auto">
        <div className="w-full flex justify-center md:flex-row flex-col gap-4 border border-gray-200 md:h-[50%] transition-all duration-200 shadow-2xl rounded-md">
          <div className="md:w-1/2 p-5">
            <UploadImage onUpload={setFile} fileData={file} />
          </div>
          {/* max-h-[25rem] max-h-[25rem] */}
          <div className="md:w-1/2 md:h-auto  flex items-center">
            <UploadImagePreview file={file} />
          </div>
        </div>
        {file && (
          <>
            <div className="my-10 flex justify-center items-center">
              {responseData ? (
                <Button
                  disabled={isPending}
                  className="w-[100px]"
                  onClick={handleReset}
                >
                  Reset
                </Button>
              ) : (
                <Button className="w-[200px]" onClick={handleImageProcess}>
                  Process Image
                </Button>
              )}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Page;
