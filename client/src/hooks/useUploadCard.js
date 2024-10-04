import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { SERVER_URL } from "../constant";

const useUploadCard = () => {
  return useMutation({
    mutationFn: async (formData) => {
      const response = await axios.post(`${SERVER_URL}/ocr/upload`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data;
    },

    onError: (error) => {
      console.error("Error uploading card:", error);
    },
  });
};

export default useUploadCard;
