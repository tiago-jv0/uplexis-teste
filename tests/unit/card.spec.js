import { mount } from "@vue/test-utils";

import Card from "../../src/components/Card";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(fas);

const mockCard = {
  icon: "university",
  category: "Reguladores",
  description:
    "O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresas S.A., de capital aberto e limitadas (LTDA) de grande porte.",
  price: 29.99,
};

describe("Card component", () => {
  test("should render properly", () => {
    const wrapper = mount(Card, {
      propsData: mockCard,
      stubs: {
        FontAwesomeIcon,
      },
    });

    expect(wrapper.text()).toContain("Reguladores");
    expect(wrapper.find(".card__description").exists()).toBeTruthy();
    expect(wrapper.text()).toContain(
      "O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresas S.A., de capital aberto e limitadas (LTDA) de grande porte."
    );
  });

  test("should should no description if none is passed", () => {
    const wrapper = mount(Card, {
      propsData: {
        icon: "university",
        category: "Reguladores",
        price: 29.99,
      },
      stubs: {
        FontAwesomeIcon,
      },
    });

    expect(wrapper.find(".card__description").exists()).toBeFalsy();
  });

  test("should change route if cta button is clicked", async () => {
    const push = jest.fn();
    const $router = {
      push,
    };

    const wrapper = mount(Card, {
      propsData: mockCard,
      stubs: {
        FontAwesomeIcon,
      },
      mocks: {
        $router,
      },
    });

    await wrapper.find(".card__cta").trigger("click");

    expect(push).toHaveBeenCalled();
    expect(push).toHaveBeenCalledWith({
      name: "details",
      params: {
        icon: "university",
        category: "Reguladores",
        description:
          "O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresas S.A., de capital aberto e limitadas (LTDA) de grande porte.",
        price: 29.99,
      },
    });
  });
});
