import React from "react";
import { shallow } from "enzyme";

import { Footer } from "./Footer";

describe("Footer component renders", () => {
  const wrapper = shallow(<Footer />);

  it("renders", () => {
    expect(wrapper).not.toBeNull();
  });
});
