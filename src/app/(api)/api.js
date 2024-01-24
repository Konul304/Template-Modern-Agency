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

export const getPortfolio = async () => {
	try {
		const response = await axiosTemplate.get('Presentation');
		return response?.data;
	} catch (err) {
		console.log(err);
	}
};

export const getVideos = async () => {
	try {
		const response = await axiosTemplate.get('Video');
		return response?.data;
	} catch (err) {
		console.log(err);
	}
};

export const getContactData = async () => {
	try {
		const response = await axiosTemplate.get('Contact');
		return response?.data;
	} catch (err) {
		console.log(err);
	}
};

export const getCases = async () => {
	try {
		const response = await axiosTemplate.get('Case');
		return response?.data;
	} catch (err) {
		console.log(err);
	}
};

export const getServices = async () => {
	try {
		const response = await axiosTemplate.get('Services');
		return response?.data;
	} catch (err) {
		console.log(err);
	}
};
