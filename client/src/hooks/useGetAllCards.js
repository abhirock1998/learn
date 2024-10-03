import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { SERVER_URL } from "../constant";

const useGetAllCards = () => {
  return useQuery(["cards"], async () => {
    const response = await axios.get(`${SERVER_URL}/cards`);
    return response.data;
  });
};

export default useGetAllCards;
