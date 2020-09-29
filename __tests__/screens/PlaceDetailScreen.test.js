import "react-native";
import React from "react";
import PlaceDetailScreen from "../../screens/PlaceDetailScreen";
import renderer from "react-test-renderer";
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";

const mockStore = configureMockStore();
const store = mockStore({});

describe("PlaceDetailScreen tests", () => {
  test("PlaceDetailScreen renders correctly", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <PlaceDetailScreen navigation={{ getParam: jest.fn() }} />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
