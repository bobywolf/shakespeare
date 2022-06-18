import i18n from "i18next";
import en_US from "./locales/en_US/translation.json";
import zh_CN from "./locales/zh_CN/translation.json";
import { initI18n } from ".";

describe("i18n env is unset", () => {
  beforeEach(() => {
    initI18n()
      .addResources("en-US", "translation", en_US)
      .addResources("zh-CN", "translation", zh_CN);
  });

  it("translation of key should match", () =>
    expect(i18n.t("Saving")).toBe("Saving"));

  it("translation if changed to zh-CN", () => {
    i18n.changeLanguage("zh-CN");
    expect(i18n.t("Saving")).toBe("保存中");
  });

});
describe("i18n env is en-US", () => {
  beforeEach(() => {
    initI18n("en-US")
      .addResources("en-US", "translation", en_US)
      .addResources("zh-CN", "translation", zh_CN);
  });

  it("translation of key should match", () =>
    expect(i18n.t("Saving")).toBe("Saving"));

  it("translation if changed to zh-CN", () => {
    i18n.changeLanguage("zh-CN");
    expect(i18n.t("Saving")).toBe("保存中");
  });

});

describe("i18n env is zh-CN", () => {
  beforeEach(() => {
    initI18n("zh-CN")
      .addResources("en-US", "translation", en_US)
      .addResources("zh-CN", "translation", zh_CN);
  });

  it("translation of key should match", () =>
    expect(i18n.t("Saving")).toBe("Speichert"));

  it("translation if changed to en-US", () => {
    i18n.changeLanguage("en-US");
    expect(i18n.t("Saving")).toBe("Saving");
  });

});
