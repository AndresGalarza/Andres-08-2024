import axios from "axios";

const baseUrl = "https://pokeapi.co/api/v2";

export function useApi() {
  async function getData(endpoint, params = {}) {
    try {
      const queryParams = new URLSearchParams(params).toString();
      const response = await axios.get(`${baseUrl}/${endpoint}?${queryParams}`);
      return response.data;
    } catch (error) {
      console.error("Error making GET request:", error);
      throw error;
    }
  }

  return {
    getData,
  };
}
