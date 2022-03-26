import axios from "axios";

const url = "http://localhost:8000";

export const getSecret = (hash) => axios.get(`${url}/secret/${hash}`);
export const createSecret = (secretData) =>
  axios.post(`${url}/secret`, secretData);
