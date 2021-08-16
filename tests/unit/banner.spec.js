import { mount, createLocalVue } from "@vue/test-utils";

import VueRouter from "vue-router";

import Banner from "../../src/components/Banner.vue";
import BaseButton from "../../src/components/BaseButton.vue";

import BannerMocks from "../../src/mocks/banners.mock";

const localVue = createLocalVue();
localVue.use(VueRouter);
const router = new VueRouter({
  routes: [{ path: "/details", name: "details", props: true }],
});

const bannerMock = BannerMocks[0];
describe("Banner component", () => {
  test("should render properly", () => {
    const wrapper = mount(Banner, {
      localVue,
      router,
      propsData: bannerMock,
    });

    expect(wrapper.find(".banner__title").text()).toBe(bannerMock.title);
    expect(wrapper.find(".banner__description").text()).toBe(
      bannerMock.description
    );
    expect(wrapper.find(".banner__main--secondary").exists()).toBeFalsy();
    expect(wrapper.find(".banner__title--secondary").exists()).toBeFalsy();
    expect(
      wrapper.find(".banner__description--secondary").exists()
    ).toBeFalsy();
  });

  test("should add secondary modifier when isSecondary is passed", () => {
    const wrapper = mount(Banner, {
      localVue,
      router,
      propsData: { ...bannerMock, isSecondary: true },
    });

    expect(wrapper.find(".banner__main--secondary").exists()).toBeTruthy();
    expect(wrapper.find(".banner__title--secondary").exists()).toBeTruthy();
    expect(
      wrapper.find(".banner__description--secondary").exists()
    ).toBeTruthy();
  });

  test("should go to root page when user clicks banner__logo", async () => {
    const wrapper = mount(Banner, {
      localVue,
      router,
      propsData: { ...bannerMock, isWhite: true },
    });

    await wrapper.find(".banner__logo").trigger("click");

    expect(router.currentRoute.path).toBe("/");
  });

  test("should pass card details when user clicks base-button", async () => {
    const wrapper = mount(Banner, {
      localVue,
      router,
      propsData: { ...bannerMock, isWhite: true },
    });

    await wrapper.findComponent(BaseButton).trigger("click");

    expect(router.currentRoute.path).toBe("/details");
    expect(router.currentRoute.params).toEqual({
      category: bannerMock.title,
      description: bannerMock.description,
      price: bannerMock.price,
    });
  });
});
