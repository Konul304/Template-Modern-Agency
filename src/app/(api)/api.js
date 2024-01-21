import { axiosTemplate } from '.';

export const getAbout = async () => {
  try {
    const response = await axiosTemplate.get('About');
    return response?.data;
  } catch (err) {
    console.log(err);
  }
};

export const getPartners = async () => {
  try {
    const response = await axiosTemplate.get('Partner');
    return response?.data;
  } catch (err) {
    console.log(err);
  }
};

export const getTeamMembers = async () => {
  try {
    const response = await axiosTemplate.get('TeamMembers');
    return response?.data;
  } catch (err) {
    console.log(err);
  }
};
