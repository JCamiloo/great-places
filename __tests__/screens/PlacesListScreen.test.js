import "react-native";
import React from "react";
import PlacesListScreen from "../../screens/PlacesListScreen";
import renderer from "react-test-renderer";
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";

const mockStore = configureMockStore();
const store = mockStore({});

describe("PlacesListScreen tests", () => {
  test("PlacesListScreen renders correctly", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <PlacesListScreen navigation={{ setParams: jest.fn() }} />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
