import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { SERVER_URL } from "../constant";

const useGetAllCards = (page = 1) => {
  return useQuery({
    queryKey: [`cards`, page],
    queryFn: async () => {
      const response = await axios.get(
        `${SERVER_URL}/users?page=${page}&limit=10`
      );
      return response.data;
    },
  });
};

export default useGetAllCards;
