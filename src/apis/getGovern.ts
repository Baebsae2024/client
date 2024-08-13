import { baseAPI } from './customApi';

export const getGovern = async ({ title }: { title: string }) => {
  try {
    const response = await baseAPI.get(`/govern/?title=${title}`);
    return response.data;
  } catch (e) {
    console.log(e);
    return undefined;
  }
};
