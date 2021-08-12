import { mount } from "@vue/test-utils";

import Category from "../../src/components/Category";

const mockCategory = {
  iconUrl: require("../../src/assets/university-solid.png"),
  iconDescription: "Universidade",
  category: "Reguladores",
};

test("should render properly", () => {
  const wrapper = mount(Category, {
    propsData: mockCategory,
  });

  expect(wrapper.text()).toContain("Reguladores");
});
