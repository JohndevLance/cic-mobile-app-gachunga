import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchAssetsData = async () => {
  const response = await axios.get("/api/assets");
  return response.data;
};
export const useAssetsData = () => {
  return useQuery({
    queryKey: ["assets"],
    queryFn: fetchAssetsData,
  });
}