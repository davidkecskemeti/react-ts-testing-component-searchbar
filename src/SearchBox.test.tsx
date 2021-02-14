import {
  render,
  fireEvent,
  queryByPlaceholderText,
} from "@testing-library/react";
import SearchBox from "./SearchBox";

it("renders correctly", () => {
  const { queryByTestId, queryByPlaceholderText } = render(
    <SearchBox requestSearch={() => {}} />
  );

  expect(queryByTestId("search-button")).toBeTruthy();
  expect(queryByPlaceholderText("Search")).toBeTruthy();
});

describe("Input value", () => {
  it("updates on chagne", () => {
    const { queryByPlaceholderText } = render(
      <SearchBox requestSearch={() => {}} />
    );
    const searchInput = queryByPlaceholderText("Search") as HTMLInputElement;

    fireEvent.change(searchInput, { target: { value: "test" } });

    expect(searchInput.value).toBe("test");
  });
});

describe("Search button", () => {
  describe("with empty query", () => {
    it("does not trigger requestSearch function", () => {
      const requestSearch = jest.fn();
      const { queryByTestId } = render(
        <SearchBox requestSearch={requestSearch} />
      );

      fireEvent.click(queryByTestId("search-button") as HTMLButtonElement);

      expect(requestSearch).not.toHaveBeenCalled();
    });
  });

  describe("With data inside query", () => {
    it("triggers requestSearch function", () => {
      const requestSearch = jest.fn();
      const { queryByTestId, queryByPlaceholderText } = render(
        <SearchBox requestSearch={requestSearch} />
      );
      const searchInput = queryByPlaceholderText("Search") as HTMLInputElement;

      fireEvent.change(searchInput, { target: { value: "test" } });
      fireEvent.click(queryByTestId("search-button") as HTMLButtonElement);

      expect(requestSearch).toHaveBeenCalled();
    });
  });
});
