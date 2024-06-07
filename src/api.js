import axios from "axios";

const SearchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID RlY3dlPkcg3VeLFOVZLzNGby7nd0BLOyI14Z6zNqO3Q",
    },
    params: {
      query: term,
    },
  });
  // console.log(response);
  return response.data.results;
};
export default SearchImages;
