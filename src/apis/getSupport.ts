import { baseAPI } from './customApi';

export const getSupport = async () => {
  try {
    const response = await baseAPI.get(`/company/`, {
      headers: {
        'Content-Type': `application/json`,
      },
    });
    return response.data;
  } catch (e) {
    console.log(e);
    return undefined;
  }
};
