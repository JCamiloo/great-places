import React from "react";
import MapPreview from "../../components/MapPreview";
import renderer from "react-test-renderer";

describe("MapPreview component tests", () => {
  test("MapPreview component renders correctly", () => {
    const tree = renderer.create(<MapPreview />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
