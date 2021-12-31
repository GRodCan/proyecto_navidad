import React from "react";
import { shallow } from "enzyme";
import NEA from "./NEA";

describe("NEA", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<NEA />);
    expect(wrapper).toMatchSnapshot();
  });
});
