import "react-native";
import React from "react";
import NewPlaceScreen from "../../screens/NewPlaceScreen";
import renderer from "react-test-renderer";
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";

const mockStore = configureMockStore();
const store = mockStore({});

describe("NewPlaceScreen tests", () => {
  test("NewPlaceScreen renders correctly", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <NewPlaceScreen navigation={{ getParam: jest.fn() }} />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
