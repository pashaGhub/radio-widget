import React from "react";
import { shallow } from "enzyme";

import { Header } from "./Header";

describe("Header component", () => {
  const wrapper = shallow(<Header />);

  it("renders", () => {
    expect(wrapper).not.toBeNull();
  });

  it("correct amount of buttons", () => {
    expect(wrapper.find("button").length).toEqual(2);
  });

  it("correct label text", () => {
    expect(wrapper.find("span").text()).toEqual("stations");
  });
});
