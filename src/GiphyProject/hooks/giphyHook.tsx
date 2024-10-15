import { useEffect, useState } from "react";
import { Giphy, ResponseGiphy } from "../interfaces/card-giphy.interface";
import { getGiphys } from "../helpers/giphy.service";

export const useGiphyHook = (currentSearch: string) => {
  const [giphyes, giphyesState] = useState<Giphy[]>([]);
  const [loading, loadingState] = useState<boolean>(true);
  useEffect(() => {
    getGiphys(currentSearch).then(({ data }: ResponseGiphy) => {
      if (data.length > 0) {
        loadingState(false);
        giphyesState(() => data);
      }
    });
  }, [currentSearch]);

  return {
    loading,
    giphyes,
  };
};
