import axios from "axios";

export const GET = async (url, options) => {
  return await axios.get(url, options);
};

export const POST = async (url, payload, options) => {
  return await axios.post(url, payload, { ...options, withCredentials: true });
};

export const PATCH = async (url, payload, options) => {
  return await axios.patch(url, payload, { ...options, withCredentials: true });
};

export const DELETE = async (url, headers, data) => {
  return await axios.delete(url, headers, data);
};
