import { Badge } from "@chakra-ui/react";
import React from "react";

interface Props {
  //to recive the score
  score: number;
}

const CriticScore = (props: Props) => {
  let color = props.score > 90 ? "green" : props.score > 80 ? "yellow" : "";
  return (
    <Badge fontSize={14} paddingX={2} colorScheme={color}>
      {props.score}
    </Badge>
  );
};

export default CriticScore;
