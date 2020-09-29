import React from "react";
import ImagePicker from "../../components/ImagePicker";
import renderer from "react-test-renderer";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { shallow } from "enzyme";

Enzyme.configure({ adapter: new Adapter() });

describe("ImagePicker component tests", () => {
  let component;
  let button;

  test("ImagePicker component renders correctly", () => {
    const tree = renderer.create(<ImagePicker />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  beforeEach(() => {
    component = shallow(<ImagePicker />);
    button = component.find("Button");
    label = component.find("Text");
  });

  it("it renders default text", () => {
    const expectedText = "No image picked yet.";
    const text = label.children().text();
    expect(text).toEqual(expectedText);
  });

  // it("it renders button text", () => {
  //   const expectedText = "Take image";
  //   const text = button.text();
  //   expect(text).toEqual(expectedText);
  // });
});
