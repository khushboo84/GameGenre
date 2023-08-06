import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import { Genre } from "../hooks/useGenre";

interface Props {
  selectedGenre: Genre | null;
}

const GameGrid = (props: Props) => {
  const { data, error } = useGames(props.selectedGenre);
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding="10px"
        spacing={5}
      >
        {data.map((data) => (
          <GameCard key={data.id} game={data} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
