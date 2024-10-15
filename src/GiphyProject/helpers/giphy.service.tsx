import axios from "axios";

export const getGiphys = async (categorie: string) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=J4r77j8w5TfMYqKkdlYkHW9tayJznEn4&q=${categorie}&limit=6`;
  const { data } = await axios.get(url);
  return data;
};
