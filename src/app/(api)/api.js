import { axiosTemplate } from ".";

export const getAbout = async () => {
  try {
    const response = await axiosTemplate.get("About");
    return response?.data;
  } catch (err) {
    console.log(err);
  }
};

export const getPartners = async () => {
  try {
    const response = await axiosTemplate.get("Partner");
    return response?.data;
  } catch (err) {
    console.log(err);
  }
};

export const getTeamMembers = async () => {
  try {
    const response = await axiosTemplate.get("TeamMembers");
    return response?.data;
  } catch (err) {
    console.log(err);
  }
};

export const getPortfolio = async () => {
  try {
    const response = await axiosTemplate.get("Presentation");
    return response?.data;
  } catch (err) {
    console.log(err);
  }
};

export const getVideos = async () => {
  try {
    const response = await axiosTemplate.get("Video");
    return response?.data;
  } catch (err) {
    console.log(err);
  }
};

export const getContactData = async () => {
  try {
    const response = await axiosTemplate.get("Contact");
    return response?.data;
  } catch (err) {
    console.log(err);
  }
};

export const getCases = async () => {
  try {
    const response = await axiosTemplate.get("Case");
    return response?.data;
  } catch (err) {
    console.log(err);
  }
};

export const getServices = async () => {
  try {
    const response = await axiosTemplate.get("Services");
    return response?.data;
  } catch (err) {
    console.log(err);
  }
};

export const getSlider = async () => {
  try {
    const response = await axiosTemplate.get("Slider");
    return response?.data;
  } catch (err) {
    console.log(err);
  }
};

export const postMessage = async (data) => {
  try {
    const res = await axiosTemplate.post(`Message`, data);
    return res?.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const postEmail = async (data) => {
  try {
    const res = await axiosTemplate.post(`Email`, data);
    return res?.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const getPresentationInfo = async () => {
  try {
    const response = await axiosTemplate.get("PresentationInfo");
    return response?.data;
  } catch (err) {
    console.log(err);
  }
};

export const getLogo = async () => {
  try {
    const response = await axiosTemplate.get("WebSiteLogo");
    return response?.data;
  } catch (err) {
    console.log(err);
  }
};

export const getStatistics = async () => {
  try {
    const response = await axiosTemplate.get("Statistic");
    return response?.data;
  } catch (err) {
    console.log(err);
  }
};

export const getTestimonials = async () => {
  try {
    const response = await axiosTemplate.get("Testimonial");
    return response?.data;
  } catch (err) {
    console.log(err);
  }
};

export const getServiceDetail = async () => {
  try {
    const response = await axiosTemplate.get("ServiceDetail");
    return response?.data;
  } catch (err) {
    console.log(err);
  }
};

export const getServiceFAQ = async () => {
  try {
    const response = await axiosTemplate.get("ServiceFAQ");
    return response?.data;
  } catch (err) {
    console.log(err);
  }
};
