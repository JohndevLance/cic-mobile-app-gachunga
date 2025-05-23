import { useQuery  }  from "@tanstack/react-query";
import axios from "axios";

const fetchLifeInsuranceData = async () => {
  const response = await axios.get("/api/life");
  return response.data;
};

export const useLifeInsuranceData = () => {
  return useQuery({
    queryKey: ["life"],
    queryFn: fetchLifeInsuranceData,
  });
}