import React from "react";
import useGenre from "../hooks/useGenre";

const GenreList = () => {
  const { genres } = useGenre();
  return (
    <ul>
      {genres.map((g) => (
        <li key={g.count}>{g.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
