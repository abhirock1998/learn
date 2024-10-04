import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { SERVER_URL } from "../constant";
const useCreateUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (userData) => {
      const response = await axios.post(`${SERVER_URL}/users`, userData);
      return response.data;
    },

    onSuccess: (data) => {
      console.log("User created successfully:", data);
      queryClient.invalidateQueries;
      queryClient.invalidateQueries(["cards", 1]);
    },
    onError: (error) => {
      console.error("Error creating user:", error);
    },
  });
};

export default useCreateUser;
