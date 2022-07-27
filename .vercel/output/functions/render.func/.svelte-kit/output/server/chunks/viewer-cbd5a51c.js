import { c as create_ssr_component, b as createEventDispatcher, o as onDestroy, d as add_attribute, t as tick } from "./index-34bc8443.js";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";
import rehypeStringify from "rehype-stringify";
import { defaultSchema } from "hast-util-sanitize";
const schemaStr = JSON.stringify(defaultSchema);
function getProcessor({ sanitize, plugins, remarkRehype: remarkRehypeOptions = {} }) {
  let processor = unified().use(remarkParse);
  plugins == null ? void 0 : plugins.forEach(({ remark }) => {
    if (remark)
      processor = remark(processor);
  });
  processor = processor.use(remarkRehype, { allowDangerousHtml: true, ...remarkRehypeOptions }).use(rehypeRaw);
  let schema = JSON.parse(schemaStr);
  schema.attributes["*"].push("className");
  if (typeof sanitize === "function") {
    schema = sanitize(schema);
  }
  processor = processor.use(rehypeSanitize, schema);
  plugins == null ? void 0 : plugins.forEach(({ rehype }) => {
    if (rehype)
      processor = rehype(processor);
  });
  return processor.use(rehypeStringify);
}
const Viewer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let html;
  const dispatch = createEventDispatcher();
  let { value = "" } = $$props;
  let { plugins = [] } = $$props;
  let { sanitize = void 0 } = $$props;
  let { remarkRehype: remarkRehype2 = void 0 } = $$props;
  let markdownBody;
  let cbs = [];
  function off() {
    cbs.forEach((cb) => cb == null ? void 0 : cb());
  }
  onDestroy(off);
  let file;
  let i = 0;
  const dispatchPlugin = () => (tree, file2) => {
    tick().then(() => {
      dispatch("hast", { hast: tree, file: file2 });
    });
  };
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.plugins === void 0 && $$bindings.plugins && plugins !== void 0)
    $$bindings.plugins(plugins);
  if ($$props.sanitize === void 0 && $$bindings.sanitize && sanitize !== void 0)
    $$bindings.sanitize(sanitize);
  if ($$props.remarkRehype === void 0 && $$bindings.remarkRehype && remarkRehype2 !== void 0)
    $$bindings.remarkRehype(remarkRehype2);
  {
    try {
      file = getProcessor({
        sanitize,
        plugins: [
          ...plugins,
          {
            rehype: (processor) => processor.use(dispatchPlugin)
          }
        ],
        remarkRehype: remarkRehype2
      }).processSync(value);
      i++;
    } catch (err) {
      console.error(err);
    }
  }
  html = `${file}<!--${i}-->`;
  return `<div class="${"markdown-body"}"${add_attribute("this", markdownBody, 0)}><!-- HTML_TAG_START -->${html}<!-- HTML_TAG_END --></div>`;
});
export { Viewer as V };
