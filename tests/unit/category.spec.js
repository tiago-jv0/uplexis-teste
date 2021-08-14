import { mount } from "@vue/test-utils";

import Category from "../../src/components/Category";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(fas);

const mockCategory = {
  icon: "university",
  selected: false,
  category: "Reguladores",
};

describe("Category Component", () => {
  test("should render with selected false by default", () => {
    const category = {
      icon: "university",
      category: "Reguladores",
    };

    const wrapper = mount(Category, {
      propsData: category,
      stubs: {
        FontAwesomeIcon,
      },
    });

    expect(wrapper.vm.$props.selected).toBeFalsy();
  });

  test("should render properly", () => {
    const wrapper = mount(Category, {
      propsData: mockCategory,
      stubs: {
        FontAwesomeIcon,
      },
    });

    expect(wrapper.find(".category--selected").exists()).toBeFalsy();

    expect(wrapper.text()).toContain("Reguladores");
  });

  test("should render with the right modifier in when selected is passed class", () => {
    const wrapper = mount(Category, {
      propsData: { ...mockCategory, selected: true },
      stubs: {
        FontAwesomeIcon,
      },
    });

    expect(wrapper.find(".category--selected").exists()).toBeTruthy();
  });
});
