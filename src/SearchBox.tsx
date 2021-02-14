import { Box, Input, TextField } from "@material-ui/core";
import React, { ChangeEvent, ChangeEventHandler, useState } from "react";
import SearchButton from "./SearchButton";

export interface SearcBoxProps {
  requestSearch: (query: string) => void;
}

const SearcBox: React.FC<SearcBoxProps> = ({ requestSearch }) => {
  const [query, setQuery] = useState("");

  const searchClick = () => {
    if (query) requestSearch(query);
  };

  const updateQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignContent="center"
      alignItems="center"
      height="100vh"
    >
      <TextField
        type="text"
        variant="outlined"
        placeholder="Search"
        name="search"
        value={query}
        onChange={updateQuery}
      />
      <SearchButton onClick={searchClick} />
    </Box>
  );
};

export default SearcBox;
