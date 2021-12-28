import React from "react";
import { shallow } from "enzyme";
import NEAs from "./NEAs";

describe("NEAs", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<NEAs />);
    expect(wrapper).toMatchSnapshot();
  });
});
