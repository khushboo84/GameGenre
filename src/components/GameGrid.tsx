import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames, { Platform } from "../hooks/useGames";
import GameCard from "./GameCard";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = (props: Props) => {
  const { data, error } = useGames(props.gameQuery);
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
