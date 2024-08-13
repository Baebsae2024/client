import { baseAPI } from './customApi';

export const postImage = async ({ image }: { image: File | null }) => {
  const formData = new FormData();
  if (image !== null) {
    formData.append('file', image);
  } else {
    formData.append('file', new Blob([]));
  }

  try {
    const response = await baseAPI.post(`/image/`, formData);
    return response.data;
  } catch (e) {
    console.log(e);
    return undefined;
  }
};
