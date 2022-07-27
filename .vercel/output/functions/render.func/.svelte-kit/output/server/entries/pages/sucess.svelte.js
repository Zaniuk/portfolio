import { c as create_ssr_component, v as validate_component } from "../../chunks/index-34bc8443.js";
/* empty css                            */var Sucess_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "section.svelte-80eegq{display:flex;flex-flow:column;justify-content:center;align-items:center}img.svelte-80eegq{width:100px}")();
const css = {
  code: "section.svelte-80eegq{display:flex;flex-flow:column;justify-content:center;align-items:center}img.svelte-80eegq{width:100px}",
  map: null
};
const Sucess = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<section class="${"svelte-80eegq"}"><img class="${"scale-up-center svelte-80eegq"}" src="${"sucess.png"}" alt="${""}">
        <h1>Sucess!</h1>
        <h2>Your message has successfully been sent.</h2>
        <p>I will contact you soon as possible.</p>
</section>`;
});
const Sucess_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Sucess!</title>`, ""}`, ""}
${validate_component(Sucess, "Sucess").$$render($$result, {}, {}, {})}`;
});
export { Sucess_1 as default };
