import React from "react";
import useGenre from "../hooks/useGenre";
import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";

const GenreList = () => {
  const { genres } = useGenre();
  return (
    <List>
      {genres.map((g) => (
        <ListItem key={g.count}>
          <HStack>
            <Image
              boxSize="32px"
              borderRadius="5px"
              marginLeft={3}
              marginY={2}
              src={g.image_background}
            ></Image>
            <Text fontSize="lg">{g.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
