import { mount } from "@vue/test-utils";

import Card from "../../src/components/Card";

const mockCard = {
  iconUrl: require("../../src/assets/university-solid.png"),
  iconDescription: "Universidade",
  title: "Reguladores",
  description:
    "O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresas S.A., de capital aberto e limitadas (LTDA) de grande porte.",
  price: 29.99,
};

test("should render properly", () => {
  const wrapper = mount(Card, {
    propsData: mockCard,
  });

  expect(wrapper.text()).toContain("Reguladores");
  expect(wrapper.text()).toContain("R$ 29.99");
  expect(wrapper.text()).toContain(
    "O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresas S.A., de capital aberto e limitadas (LTDA) de grande porte."
  );
});
