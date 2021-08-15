import { mount } from "@vue/test-utils";

import Price from "../../src/components/Price.vue";

describe("Price component", () => {
  test("should render formatted price", () => {
    const wrapper = mount(Price, {
      propsData: {
        price: 20.59,
      },
    });

    expect(wrapper.vm.formattedPrice).toBe("20,59");
  });

  test("should render with modifiers", () => {
    const wrapper = mount(Price, {
      propsData: {
        price: 20.59,
        currencySize: "xlarge",
        colorModifier: "black",
        amountSize: "small",
      },
    });

    expect(wrapper.find(".price--black").exists()).toBeTruthy();
    expect(wrapper.find(".price__currency--xlarge").exists()).toBeTruthy();
    expect(wrapper.find(".price__amount--small").exists()).toBeTruthy();
  });
});
