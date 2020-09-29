import React from "react";
import PlaceItem from "../../components/PlaceItem";
import renderer from "react-test-renderer";

describe("PlaceItem component tests", () => {
  test("PlaceItem component renders correctly", () => {
    const tree = renderer.create(<PlaceItem />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
