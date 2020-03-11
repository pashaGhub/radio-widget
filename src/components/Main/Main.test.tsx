import React from "react";
import { shallow } from "enzyme";

import { Main } from "./Main";

describe("Main component renders", () => {
  const wrapper = shallow(<Main />);

  it("renders", () => {
    expect(wrapper).not.toBeNull();
  });
});
