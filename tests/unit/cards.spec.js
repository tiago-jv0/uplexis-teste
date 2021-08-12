import { mount } from "@vue/test-utils";

import Cards from "../../src/components/Cards";
import Card from "../../src/components/Card";

const mockCards = [
  {
    id: 0,
    iconUrl: require("../../src/assets/university-solid.png"),
    iconDescription: "Universidade",
    title: "Profissional",

    price: 29.99,
  },
  {
    id: 1,
    iconUrl: require("../../src/assets/university-solid.png"),
    iconDescription: "Universidade",
    title: "Reguladores",
    description:
      "O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresas S.A., de capital aberto e limitadas (LTDA) de grande porte.",
    price: 29.99,
  },
  {
    id: 2,
    iconUrl: require("../../src/assets/university-solid.png"),
    iconDescription: "Universidade",
    title: "Reguladores",
    description:
      "O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresas S.A., de capital aberto e limitadas (LTDA) de grande porte.",
    price: 29.99,
  },
];

test("should render three items", () => {
  const wrapper = mount(Cards, {
    propsData: { items: mockCards },
  });

  expect(wrapper.findAllComponents(Card).length).toBe(3);
});

test("Should render no items if none is passed", () => {
  const wrapper = mount(Cards, {
    propsData: { items: null },
  });

  expect(wrapper.findAllComponents(Card).length).toBe(0);
});
