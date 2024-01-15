import axios from 'axios';

export const axiosTemplate = axios.create({
  baseURL: 'https://c141-admin-api.eynullabeyli.com/api/',
});
