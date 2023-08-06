import React from "react";
import useGenre, { Genre } from "../hooks/useGenre";
import useData from "../hooks/useData";
import { Button, HStack, Image, List, ListItem, Text } from "@chakra-ui/react";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}
const GenreList = (props: Props) => {
  const { data } = useGenre();
  return (
    <List>
      {data.map((g) => (
        <ListItem key={g.id}>
          <HStack>
            <Image
              boxSize="32px"
              borderRadius="5px"
              marginLeft={3}
              marginY={2}
              src={g.image_background}
            ></Image>
            <Button
              fontSize="lg"
              variant="link"
              onClick={() => props.onSelectGenre(g)}
            >
              {g.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
