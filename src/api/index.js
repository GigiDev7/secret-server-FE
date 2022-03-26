import axios from "axios";

const url = "https://secret-task.herokuapp.com";

export const getSecret = (hash) => axios.get(`${url}/secret/${hash}`);
export const createSecret = (secretData) =>
  axios.post(`${url}/secret`, secretData);
