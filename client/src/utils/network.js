import axios from "axios"

export const GET = (url, options) => {
  return axios.get(url, options)
}

export const POST = async (url, payload, options) => {
  return await axios.post(url, payload, { ...options, withCredentials: true })
}

export const PATCH = async (url, payload, options) => {
  return await axios.patch(url, payload, { ...options, withCredentials: true })
}

export const DELETE = async (url, headers, data) => {
  return await axios.delete(url, headers, data)
}
export const PUT = async (url, data, config) => {
  return await axios.put(url, data, config)
}
