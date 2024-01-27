import axios from "axios";
export const Backend_Endpoint = "https://qtify-backend-labs.crio.do";
export const fetchTopAlbums = async () => {
  try {
    const response = await axios.get(`${Backend_Endpoint}/albums/top`);
    console.log(response);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
