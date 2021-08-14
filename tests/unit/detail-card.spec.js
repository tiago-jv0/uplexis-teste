import { mount } from "@vue/test-utils";

import DetailCard from "../../src/components/DetailCard";

const mockDetailCard = {
  image: require("../../src/assets/Captura de Tela -1.svg"),
  description: "Testando descrição",
};

describe("Card component", () => {
  test("should render properly", () => {
    const wrapper = mount(DetailCard, {
      propsData: mockDetailCard,
    });

    expect(wrapper.find(".card__text").text()).toBe(mockDetailCard.description);
    expect(wrapper.find(".card__image").attributes("src")).toBe(
      mockDetailCard.image
    );
  });
});
