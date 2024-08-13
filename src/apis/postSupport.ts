import { FormDatas } from '@/types/support';
import { baseAPI } from './customApi';

export const postSupport = async (formData: FormDatas) => {
  try {
    const response = await baseAPI.post(`/support`, formData);
    return response.data;
  } catch (e) {
    console.log(e);
    return undefined;
  }
};
