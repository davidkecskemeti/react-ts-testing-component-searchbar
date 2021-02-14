import { Button } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

export interface SearchButtonProps {
  onClick: () => void;
}

const SearchButton: React.FC<SearchButtonProps> = ({ onClick }) => {
  return (
    <Button data-testid="search-button" onClick={onClick}>
      <SearchIcon />
    </Button>
  );
};

export default SearchButton;
