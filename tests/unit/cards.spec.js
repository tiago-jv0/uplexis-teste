import { mount } from "@vue/test-utils";

import Cards from "../../src/components/Cards";
import Card from "../../src/components/Card";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(fas);

const mockCards = [
  {
    id: 0,
    icon: "university",
    category: "Profissional",
    name: "UpMiner",
    price: 25.99,
  },
  {
    id: 1,
    icon: "university",
    category: "Reguladores",
    name: "UpMap",
    description:
      "O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresas S.A., de capital aberto e limitadas (LTDA) de grande porte.",
    price: 24.99,
  },
  {
    id: 2,
    icon: "university",
    name: "UpLexis",
    category: "Reguladores",
    description:
      "O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresas S.A., de capital aberto e limitadas (LTDA) de grande porte.",
    price: 27.99,
  },
];
describe("Cards Component", () => {
  test("should render three items", () => {
    const wrapper = mount(Cards, {
      propsData: { data: mockCards },
      stubs: {
        FontAwesomeIcon,
      },
    });
    const itemData = wrapper.vm.items;

    expect(wrapper.findAllComponents(Card).length).toBe(3);
    expect(itemData).toEqual(mockCards);
  });

  test("should render only items with selected category", () => {
    const wrapper = mount(Cards, {
      propsData: { data: mockCards, filter: "Reguladores" },
      stubs: {
        FontAwesomeIcon,
      },
    });
    const itemData = wrapper.vm.items;

    expect(wrapper.findAllComponents(Card).length).toBe(2);
    expect(itemData[0]).toEqual(mockCards[1]);
    expect(itemData[1]).toEqual(mockCards[2]);
  });

  test("should order items by price ", () => {
    const wrapper = mount(Cards, {
      propsData: { data: mockCards, orderBy: "price" },
      stubs: {
        FontAwesomeIcon,
      },
    });
    const itemData = wrapper.vm.items;
    expect(itemData[0]).toEqual(mockCards[1]);
    expect(itemData[1]).toEqual(mockCards[0]);
    expect(itemData[2]).toEqual(mockCards[2]);
  });
});
