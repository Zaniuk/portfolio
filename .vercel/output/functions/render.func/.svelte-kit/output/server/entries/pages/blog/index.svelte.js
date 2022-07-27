import { c as create_ssr_component, d as add_attribute, e as escape, i as is_promise, n as noop, f as each, v as validate_component } from "../../../chunks/index-34bc8443.js";
/* empty css                               */import { N as Navbar } from "../../../chunks/Navbar-1eb1eeb2.js";
var FeaturedPost_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".featured-post.svelte-1scx154{width:100%;display:flex;align-items:center}h1.svelte-1scx154,p.svelte-1scx154{padding:0 1rem;margin:0}img.svelte-1scx154{aspect-ratio:2 / 1.5;object-fit:cover;width:300px}@media screen and (max-width: 768px){.featured-post.svelte-1scx154{flex-flow:column}}a.svelte-1scx154{all:unset}")();
const css$3 = {
  code: ".featured-post.svelte-1scx154{width:100%;display:flex;align-items:center}h1.svelte-1scx154,p.svelte-1scx154{padding:0 1rem;margin:0}img.svelte-1scx154{aspect-ratio:2 / 1.5;object-fit:cover;width:300px}@media screen and (max-width: 768px){.featured-post.svelte-1scx154{flex-flow:column}}a.svelte-1scx154{all:unset}",
  map: null
};
const FeaturedPost = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const postDate = new Date();
  let { fPostImg, fPostTitle, fPostDesc, fPostSlug } = $$props;
  const postDateStr = `${postDate.getDate()}/${postDate.getMonth()}/${postDate.getFullYear()}`;
  if ($$props.fPostImg === void 0 && $$bindings.fPostImg && fPostImg !== void 0)
    $$bindings.fPostImg(fPostImg);
  if ($$props.fPostTitle === void 0 && $$bindings.fPostTitle && fPostTitle !== void 0)
    $$bindings.fPostTitle(fPostTitle);
  if ($$props.fPostDesc === void 0 && $$bindings.fPostDesc && fPostDesc !== void 0)
    $$bindings.fPostDesc(fPostDesc);
  if ($$props.fPostSlug === void 0 && $$bindings.fPostSlug && fPostSlug !== void 0)
    $$bindings.fPostSlug(fPostSlug);
  $$result.css.add(css$3);
  return `<div class="${"featured-post svelte-1scx154"}"><img${add_attribute("src", fPostImg, 0)} alt="${"Blank"}" class="${"svelte-1scx154"}">
    <div class="${"post-info"}"><p class="${"date svelte-1scx154"}">${escape(postDateStr)}</p>
        <a${add_attribute("href", fPostSlug, 0)} class="${"svelte-1scx154"}"><h1 class="${"svelte-1scx154"}">${escape(fPostTitle)}</h1></a>
        <p class="${"svelte-1scx154"}">${escape(fPostDesc)}</p></div>
</div>`;
});
var PostCard_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "a.svelte-x2g4xy{text-decoration:none;color:unset}img.svelte-x2g4xy{aspect-ratio:1.5 / 1;object-fit:cover;border-radius:.5rem}.post-card.svelte-x2g4xy{width:100%;display:flex;flex-flow:column nowrap}h1.svelte-x2g4xy{overflow:hidden;text-overflow:ellipsis;line-clamp:1;font-size:1.3rem}")();
const css$2 = {
  code: "a.svelte-x2g4xy{text-decoration:none;color:unset}img.svelte-x2g4xy{aspect-ratio:1.5 / 1;object-fit:cover;border-radius:.5rem}.post-card.svelte-x2g4xy{width:100%;display:flex;flex-flow:column nowrap}h1.svelte-x2g4xy{overflow:hidden;text-overflow:ellipsis;line-clamp:1;font-size:1.3rem}",
  map: null
};
const PostCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { date, title, img, desc, link } = $$props;
  const postDate = new Date();
  `${postDate.getDate()}/${postDate.getMonth()}/${postDate.getFullYear()}`;
  if ($$props.date === void 0 && $$bindings.date && date !== void 0)
    $$bindings.date(date);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.img === void 0 && $$bindings.img && img !== void 0)
    $$bindings.img(img);
  if ($$props.desc === void 0 && $$bindings.desc && desc !== void 0)
    $$bindings.desc(desc);
  if ($$props.link === void 0 && $$bindings.link && link !== void 0)
    $$bindings.link(link);
  $$result.css.add(css$2);
  return `<div class="${"post-card svelte-x2g4xy"}"><p class="${"date"}">${escape(date)}</p>
        <img${add_attribute("src", img, 0)} alt="${""}" class="${"svelte-x2g4xy"}">
        <h1 class="${"svelte-x2g4xy"}"><a${add_attribute("href", link, 0)} class="${"svelte-x2g4xy"}">${escape(title)}</a></h1>
        <p>${escape(desc)}.</p>
</div>`;
});
var Posts_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".posts.svelte-1d658ko{margin:1rem;display:grid;align-items:center;grid-template-columns:repeat(auto-fit, minmax(240px, 1fr));gap:1rem}")();
const css$1 = {
  code: ".posts.svelte-1d658ko{margin:1rem;display:grid;align-items:center;grid-template-columns:repeat(auto-fit, minmax(240px, 1fr));gap:1rem}",
  map: null
};
function createDate(date) {
  let fDate = new Date(date);
  return `${fDate.getDate()}/${fDate.getMonth() + 1}/${fDate.getFullYear()}`;
}
const Posts = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const postsList = fetch("https://portfolio-backend-production-0477.up.railway.app/posts").then((response) => response.json()).then((response) => {
    return response;
  }).catch((err) => console.error(err));
  $$result.css.add(css$1);
  return `<div class="${"posts svelte-1d658ko"}">${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return ``;
    }
    return function(posts) {
      return `
        ${each(posts, (post) => {
        return `${validate_component(PostCard, "PostCard").$$render($$result, {
          link: `blog/${post.slug}`,
          date: createDate(post.createdAt),
          title: post.title,
          img: post.img,
          desc: post.desc
        }, {}, {})}`;
      })}
    `;
    }(__value);
  }(postsList)}
</div>`;
});
var Blog_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "#blog.svelte-wpe2xj{margin:0 auto;max-width:900px}")();
const css = {
  code: "#blog.svelte-wpe2xj{margin:0 auto;max-width:900px}",
  map: null
};
const Blog = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const postsList = fetch("https://portfolio-backend-production-0477.up.railway.app/posts").then((response) => response.json()).then((response) => {
    return response[0];
  }).catch((err) => console.error(err));
  $$result.css.add(css);
  return `<div id="${"blog"}" class="${"svelte-wpe2xj"}"><h1>Zaniuk&#39;s Blog</h1>
    ${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return ``;
    }
    return function(post) {
      return `
    
        ${validate_component(FeaturedPost, "FeaturedPost").$$render($$result, {
        fPostTitle: post.title,
        fPostImg: post.img,
        fPostDesc: post.desc,
        fPostSlug: "blog/" + post.slug
      }, {}, {})}    
    `;
    }(__value);
  }(postsList)}
    
    ${validate_component(Posts, "Posts").$$render($$result, {}, {}, {})}
</div>`;
});
const Blog_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Blog!</title>`, ""}`, ""}
${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}
${validate_component(Blog, "Blog").$$render($$result, {}, {}, {})}`;
});
export { Blog_1 as default };
