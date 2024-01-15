import { axiosTemplate } from '.';

export const getAbout = async () => {
  try {
    const response = await axiosTemplate.get('About');
    return response?.data;
  } catch (err) {
    console.log(err);
  }
};
