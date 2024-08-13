import { baseAPI } from './customApi';

export const getCaution = async () => {
  try {
    const response = await baseAPI.get(`/caution/`, {
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
