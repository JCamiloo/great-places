import React from "react";
import LocationPicker from "../../components/LocationPicker";
import renderer from "react-test-renderer";

describe("LocationPicker component tests", () => {
  test("LocationPicker component renders correctly", () => {
    const tree = renderer
      .create(<LocationPicker navigation={{ getParam: jest.fn() }} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
