import { Game } from "./useGames";
import useData from "./useData";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

//using usedata here to hide endpoint - /genre from design component
const useGenre = () => useData<Genre>("/genres");

export default useGenre;
