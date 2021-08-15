import { mount } from "@vue/test-utils";

import BaseButton from "../../src/components/BaseButton";

describe("BaseButton component", () => {
  test("should render properly", () => {
    const wrapper = mount(BaseButton, {
      propsData: {
        text: "Clique Aqui",
        size: "medium",
      },
    });

    expect(wrapper.text()).toContain("Clique Aqui");
  });

  test("should emit onClick event when clicked", async () => {
    const handleClick = jest.fn();
    const wrapper = mount(BaseButton, {
      propsData: {
        text: "Clique Aqui",
        size: "medium",
      },
      listeners: {
        click: handleClick,
      },
    });

    await wrapper.find(".button").trigger("click");

    await wrapper.vm.$nextTick(); // Wait until $emits have been handled

    expect(handleClick).toBeCalled();
  });
});
