import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";

let params = {
  client_id: "9csalAi_KlvP5jkXf-l5H6AABrR3GiX2FK7QvqD9kiA",
  query: "",
  page: "",
  per_page: 12,
};

export async function getImages(query,
                                page) {
  params.query = query;
  params.page = page;
  
  const response = await axios.get("/search/photos",
                                   {
                                     params: params,
                                   });
  
  return response.data;
}