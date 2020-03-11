import React from "react";
import { shallow } from "enzyme";

import { Station } from "./Station";

describe("Station component", () => {
  const station = { id: 1, title: "Name", waves: 103.7, img: "imageSrc" };
  const wrapper = shallow(<Station data={station} />);

  it("renders", () => {
    expect(wrapper).not.toBeNull();
  });

  it("container is closed at the beginning", () => {
    expect(wrapper.find(".container").length).toEqual(1);
  });

  it("correct img src", () => {
    expect(wrapper.find("img").prop("src")).toEqual(station.img);
  });

  it("correct station title", () => {
    expect(
      wrapper
        .find("button")
        .last()
        .childAt(0)
        .text()
    ).toEqual(station.title);
  });

  it("correct station waves", () => {
    expect(
      wrapper
        .find("button")
        .last()
        .childAt(1)
        .text()
    ).toEqual("103,7");
  });
});
