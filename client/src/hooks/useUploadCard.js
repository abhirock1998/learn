import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { SERVER_URL } from "../constant";

const useUploadCard = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (formData) => {
      const response = await axios.post(`${SERVER_URL}/ocr/upload`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data;
    },
    onSuccess: () => {
      // Invalidate and refetch the cards query after a successful upload
      queryClient.invalidateQueries(["cards"]);
    },
    onError: (error) => {
      console.error("Error uploading card:", error);
    },
  });
};

export default useUploadCard;
