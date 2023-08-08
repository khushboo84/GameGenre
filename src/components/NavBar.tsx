import { HStack, Image } from "@chakra-ui/react";
import React from "react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Search {
  onSearch: (searchText: string) => void;
}

const NavBar = (props: Search) => {
  return (
    <HStack justifyContent={"space-between"} padding="4px">
      <Image src={logo} boxSize="60px"></Image>
      <SearchInput onSearch={props.onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
