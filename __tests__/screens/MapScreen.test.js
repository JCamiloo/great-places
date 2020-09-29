import "react-native";
import React from "react";
import MapScreen from "../../screens/MapScreen";
import renderer from "react-test-renderer";
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";

const mockStore = configureMockStore();
const store = mockStore({});

describe("MapScreen tests", () => {
  test("MapScreen renders correctly", () => {
    const tree = renderer
      .create(<MapScreen navigation={{ getParam: jest.fn() }} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
