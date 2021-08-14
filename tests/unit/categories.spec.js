import { mount } from "@vue/test-utils";

import Categories from "../../src/components/Categories.vue";
import Category from "../../src/components/Category.vue";

import CategoriesMock from "../../src/mocks/categories.mock";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(fas);

describe("Categories Component", () => {
  test("should render all categories", () => {
    const wrapper = mount(Categories, {
      propsData: { items: CategoriesMock },
      stubs: {
        FontAwesomeIcon,
      },
    });

    expect(wrapper.findAllComponents(Category).length).toBe(10);
  });

  test("should render Mundo as default selected category", () => {
    const wrapper = mount(Categories, {
      propsData: { items: CategoriesMock },
      stubs: {
        FontAwesomeIcon,
      },
    });

    expect(wrapper.vm.$props.selectedCategory).toBe("Mundo");
  });

  test("should emit on-category-chosen if a category is clicked", async () => {
    const wrapper = mount(Categories, {
      propsData: { items: CategoriesMock },
      stubs: {
        FontAwesomeIcon,
      },
    });

    await wrapper.findComponent(Category).trigger("click");

    expect(wrapper.emitted()["on-category-chosen"]).toBeTruthy();
    expect(wrapper.emitted()["on-category-chosen"][0][0]).toBe("Mundo");
  });
});
