import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";

interface Props {
  game: Game;
}

const GameCard = (props: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={props.game.background_image}></Image>
      <CardBody>
        <Heading fontSize="2xl">{props.game.name}</Heading>
        <PlatformIconList
          platforms={props.game.parent_platforms.map((p) => p.platform)}
        />
        <CriticScore score={props.game.metacritic} />
      </CardBody>
    </Card>
  );
};

export default GameCard;
