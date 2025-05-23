// use react query to fetch data from api

import {useQuery} from '@tanstack/react-query';
import axios from 'axios';

const fetchGeneralInsuranceData = async () => {
  const response = await axios.get('/api/general');
  return response.data;
};

export const useGeneralInsuranceData = () => {
  return useQuery({queryKey: ['general'], queryFn: fetchGeneralInsuranceData});
};
