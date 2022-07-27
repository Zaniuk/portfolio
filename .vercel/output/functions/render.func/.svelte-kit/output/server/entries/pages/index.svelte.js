import { c as create_ssr_component, b as createEventDispatcher, v as validate_component, d as add_attribute, e as escape, h as null_to_empty } from "../../chunks/index-34bc8443.js";
/* empty css                            */import "typed.js";
var Navbar_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "header.svelte-q39th4.svelte-q39th4{position:sticky;min-height:3rem;top:0;z-index:999;background-color:#16161E}nav.svelte-q39th4.svelte-q39th4{display:flex;flex-direction:column}#menu-button.svelte-q39th4.svelte-q39th4{align-self:flex-end}.hide.svelte-q39th4.svelte-q39th4{display:none}ul.svelte-q39th4.svelte-q39th4{display:flex;flex-direction:column;align-items:center;justify-content:center;height:100vh}ul.svelte-q39th4 li.svelte-q39th4{list-style-type:none;font-size:1.5em;padding-bottom:6rem}ul.svelte-q39th4 a.svelte-q39th4{text-decoration:none}")();
const css$9 = {
  code: "header.svelte-q39th4.svelte-q39th4{position:sticky;min-height:3rem;top:0;z-index:999;background-color:#16161E}nav.svelte-q39th4.svelte-q39th4{display:flex;flex-direction:column}#menu-button.svelte-q39th4.svelte-q39th4{align-self:flex-end}.hide.svelte-q39th4.svelte-q39th4{display:none}ul.svelte-q39th4.svelte-q39th4{display:flex;flex-direction:column;align-items:center;justify-content:center;height:100vh}ul.svelte-q39th4 li.svelte-q39th4{list-style-type:none;font-size:1.5em;padding-bottom:6rem}ul.svelte-q39th4 a.svelte-q39th4{text-decoration:none}",
  map: null
};
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$9);
  return `<header class="${"svelte-q39th4"}"><nav class="${"svelte-q39th4"}"><a id="${"menu-button"}" class="${"svelte-q39th4"}"><img src="${"menubutton.svg"}" alt="${""}"></a>
        <div id="${"list"}" class="${"hide svelte-q39th4"}"><ul class="${"svelte-q39th4"}"><a class="${"text-lblue svelte-q39th4"}" href="${"#home"}"><li class="${"svelte-q39th4"}">Home</li></a>
                <a class="${"text-pink svelte-q39th4"}" href="${"#projects"}"><li class="${"svelte-q39th4"}">Projects</li></a>
                <a class="${"text-green svelte-q39th4"}" href="${"#skills"}"><li class="${"svelte-q39th4"}">Skills</li></a>
                <a class="${"text-purple svelte-q39th4"}" href="${"#about"}"><li class="${"svelte-q39th4"}">About Me</li></a>
                <a class="${"text-pink svelte-q39th4"}" href="${"#contact"}"><li class="${"svelte-q39th4"}">Contact</li></a>
                <a class="${"text-lblue svelte-q39th4"}" href="${"/blog"}"><li class="${"svelte-q39th4"}">Blog</li></a></ul></div></nav>
</header>`;
});
const TypedJs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let { strings = ["Hello World!"] } = $$props;
  let { stringsElement = null } = $$props;
  let { typeSpeed = 50 } = $$props;
  let { startDelay = 0 } = $$props;
  let { backSpeed = 0 } = $$props;
  let { smartBackspace = true } = $$props;
  let { shuffle = false } = $$props;
  let { backDelay = 700 } = $$props;
  let { fadeOut = false } = $$props;
  let { fadeOutClass = "typed-fade-out" } = $$props;
  let { fadeOutDelay = 500 } = $$props;
  let { loop = false } = $$props;
  let { loopCount = Infinity } = $$props;
  let { showCursor = true } = $$props;
  let { cursorChar = "|" } = $$props;
  let { autoInsertCss = true } = $$props;
  let { attr = null } = $$props;
  let { bindInputFocusEvents = false } = $$props;
  let { contentType = "html" } = $$props;
  if ($$props.strings === void 0 && $$bindings.strings && strings !== void 0)
    $$bindings.strings(strings);
  if ($$props.stringsElement === void 0 && $$bindings.stringsElement && stringsElement !== void 0)
    $$bindings.stringsElement(stringsElement);
  if ($$props.typeSpeed === void 0 && $$bindings.typeSpeed && typeSpeed !== void 0)
    $$bindings.typeSpeed(typeSpeed);
  if ($$props.startDelay === void 0 && $$bindings.startDelay && startDelay !== void 0)
    $$bindings.startDelay(startDelay);
  if ($$props.backSpeed === void 0 && $$bindings.backSpeed && backSpeed !== void 0)
    $$bindings.backSpeed(backSpeed);
  if ($$props.smartBackspace === void 0 && $$bindings.smartBackspace && smartBackspace !== void 0)
    $$bindings.smartBackspace(smartBackspace);
  if ($$props.shuffle === void 0 && $$bindings.shuffle && shuffle !== void 0)
    $$bindings.shuffle(shuffle);
  if ($$props.backDelay === void 0 && $$bindings.backDelay && backDelay !== void 0)
    $$bindings.backDelay(backDelay);
  if ($$props.fadeOut === void 0 && $$bindings.fadeOut && fadeOut !== void 0)
    $$bindings.fadeOut(fadeOut);
  if ($$props.fadeOutClass === void 0 && $$bindings.fadeOutClass && fadeOutClass !== void 0)
    $$bindings.fadeOutClass(fadeOutClass);
  if ($$props.fadeOutDelay === void 0 && $$bindings.fadeOutDelay && fadeOutDelay !== void 0)
    $$bindings.fadeOutDelay(fadeOutDelay);
  if ($$props.loop === void 0 && $$bindings.loop && loop !== void 0)
    $$bindings.loop(loop);
  if ($$props.loopCount === void 0 && $$bindings.loopCount && loopCount !== void 0)
    $$bindings.loopCount(loopCount);
  if ($$props.showCursor === void 0 && $$bindings.showCursor && showCursor !== void 0)
    $$bindings.showCursor(showCursor);
  if ($$props.cursorChar === void 0 && $$bindings.cursorChar && cursorChar !== void 0)
    $$bindings.cursorChar(cursorChar);
  if ($$props.autoInsertCss === void 0 && $$bindings.autoInsertCss && autoInsertCss !== void 0)
    $$bindings.autoInsertCss(autoInsertCss);
  if ($$props.attr === void 0 && $$bindings.attr && attr !== void 0)
    $$bindings.attr(attr);
  if ($$props.bindInputFocusEvents === void 0 && $$bindings.bindInputFocusEvents && bindInputFocusEvents !== void 0)
    $$bindings.bindInputFocusEvents(bindInputFocusEvents);
  if ($$props.contentType === void 0 && $$bindings.contentType && contentType !== void 0)
    $$bindings.contentType(contentType);
  return `<div>${slots.default ? slots.default({}) : ``}</div>`;
});
var ReactWindow_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "pre.svelte-kan792{height:130px;padding-left:.5rem}@media(max-width: 375px){pre.svelte-kan792{font-size:.8rem}}@media(max-width: 310){pre.svelte-kan792{font-size:.55rem}}")();
const css$8 = {
  code: "pre.svelte-kan792{height:130px;padding-left:.5rem}@media(max-width: 375px){pre.svelte-kan792{font-size:.8rem}}@media(max-width: 310){pre.svelte-kan792{font-size:.55rem}}",
  map: null
};
const ReactWindow = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$8);
  return `${validate_component(TypedJs, "TypedJs").$$render($$result, {
    showCursor: false,
    strings: [
      ` 
<span class="text-lblue">export</span> <span class="text-ulblue">default</span> <span class="text-purple">function</span> <span class="text-lblue">App() {</span>
<span class="text-lblue">return (</span>

<span class="text-pink">&lt;div</span> <span class="text-purple">className</span>=<span class="text-green">\u201DApp\u201D</span><span class="text-pink">&gt;</span>
    <span class="text-pink">&lt;h1&gt;</span>Hello, my name is Geronimo<span class="text-pink">&lt;/h1&gt;</span>
    <span class="text-pink">&lt;h2&gt;</span>I\u2019m a Web Developer <span class="text-pink">&lt;/h2&gt;</span>
    <span class="text-pink">&lt;Welcome </span><span class="text-purple">message</span>=<span class="text-green">\u201DWelcome to my Site\u201D</span><span class="text-pink">/&gt;</span>
<span class="text-pink">&lt;/div&gt;</span>
<span class="text-lblue">)}</span> 
</code>

`
    ]
  }, {}, {
    default: () => {
      return `<pre class="${"typing svelte-kan792"}"></pre>`;
    }
  })}`;
});
var animate = /* @__PURE__ */ (() => `@charset "UTF-8";/*!
 * animate.css - https://animate.style/
 * Version - 4.1.1
 * Licensed under the MIT license - http://opensource.org/licenses/MIT
 *
 * Copyright (c) 2020 Animate.css
 */
:root {
  --animate-duration: 1s;
  --animate-delay: 1s;
  --animate-repeat: 1;
}
.animate__animated {
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-duration: var(--animate-duration);
  animation-duration: var(--animate-duration);
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}
.animate__animated.animate__infinite {
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
}
.animate__animated.animate__repeat-1 {
  -webkit-animation-iteration-count: 1;
  animation-iteration-count: 1;
  -webkit-animation-iteration-count: var(--animate-repeat);
  animation-iteration-count: var(--animate-repeat);
}
.animate__animated.animate__repeat-2 {
  -webkit-animation-iteration-count: calc(1 * 2);
  animation-iteration-count: calc(1 * 2);
  -webkit-animation-iteration-count: calc(var(--animate-repeat) * 2);
  animation-iteration-count: calc(var(--animate-repeat) * 2);
}
.animate__animated.animate__repeat-3 {
  -webkit-animation-iteration-count: calc(1 * 3);
  animation-iteration-count: calc(1 * 3);
  -webkit-animation-iteration-count: calc(var(--animate-repeat) * 3);
  animation-iteration-count: calc(var(--animate-repeat) * 3);
}
.animate__animated.animate__delay-1s {
  -webkit-animation-delay: 1s;
  animation-delay: 1s;
  -webkit-animation-delay: var(--animate-delay);
  animation-delay: var(--animate-delay);
}
.animate__animated.animate__delay-2s {
  -webkit-animation-delay: calc(1s * 2);
  animation-delay: calc(1s * 2);
  -webkit-animation-delay: calc(var(--animate-delay) * 2);
  animation-delay: calc(var(--animate-delay) * 2);
}
.animate__animated.animate__delay-3s {
  -webkit-animation-delay: calc(1s * 3);
  animation-delay: calc(1s * 3);
  -webkit-animation-delay: calc(var(--animate-delay) * 3);
  animation-delay: calc(var(--animate-delay) * 3);
}
.animate__animated.animate__delay-4s {
  -webkit-animation-delay: calc(1s * 4);
  animation-delay: calc(1s * 4);
  -webkit-animation-delay: calc(var(--animate-delay) * 4);
  animation-delay: calc(var(--animate-delay) * 4);
}
.animate__animated.animate__delay-5s {
  -webkit-animation-delay: calc(1s * 5);
  animation-delay: calc(1s * 5);
  -webkit-animation-delay: calc(var(--animate-delay) * 5);
  animation-delay: calc(var(--animate-delay) * 5);
}
.animate__animated.animate__faster {
  -webkit-animation-duration: calc(1s / 2);
  animation-duration: calc(1s / 2);
  -webkit-animation-duration: calc(var(--animate-duration) / 2);
  animation-duration: calc(var(--animate-duration) / 2);
}
.animate__animated.animate__fast {
  -webkit-animation-duration: calc(1s * 0.8);
  animation-duration: calc(1s * 0.8);
  -webkit-animation-duration: calc(var(--animate-duration) * 0.8);
  animation-duration: calc(var(--animate-duration) * 0.8);
}
.animate__animated.animate__slow {
  -webkit-animation-duration: calc(1s * 2);
  animation-duration: calc(1s * 2);
  -webkit-animation-duration: calc(var(--animate-duration) * 2);
  animation-duration: calc(var(--animate-duration) * 2);
}
.animate__animated.animate__slower {
  -webkit-animation-duration: calc(1s * 3);
  animation-duration: calc(1s * 3);
  -webkit-animation-duration: calc(var(--animate-duration) * 3);
  animation-duration: calc(var(--animate-duration) * 3);
}
@media print, (prefers-reduced-motion: reduce) {
  .animate__animated {
    -webkit-animation-duration: 1ms !important;
    animation-duration: 1ms !important;
    -webkit-transition-duration: 1ms !important;
    transition-duration: 1ms !important;
    -webkit-animation-iteration-count: 1 !important;
    animation-iteration-count: 1 !important;
  }

  .animate__animated[class*='Out'] {
    opacity: 0;
  }
}
/* Attention seekers  */
@-webkit-keyframes bounce {
  from,
  20%,
  53%,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    -webkit-transform: translate3d(0, -30px, 0) scaleY(1.1);
    transform: translate3d(0, -30px, 0) scaleY(1.1);
  }

  70% {
    -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    -webkit-transform: translate3d(0, -15px, 0) scaleY(1.05);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }

  80% {
    -webkit-transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    -webkit-transform: translate3d(0, 0, 0) scaleY(0.95);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }

  90% {
    -webkit-transform: translate3d(0, -4px, 0) scaleY(1.02);
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  }
}
@keyframes bounce {
  from,
  20%,
  53%,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    -webkit-transform: translate3d(0, -30px, 0) scaleY(1.1);
    transform: translate3d(0, -30px, 0) scaleY(1.1);
  }

  70% {
    -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    -webkit-transform: translate3d(0, -15px, 0) scaleY(1.05);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }

  80% {
    -webkit-transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    -webkit-transform: translate3d(0, 0, 0) scaleY(0.95);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }

  90% {
    -webkit-transform: translate3d(0, -4px, 0) scaleY(1.02);
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  }
}
.animate__bounce {
  -webkit-animation-name: bounce;
  animation-name: bounce;
  -webkit-transform-origin: center bottom;
  transform-origin: center bottom;
}
@-webkit-keyframes flash {
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
}
@keyframes flash {
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
}
.animate__flash {
  -webkit-animation-name: flash;
  animation-name: flash;
}
/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */
@-webkit-keyframes pulse {
  from {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }

  50% {
    -webkit-transform: scale3d(1.05, 1.05, 1.05);
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}
@keyframes pulse {
  from {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }

  50% {
    -webkit-transform: scale3d(1.05, 1.05, 1.05);
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}
.animate__pulse {
  -webkit-animation-name: pulse;
  animation-name: pulse;
  -webkit-animation-timing-function: ease-in-out;
  animation-timing-function: ease-in-out;
}
@-webkit-keyframes rubberBand {
  from {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }

  30% {
    -webkit-transform: scale3d(1.25, 0.75, 1);
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    -webkit-transform: scale3d(0.75, 1.25, 1);
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    -webkit-transform: scale3d(1.15, 0.85, 1);
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    -webkit-transform: scale3d(0.95, 1.05, 1);
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    -webkit-transform: scale3d(1.05, 0.95, 1);
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}
@keyframes rubberBand {
  from {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }

  30% {
    -webkit-transform: scale3d(1.25, 0.75, 1);
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    -webkit-transform: scale3d(0.75, 1.25, 1);
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    -webkit-transform: scale3d(1.15, 0.85, 1);
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    -webkit-transform: scale3d(0.95, 1.05, 1);
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    -webkit-transform: scale3d(1.05, 0.95, 1);
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}
.animate__rubberBand {
  -webkit-animation-name: rubberBand;
  animation-name: rubberBand;
}
@-webkit-keyframes shakeX {
  from,
  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    -webkit-transform: translate3d(-10px, 0, 0);
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    -webkit-transform: translate3d(10px, 0, 0);
    transform: translate3d(10px, 0, 0);
  }
}
@keyframes shakeX {
  from,
  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    -webkit-transform: translate3d(-10px, 0, 0);
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    -webkit-transform: translate3d(10px, 0, 0);
    transform: translate3d(10px, 0, 0);
  }
}
.animate__shakeX {
  -webkit-animation-name: shakeX;
  animation-name: shakeX;
}
@-webkit-keyframes shakeY {
  from,
  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    -webkit-transform: translate3d(0, -10px, 0);
    transform: translate3d(0, -10px, 0);
  }

  20%,
  40%,
  60%,
  80% {
    -webkit-transform: translate3d(0, 10px, 0);
    transform: translate3d(0, 10px, 0);
  }
}
@keyframes shakeY {
  from,
  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    -webkit-transform: translate3d(0, -10px, 0);
    transform: translate3d(0, -10px, 0);
  }

  20%,
  40%,
  60%,
  80% {
    -webkit-transform: translate3d(0, 10px, 0);
    transform: translate3d(0, 10px, 0);
  }
}
.animate__shakeY {
  -webkit-animation-name: shakeY;
  animation-name: shakeY;
}
@-webkit-keyframes headShake {
  0% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }

  6.5% {
    -webkit-transform: translateX(-6px) rotateY(-9deg);
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    -webkit-transform: translateX(5px) rotateY(7deg);
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    -webkit-transform: translateX(-3px) rotateY(-5deg);
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    -webkit-transform: translateX(2px) rotateY(3deg);
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
}
@keyframes headShake {
  0% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }

  6.5% {
    -webkit-transform: translateX(-6px) rotateY(-9deg);
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    -webkit-transform: translateX(5px) rotateY(7deg);
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    -webkit-transform: translateX(-3px) rotateY(-5deg);
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    -webkit-transform: translateX(2px) rotateY(3deg);
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
}
.animate__headShake {
  -webkit-animation-timing-function: ease-in-out;
  animation-timing-function: ease-in-out;
  -webkit-animation-name: headShake;
  animation-name: headShake;
}
@-webkit-keyframes swing {
  20% {
    -webkit-transform: rotate3d(0, 0, 1, 15deg);
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    -webkit-transform: rotate3d(0, 0, 1, -10deg);
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    -webkit-transform: rotate3d(0, 0, 1, 5deg);
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    -webkit-transform: rotate3d(0, 0, 1, -5deg);
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    -webkit-transform: rotate3d(0, 0, 1, 0deg);
    transform: rotate3d(0, 0, 1, 0deg);
  }
}
@keyframes swing {
  20% {
    -webkit-transform: rotate3d(0, 0, 1, 15deg);
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    -webkit-transform: rotate3d(0, 0, 1, -10deg);
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    -webkit-transform: rotate3d(0, 0, 1, 5deg);
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    -webkit-transform: rotate3d(0, 0, 1, -5deg);
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    -webkit-transform: rotate3d(0, 0, 1, 0deg);
    transform: rotate3d(0, 0, 1, 0deg);
  }
}
.animate__swing {
  -webkit-transform-origin: top center;
  transform-origin: top center;
  -webkit-animation-name: swing;
  animation-name: swing;
}
@-webkit-keyframes tada {
  from {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    -webkit-transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}
@keyframes tada {
  from {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    -webkit-transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}
.animate__tada {
  -webkit-animation-name: tada;
  animation-name: tada;
}
/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */
@-webkit-keyframes wobble {
  from {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  15% {
    -webkit-transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    -webkit-transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    -webkit-transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    -webkit-transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    -webkit-transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@keyframes wobble {
  from {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  15% {
    -webkit-transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    -webkit-transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    -webkit-transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    -webkit-transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    -webkit-transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
.animate__wobble {
  -webkit-animation-name: wobble;
  animation-name: wobble;
}
@-webkit-keyframes jello {
  from,
  11.1%,
  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  22.2% {
    -webkit-transform: skewX(-12.5deg) skewY(-12.5deg);
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    -webkit-transform: skewX(6.25deg) skewY(6.25deg);
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    -webkit-transform: skewX(-3.125deg) skewY(-3.125deg);
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    -webkit-transform: skewX(1.5625deg) skewY(1.5625deg);
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    -webkit-transform: skewX(-0.78125deg) skewY(-0.78125deg);
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    -webkit-transform: skewX(0.390625deg) skewY(0.390625deg);
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    -webkit-transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
}
@keyframes jello {
  from,
  11.1%,
  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  22.2% {
    -webkit-transform: skewX(-12.5deg) skewY(-12.5deg);
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    -webkit-transform: skewX(6.25deg) skewY(6.25deg);
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    -webkit-transform: skewX(-3.125deg) skewY(-3.125deg);
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    -webkit-transform: skewX(1.5625deg) skewY(1.5625deg);
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    -webkit-transform: skewX(-0.78125deg) skewY(-0.78125deg);
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    -webkit-transform: skewX(0.390625deg) skewY(0.390625deg);
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    -webkit-transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
}
.animate__jello {
  -webkit-animation-name: jello;
  animation-name: jello;
  -webkit-transform-origin: center;
  transform-origin: center;
}
@-webkit-keyframes heartBeat {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  14% {
    -webkit-transform: scale(1.3);
    transform: scale(1.3);
  }

  28% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  42% {
    -webkit-transform: scale(1.3);
    transform: scale(1.3);
  }

  70% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
@keyframes heartBeat {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  14% {
    -webkit-transform: scale(1.3);
    transform: scale(1.3);
  }

  28% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  42% {
    -webkit-transform: scale(1.3);
    transform: scale(1.3);
  }

  70% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
.animate__heartBeat {
  -webkit-animation-name: heartBeat;
  animation-name: heartBeat;
  -webkit-animation-duration: calc(1s * 1.3);
  animation-duration: calc(1s * 1.3);
  -webkit-animation-duration: calc(var(--animate-duration) * 1.3);
  animation-duration: calc(var(--animate-duration) * 1.3);
  -webkit-animation-timing-function: ease-in-out;
  animation-timing-function: ease-in-out;
}
/* Back entrances */
@-webkit-keyframes backInDown {
  0% {
    -webkit-transform: translateY(-1200px) scale(0.7);
    transform: translateY(-1200px) scale(0.7);
    opacity: 0.7;
  }

  80% {
    -webkit-transform: translateY(0px) scale(0.7);
    transform: translateY(0px) scale(0.7);
    opacity: 0.7;
  }

  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }
}
@keyframes backInDown {
  0% {
    -webkit-transform: translateY(-1200px) scale(0.7);
    transform: translateY(-1200px) scale(0.7);
    opacity: 0.7;
  }

  80% {
    -webkit-transform: translateY(0px) scale(0.7);
    transform: translateY(0px) scale(0.7);
    opacity: 0.7;
  }

  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }
}
.animate__backInDown {
  -webkit-animation-name: backInDown;
  animation-name: backInDown;
}
@-webkit-keyframes backInLeft {
  0% {
    -webkit-transform: translateX(-2000px) scale(0.7);
    transform: translateX(-2000px) scale(0.7);
    opacity: 0.7;
  }

  80% {
    -webkit-transform: translateX(0px) scale(0.7);
    transform: translateX(0px) scale(0.7);
    opacity: 0.7;
  }

  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }
}
@keyframes backInLeft {
  0% {
    -webkit-transform: translateX(-2000px) scale(0.7);
    transform: translateX(-2000px) scale(0.7);
    opacity: 0.7;
  }

  80% {
    -webkit-transform: translateX(0px) scale(0.7);
    transform: translateX(0px) scale(0.7);
    opacity: 0.7;
  }

  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }
}
.animate__backInLeft {
  -webkit-animation-name: backInLeft;
  animation-name: backInLeft;
}
@-webkit-keyframes backInRight {
  0% {
    -webkit-transform: translateX(2000px) scale(0.7);
    transform: translateX(2000px) scale(0.7);
    opacity: 0.7;
  }

  80% {
    -webkit-transform: translateX(0px) scale(0.7);
    transform: translateX(0px) scale(0.7);
    opacity: 0.7;
  }

  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }
}
@keyframes backInRight {
  0% {
    -webkit-transform: translateX(2000px) scale(0.7);
    transform: translateX(2000px) scale(0.7);
    opacity: 0.7;
  }

  80% {
    -webkit-transform: translateX(0px) scale(0.7);
    transform: translateX(0px) scale(0.7);
    opacity: 0.7;
  }

  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }
}
.animate__backInRight {
  -webkit-animation-name: backInRight;
  animation-name: backInRight;
}
@-webkit-keyframes backInUp {
  0% {
    -webkit-transform: translateY(1200px) scale(0.7);
    transform: translateY(1200px) scale(0.7);
    opacity: 0.7;
  }

  80% {
    -webkit-transform: translateY(0px) scale(0.7);
    transform: translateY(0px) scale(0.7);
    opacity: 0.7;
  }

  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }
}
@keyframes backInUp {
  0% {
    -webkit-transform: translateY(1200px) scale(0.7);
    transform: translateY(1200px) scale(0.7);
    opacity: 0.7;
  }

  80% {
    -webkit-transform: translateY(0px) scale(0.7);
    transform: translateY(0px) scale(0.7);
    opacity: 0.7;
  }

  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }
}
.animate__backInUp {
  -webkit-animation-name: backInUp;
  animation-name: backInUp;
}
/* Back exits */
@-webkit-keyframes backOutDown {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }

  20% {
    -webkit-transform: translateY(0px) scale(0.7);
    transform: translateY(0px) scale(0.7);
    opacity: 0.7;
  }

  100% {
    -webkit-transform: translateY(700px) scale(0.7);
    transform: translateY(700px) scale(0.7);
    opacity: 0.7;
  }
}
@keyframes backOutDown {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }

  20% {
    -webkit-transform: translateY(0px) scale(0.7);
    transform: translateY(0px) scale(0.7);
    opacity: 0.7;
  }

  100% {
    -webkit-transform: translateY(700px) scale(0.7);
    transform: translateY(700px) scale(0.7);
    opacity: 0.7;
  }
}
.animate__backOutDown {
  -webkit-animation-name: backOutDown;
  animation-name: backOutDown;
}
@-webkit-keyframes backOutLeft {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }

  20% {
    -webkit-transform: translateX(0px) scale(0.7);
    transform: translateX(0px) scale(0.7);
    opacity: 0.7;
  }

  100% {
    -webkit-transform: translateX(-2000px) scale(0.7);
    transform: translateX(-2000px) scale(0.7);
    opacity: 0.7;
  }
}
@keyframes backOutLeft {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }

  20% {
    -webkit-transform: translateX(0px) scale(0.7);
    transform: translateX(0px) scale(0.7);
    opacity: 0.7;
  }

  100% {
    -webkit-transform: translateX(-2000px) scale(0.7);
    transform: translateX(-2000px) scale(0.7);
    opacity: 0.7;
  }
}
.animate__backOutLeft {
  -webkit-animation-name: backOutLeft;
  animation-name: backOutLeft;
}
@-webkit-keyframes backOutRight {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }

  20% {
    -webkit-transform: translateX(0px) scale(0.7);
    transform: translateX(0px) scale(0.7);
    opacity: 0.7;
  }

  100% {
    -webkit-transform: translateX(2000px) scale(0.7);
    transform: translateX(2000px) scale(0.7);
    opacity: 0.7;
  }
}
@keyframes backOutRight {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }

  20% {
    -webkit-transform: translateX(0px) scale(0.7);
    transform: translateX(0px) scale(0.7);
    opacity: 0.7;
  }

  100% {
    -webkit-transform: translateX(2000px) scale(0.7);
    transform: translateX(2000px) scale(0.7);
    opacity: 0.7;
  }
}
.animate__backOutRight {
  -webkit-animation-name: backOutRight;
  animation-name: backOutRight;
}
@-webkit-keyframes backOutUp {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }

  20% {
    -webkit-transform: translateY(0px) scale(0.7);
    transform: translateY(0px) scale(0.7);
    opacity: 0.7;
  }

  100% {
    -webkit-transform: translateY(-700px) scale(0.7);
    transform: translateY(-700px) scale(0.7);
    opacity: 0.7;
  }
}
@keyframes backOutUp {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }

  20% {
    -webkit-transform: translateY(0px) scale(0.7);
    transform: translateY(0px) scale(0.7);
    opacity: 0.7;
  }

  100% {
    -webkit-transform: translateY(-700px) scale(0.7);
    transform: translateY(-700px) scale(0.7);
    opacity: 0.7;
  }
}
.animate__backOutUp {
  -webkit-animation-name: backOutUp;
  animation-name: backOutUp;
}
/* Bouncing entrances  */
@-webkit-keyframes bounceIn {
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    -webkit-transform: scale3d(1.1, 1.1, 1.1);
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    -webkit-transform: scale3d(0.9, 0.9, 0.9);
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    -webkit-transform: scale3d(1.03, 1.03, 1.03);
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    -webkit-transform: scale3d(0.97, 0.97, 0.97);
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}
@keyframes bounceIn {
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    -webkit-transform: scale3d(1.1, 1.1, 1.1);
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    -webkit-transform: scale3d(0.9, 0.9, 0.9);
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    -webkit-transform: scale3d(1.03, 1.03, 1.03);
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    -webkit-transform: scale3d(0.97, 0.97, 0.97);
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}
.animate__bounceIn {
  -webkit-animation-duration: calc(1s * 0.75);
  animation-duration: calc(1s * 0.75);
  -webkit-animation-duration: calc(var(--animate-duration) * 0.75);
  animation-duration: calc(var(--animate-duration) * 0.75);
  -webkit-animation-name: bounceIn;
  animation-name: bounceIn;
}
@-webkit-keyframes bounceInDown {
  from,
  60%,
  75%,
  90%,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, -3000px, 0) scaleY(3);
    transform: translate3d(0, -3000px, 0) scaleY(3);
  }

  60% {
    opacity: 1;
    -webkit-transform: translate3d(0, 25px, 0) scaleY(0.9);
    transform: translate3d(0, 25px, 0) scaleY(0.9);
  }

  75% {
    -webkit-transform: translate3d(0, -10px, 0) scaleY(0.95);
    transform: translate3d(0, -10px, 0) scaleY(0.95);
  }

  90% {
    -webkit-transform: translate3d(0, 5px, 0) scaleY(0.985);
    transform: translate3d(0, 5px, 0) scaleY(0.985);
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@keyframes bounceInDown {
  from,
  60%,
  75%,
  90%,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, -3000px, 0) scaleY(3);
    transform: translate3d(0, -3000px, 0) scaleY(3);
  }

  60% {
    opacity: 1;
    -webkit-transform: translate3d(0, 25px, 0) scaleY(0.9);
    transform: translate3d(0, 25px, 0) scaleY(0.9);
  }

  75% {
    -webkit-transform: translate3d(0, -10px, 0) scaleY(0.95);
    transform: translate3d(0, -10px, 0) scaleY(0.95);
  }

  90% {
    -webkit-transform: translate3d(0, 5px, 0) scaleY(0.985);
    transform: translate3d(0, 5px, 0) scaleY(0.985);
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
.animate__bounceInDown {
  -webkit-animation-name: bounceInDown;
  animation-name: bounceInDown;
}
@-webkit-keyframes bounceInLeft {
  from,
  60%,
  75%,
  90%,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    -webkit-transform: translate3d(-3000px, 0, 0) scaleX(3);
    transform: translate3d(-3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    -webkit-transform: translate3d(25px, 0, 0) scaleX(1);
    transform: translate3d(25px, 0, 0) scaleX(1);
  }

  75% {
    -webkit-transform: translate3d(-10px, 0, 0) scaleX(0.98);
    transform: translate3d(-10px, 0, 0) scaleX(0.98);
  }

  90% {
    -webkit-transform: translate3d(5px, 0, 0) scaleX(0.995);
    transform: translate3d(5px, 0, 0) scaleX(0.995);
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@keyframes bounceInLeft {
  from,
  60%,
  75%,
  90%,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    -webkit-transform: translate3d(-3000px, 0, 0) scaleX(3);
    transform: translate3d(-3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    -webkit-transform: translate3d(25px, 0, 0) scaleX(1);
    transform: translate3d(25px, 0, 0) scaleX(1);
  }

  75% {
    -webkit-transform: translate3d(-10px, 0, 0) scaleX(0.98);
    transform: translate3d(-10px, 0, 0) scaleX(0.98);
  }

  90% {
    -webkit-transform: translate3d(5px, 0, 0) scaleX(0.995);
    transform: translate3d(5px, 0, 0) scaleX(0.995);
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
.animate__bounceInLeft {
  -webkit-animation-name: bounceInLeft;
  animation-name: bounceInLeft;
}
@-webkit-keyframes bounceInRight {
  from,
  60%,
  75%,
  90%,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    -webkit-transform: translate3d(3000px, 0, 0) scaleX(3);
    transform: translate3d(3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    -webkit-transform: translate3d(-25px, 0, 0) scaleX(1);
    transform: translate3d(-25px, 0, 0) scaleX(1);
  }

  75% {
    -webkit-transform: translate3d(10px, 0, 0) scaleX(0.98);
    transform: translate3d(10px, 0, 0) scaleX(0.98);
  }

  90% {
    -webkit-transform: translate3d(-5px, 0, 0) scaleX(0.995);
    transform: translate3d(-5px, 0, 0) scaleX(0.995);
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@keyframes bounceInRight {
  from,
  60%,
  75%,
  90%,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    -webkit-transform: translate3d(3000px, 0, 0) scaleX(3);
    transform: translate3d(3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    -webkit-transform: translate3d(-25px, 0, 0) scaleX(1);
    transform: translate3d(-25px, 0, 0) scaleX(1);
  }

  75% {
    -webkit-transform: translate3d(10px, 0, 0) scaleX(0.98);
    transform: translate3d(10px, 0, 0) scaleX(0.98);
  }

  90% {
    -webkit-transform: translate3d(-5px, 0, 0) scaleX(0.995);
    transform: translate3d(-5px, 0, 0) scaleX(0.995);
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
.animate__bounceInRight {
  -webkit-animation-name: bounceInRight;
  animation-name: bounceInRight;
}
@-webkit-keyframes bounceInUp {
  from,
  60%,
  75%,
  90%,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    -webkit-transform: translate3d(0, 3000px, 0) scaleY(5);
    transform: translate3d(0, 3000px, 0) scaleY(5);
  }

  60% {
    opacity: 1;
    -webkit-transform: translate3d(0, -20px, 0) scaleY(0.9);
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  75% {
    -webkit-transform: translate3d(0, 10px, 0) scaleY(0.95);
    transform: translate3d(0, 10px, 0) scaleY(0.95);
  }

  90% {
    -webkit-transform: translate3d(0, -5px, 0) scaleY(0.985);
    transform: translate3d(0, -5px, 0) scaleY(0.985);
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@keyframes bounceInUp {
  from,
  60%,
  75%,
  90%,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    -webkit-transform: translate3d(0, 3000px, 0) scaleY(5);
    transform: translate3d(0, 3000px, 0) scaleY(5);
  }

  60% {
    opacity: 1;
    -webkit-transform: translate3d(0, -20px, 0) scaleY(0.9);
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  75% {
    -webkit-transform: translate3d(0, 10px, 0) scaleY(0.95);
    transform: translate3d(0, 10px, 0) scaleY(0.95);
  }

  90% {
    -webkit-transform: translate3d(0, -5px, 0) scaleY(0.985);
    transform: translate3d(0, -5px, 0) scaleY(0.985);
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
.animate__bounceInUp {
  -webkit-animation-name: bounceInUp;
  animation-name: bounceInUp;
}
/* Bouncing exits  */
@-webkit-keyframes bounceOut {
  20% {
    -webkit-transform: scale3d(0.9, 0.9, 0.9);
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    -webkit-transform: scale3d(1.1, 1.1, 1.1);
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }
}
@keyframes bounceOut {
  20% {
    -webkit-transform: scale3d(0.9, 0.9, 0.9);
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    -webkit-transform: scale3d(1.1, 1.1, 1.1);
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }
}
.animate__bounceOut {
  -webkit-animation-duration: calc(1s * 0.75);
  animation-duration: calc(1s * 0.75);
  -webkit-animation-duration: calc(var(--animate-duration) * 0.75);
  animation-duration: calc(var(--animate-duration) * 0.75);
  -webkit-animation-name: bounceOut;
  animation-name: bounceOut;
}
@-webkit-keyframes bounceOutDown {
  20% {
    -webkit-transform: translate3d(0, 10px, 0) scaleY(0.985);
    transform: translate3d(0, 10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    -webkit-transform: translate3d(0, -20px, 0) scaleY(0.9);
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(0, 2000px, 0) scaleY(3);
    transform: translate3d(0, 2000px, 0) scaleY(3);
  }
}
@keyframes bounceOutDown {
  20% {
    -webkit-transform: translate3d(0, 10px, 0) scaleY(0.985);
    transform: translate3d(0, 10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    -webkit-transform: translate3d(0, -20px, 0) scaleY(0.9);
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(0, 2000px, 0) scaleY(3);
    transform: translate3d(0, 2000px, 0) scaleY(3);
  }
}
.animate__bounceOutDown {
  -webkit-animation-name: bounceOutDown;
  animation-name: bounceOutDown;
}
@-webkit-keyframes bounceOutLeft {
  20% {
    opacity: 1;
    -webkit-transform: translate3d(20px, 0, 0) scaleX(0.9);
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(-2000px, 0, 0) scaleX(2);
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
}
@keyframes bounceOutLeft {
  20% {
    opacity: 1;
    -webkit-transform: translate3d(20px, 0, 0) scaleX(0.9);
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(-2000px, 0, 0) scaleX(2);
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
}
.animate__bounceOutLeft {
  -webkit-animation-name: bounceOutLeft;
  animation-name: bounceOutLeft;
}
@-webkit-keyframes bounceOutRight {
  20% {
    opacity: 1;
    -webkit-transform: translate3d(-20px, 0, 0) scaleX(0.9);
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(2000px, 0, 0) scaleX(2);
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
}
@keyframes bounceOutRight {
  20% {
    opacity: 1;
    -webkit-transform: translate3d(-20px, 0, 0) scaleX(0.9);
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(2000px, 0, 0) scaleX(2);
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
}
.animate__bounceOutRight {
  -webkit-animation-name: bounceOutRight;
  animation-name: bounceOutRight;
}
@-webkit-keyframes bounceOutUp {
  20% {
    -webkit-transform: translate3d(0, -10px, 0) scaleY(0.985);
    transform: translate3d(0, -10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    -webkit-transform: translate3d(0, 20px, 0) scaleY(0.9);
    transform: translate3d(0, 20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(0, -2000px, 0) scaleY(3);
    transform: translate3d(0, -2000px, 0) scaleY(3);
  }
}
@keyframes bounceOutUp {
  20% {
    -webkit-transform: translate3d(0, -10px, 0) scaleY(0.985);
    transform: translate3d(0, -10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    -webkit-transform: translate3d(0, 20px, 0) scaleY(0.9);
    transform: translate3d(0, 20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(0, -2000px, 0) scaleY(3);
    transform: translate3d(0, -2000px, 0) scaleY(3);
  }
}
.animate__bounceOutUp {
  -webkit-animation-name: bounceOutUp;
  animation-name: bounceOutUp;
}
/* Fading entrances  */
@-webkit-keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
.animate__fadeIn {
  -webkit-animation-name: fadeIn;
  animation-name: fadeIn;
}
@-webkit-keyframes fadeInDown {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@keyframes fadeInDown {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
.animate__fadeInDown {
  -webkit-animation-name: fadeInDown;
  animation-name: fadeInDown;
}
@-webkit-keyframes fadeInDownBig {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, -2000px, 0);
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@keyframes fadeInDownBig {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, -2000px, 0);
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
.animate__fadeInDownBig {
  -webkit-animation-name: fadeInDownBig;
  animation-name: fadeInDownBig;
}
@-webkit-keyframes fadeInLeft {
  from {
    opacity: 0;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@keyframes fadeInLeft {
  from {
    opacity: 0;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
.animate__fadeInLeft {
  -webkit-animation-name: fadeInLeft;
  animation-name: fadeInLeft;
}
@-webkit-keyframes fadeInLeftBig {
  from {
    opacity: 0;
    -webkit-transform: translate3d(-2000px, 0, 0);
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@keyframes fadeInLeftBig {
  from {
    opacity: 0;
    -webkit-transform: translate3d(-2000px, 0, 0);
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
.animate__fadeInLeftBig {
  -webkit-animation-name: fadeInLeftBig;
  animation-name: fadeInLeftBig;
}
@-webkit-keyframes fadeInRight {
  from {
    opacity: 0;
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@keyframes fadeInRight {
  from {
    opacity: 0;
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
.animate__fadeInRight {
  -webkit-animation-name: fadeInRight;
  animation-name: fadeInRight;
}
@-webkit-keyframes fadeInRightBig {
  from {
    opacity: 0;
    -webkit-transform: translate3d(2000px, 0, 0);
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@keyframes fadeInRightBig {
  from {
    opacity: 0;
    -webkit-transform: translate3d(2000px, 0, 0);
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
.animate__fadeInRightBig {
  -webkit-animation-name: fadeInRightBig;
  animation-name: fadeInRightBig;
}
@-webkit-keyframes fadeInUp {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@keyframes fadeInUp {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
.animate__fadeInUp {
  -webkit-animation-name: fadeInUp;
  animation-name: fadeInUp;
}
@-webkit-keyframes fadeInUpBig {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, 2000px, 0);
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@keyframes fadeInUpBig {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, 2000px, 0);
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
.animate__fadeInUpBig {
  -webkit-animation-name: fadeInUpBig;
  animation-name: fadeInUpBig;
}
@-webkit-keyframes fadeInTopLeft {
  from {
    opacity: 0;
    -webkit-transform: translate3d(-100%, -100%, 0);
    transform: translate3d(-100%, -100%, 0);
  }
  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@keyframes fadeInTopLeft {
  from {
    opacity: 0;
    -webkit-transform: translate3d(-100%, -100%, 0);
    transform: translate3d(-100%, -100%, 0);
  }
  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
.animate__fadeInTopLeft {
  -webkit-animation-name: fadeInTopLeft;
  animation-name: fadeInTopLeft;
}
@-webkit-keyframes fadeInTopRight {
  from {
    opacity: 0;
    -webkit-transform: translate3d(100%, -100%, 0);
    transform: translate3d(100%, -100%, 0);
  }
  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@keyframes fadeInTopRight {
  from {
    opacity: 0;
    -webkit-transform: translate3d(100%, -100%, 0);
    transform: translate3d(100%, -100%, 0);
  }
  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
.animate__fadeInTopRight {
  -webkit-animation-name: fadeInTopRight;
  animation-name: fadeInTopRight;
}
@-webkit-keyframes fadeInBottomLeft {
  from {
    opacity: 0;
    -webkit-transform: translate3d(-100%, 100%, 0);
    transform: translate3d(-100%, 100%, 0);
  }
  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@keyframes fadeInBottomLeft {
  from {
    opacity: 0;
    -webkit-transform: translate3d(-100%, 100%, 0);
    transform: translate3d(-100%, 100%, 0);
  }
  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
.animate__fadeInBottomLeft {
  -webkit-animation-name: fadeInBottomLeft;
  animation-name: fadeInBottomLeft;
}
@-webkit-keyframes fadeInBottomRight {
  from {
    opacity: 0;
    -webkit-transform: translate3d(100%, 100%, 0);
    transform: translate3d(100%, 100%, 0);
  }
  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@keyframes fadeInBottomRight {
  from {
    opacity: 0;
    -webkit-transform: translate3d(100%, 100%, 0);
    transform: translate3d(100%, 100%, 0);
  }
  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
.animate__fadeInBottomRight {
  -webkit-animation-name: fadeInBottomRight;
  animation-name: fadeInBottomRight;
}
/* Fading exits */
@-webkit-keyframes fadeOut {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}
@keyframes fadeOut {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}
.animate__fadeOut {
  -webkit-animation-name: fadeOut;
  animation-name: fadeOut;
}
@-webkit-keyframes fadeOutDown {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }
}
@keyframes fadeOutDown {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }
}
.animate__fadeOutDown {
  -webkit-animation-name: fadeOutDown;
  animation-name: fadeOutDown;
}
@-webkit-keyframes fadeOutDownBig {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(0, 2000px, 0);
    transform: translate3d(0, 2000px, 0);
  }
}
@keyframes fadeOutDownBig {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(0, 2000px, 0);
    transform: translate3d(0, 2000px, 0);
  }
}
.animate__fadeOutDownBig {
  -webkit-animation-name: fadeOutDownBig;
  animation-name: fadeOutDownBig;
}
@-webkit-keyframes fadeOutLeft {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }
}
@keyframes fadeOutLeft {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }
}
.animate__fadeOutLeft {
  -webkit-animation-name: fadeOutLeft;
  animation-name: fadeOutLeft;
}
@-webkit-keyframes fadeOutLeftBig {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(-2000px, 0, 0);
    transform: translate3d(-2000px, 0, 0);
  }
}
@keyframes fadeOutLeftBig {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(-2000px, 0, 0);
    transform: translate3d(-2000px, 0, 0);
  }
}
.animate__fadeOutLeftBig {
  -webkit-animation-name: fadeOutLeftBig;
  animation-name: fadeOutLeftBig;
}
@-webkit-keyframes fadeOutRight {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
  }
}
@keyframes fadeOutRight {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
  }
}
.animate__fadeOutRight {
  -webkit-animation-name: fadeOutRight;
  animation-name: fadeOutRight;
}
@-webkit-keyframes fadeOutRightBig {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(2000px, 0, 0);
    transform: translate3d(2000px, 0, 0);
  }
}
@keyframes fadeOutRightBig {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(2000px, 0, 0);
    transform: translate3d(2000px, 0, 0);
  }
}
.animate__fadeOutRightBig {
  -webkit-animation-name: fadeOutRightBig;
  animation-name: fadeOutRightBig;
}
@-webkit-keyframes fadeOutUp {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }
}
@keyframes fadeOutUp {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }
}
.animate__fadeOutUp {
  -webkit-animation-name: fadeOutUp;
  animation-name: fadeOutUp;
}
@-webkit-keyframes fadeOutUpBig {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(0, -2000px, 0);
    transform: translate3d(0, -2000px, 0);
  }
}
@keyframes fadeOutUpBig {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(0, -2000px, 0);
    transform: translate3d(0, -2000px, 0);
  }
}
.animate__fadeOutUpBig {
  -webkit-animation-name: fadeOutUpBig;
  animation-name: fadeOutUpBig;
}
@-webkit-keyframes fadeOutTopLeft {
  from {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  to {
    opacity: 0;
    -webkit-transform: translate3d(-100%, -100%, 0);
    transform: translate3d(-100%, -100%, 0);
  }
}
@keyframes fadeOutTopLeft {
  from {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  to {
    opacity: 0;
    -webkit-transform: translate3d(-100%, -100%, 0);
    transform: translate3d(-100%, -100%, 0);
  }
}
.animate__fadeOutTopLeft {
  -webkit-animation-name: fadeOutTopLeft;
  animation-name: fadeOutTopLeft;
}
@-webkit-keyframes fadeOutTopRight {
  from {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  to {
    opacity: 0;
    -webkit-transform: translate3d(100%, -100%, 0);
    transform: translate3d(100%, -100%, 0);
  }
}
@keyframes fadeOutTopRight {
  from {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  to {
    opacity: 0;
    -webkit-transform: translate3d(100%, -100%, 0);
    transform: translate3d(100%, -100%, 0);
  }
}
.animate__fadeOutTopRight {
  -webkit-animation-name: fadeOutTopRight;
  animation-name: fadeOutTopRight;
}
@-webkit-keyframes fadeOutBottomRight {
  from {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  to {
    opacity: 0;
    -webkit-transform: translate3d(100%, 100%, 0);
    transform: translate3d(100%, 100%, 0);
  }
}
@keyframes fadeOutBottomRight {
  from {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  to {
    opacity: 0;
    -webkit-transform: translate3d(100%, 100%, 0);
    transform: translate3d(100%, 100%, 0);
  }
}
.animate__fadeOutBottomRight {
  -webkit-animation-name: fadeOutBottomRight;
  animation-name: fadeOutBottomRight;
}
@-webkit-keyframes fadeOutBottomLeft {
  from {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  to {
    opacity: 0;
    -webkit-transform: translate3d(-100%, 100%, 0);
    transform: translate3d(-100%, 100%, 0);
  }
}
@keyframes fadeOutBottomLeft {
  from {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  to {
    opacity: 0;
    -webkit-transform: translate3d(-100%, 100%, 0);
    transform: translate3d(-100%, 100%, 0);
  }
}
.animate__fadeOutBottomLeft {
  -webkit-animation-name: fadeOutBottomLeft;
  animation-name: fadeOutBottomLeft;
}
/* Flippers */
@-webkit-keyframes flip {
  from {
    -webkit-transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }

  40% {
    -webkit-transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }

  50% {
    -webkit-transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }

  80% {
    -webkit-transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }

  to {
    -webkit-transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
}
@keyframes flip {
  from {
    -webkit-transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }

  40% {
    -webkit-transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }

  50% {
    -webkit-transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }

  80% {
    -webkit-transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }

  to {
    -webkit-transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
}
.animate__animated.animate__flip {
  -webkit-backface-visibility: visible;
  backface-visibility: visible;
  -webkit-animation-name: flip;
  animation-name: flip;
}
@-webkit-keyframes flipInX {
  from {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }

  60% {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    -webkit-transform: perspective(400px);
    transform: perspective(400px);
  }
}
@keyframes flipInX {
  from {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }

  60% {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    -webkit-transform: perspective(400px);
    transform: perspective(400px);
  }
}
.animate__flipInX {
  -webkit-backface-visibility: visible !important;
  backface-visibility: visible !important;
  -webkit-animation-name: flipInX;
  animation-name: flipInX;
}
@-webkit-keyframes flipInY {
  from {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }

  60% {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    -webkit-transform: perspective(400px);
    transform: perspective(400px);
  }
}
@keyframes flipInY {
  from {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }

  60% {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    -webkit-transform: perspective(400px);
    transform: perspective(400px);
  }
}
.animate__flipInY {
  -webkit-backface-visibility: visible !important;
  backface-visibility: visible !important;
  -webkit-animation-name: flipInY;
  animation-name: flipInY;
}
@-webkit-keyframes flipOutX {
  from {
    -webkit-transform: perspective(400px);
    transform: perspective(400px);
  }

  30% {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
}
@keyframes flipOutX {
  from {
    -webkit-transform: perspective(400px);
    transform: perspective(400px);
  }

  30% {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
}
.animate__flipOutX {
  -webkit-animation-duration: calc(1s * 0.75);
  animation-duration: calc(1s * 0.75);
  -webkit-animation-duration: calc(var(--animate-duration) * 0.75);
  animation-duration: calc(var(--animate-duration) * 0.75);
  -webkit-animation-name: flipOutX;
  animation-name: flipOutX;
  -webkit-backface-visibility: visible !important;
  backface-visibility: visible !important;
}
@-webkit-keyframes flipOutY {
  from {
    -webkit-transform: perspective(400px);
    transform: perspective(400px);
  }

  30% {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
}
@keyframes flipOutY {
  from {
    -webkit-transform: perspective(400px);
    transform: perspective(400px);
  }

  30% {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
}
.animate__flipOutY {
  -webkit-animation-duration: calc(1s * 0.75);
  animation-duration: calc(1s * 0.75);
  -webkit-animation-duration: calc(var(--animate-duration) * 0.75);
  animation-duration: calc(var(--animate-duration) * 0.75);
  -webkit-backface-visibility: visible !important;
  backface-visibility: visible !important;
  -webkit-animation-name: flipOutY;
  animation-name: flipOutY;
}
/* Lightspeed */
@-webkit-keyframes lightSpeedInRight {
  from {
    -webkit-transform: translate3d(100%, 0, 0) skewX(-30deg);
    transform: translate3d(100%, 0, 0) skewX(-30deg);
    opacity: 0;
  }

  60% {
    -webkit-transform: skewX(20deg);
    transform: skewX(20deg);
    opacity: 1;
  }

  80% {
    -webkit-transform: skewX(-5deg);
    transform: skewX(-5deg);
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@keyframes lightSpeedInRight {
  from {
    -webkit-transform: translate3d(100%, 0, 0) skewX(-30deg);
    transform: translate3d(100%, 0, 0) skewX(-30deg);
    opacity: 0;
  }

  60% {
    -webkit-transform: skewX(20deg);
    transform: skewX(20deg);
    opacity: 1;
  }

  80% {
    -webkit-transform: skewX(-5deg);
    transform: skewX(-5deg);
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
.animate__lightSpeedInRight {
  -webkit-animation-name: lightSpeedInRight;
  animation-name: lightSpeedInRight;
  -webkit-animation-timing-function: ease-out;
  animation-timing-function: ease-out;
}
@-webkit-keyframes lightSpeedInLeft {
  from {
    -webkit-transform: translate3d(-100%, 0, 0) skewX(30deg);
    transform: translate3d(-100%, 0, 0) skewX(30deg);
    opacity: 0;
  }

  60% {
    -webkit-transform: skewX(-20deg);
    transform: skewX(-20deg);
    opacity: 1;
  }

  80% {
    -webkit-transform: skewX(5deg);
    transform: skewX(5deg);
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@keyframes lightSpeedInLeft {
  from {
    -webkit-transform: translate3d(-100%, 0, 0) skewX(30deg);
    transform: translate3d(-100%, 0, 0) skewX(30deg);
    opacity: 0;
  }

  60% {
    -webkit-transform: skewX(-20deg);
    transform: skewX(-20deg);
    opacity: 1;
  }

  80% {
    -webkit-transform: skewX(5deg);
    transform: skewX(5deg);
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
.animate__lightSpeedInLeft {
  -webkit-animation-name: lightSpeedInLeft;
  animation-name: lightSpeedInLeft;
  -webkit-animation-timing-function: ease-out;
  animation-timing-function: ease-out;
}
@-webkit-keyframes lightSpeedOutRight {
  from {
    opacity: 1;
  }

  to {
    -webkit-transform: translate3d(100%, 0, 0) skewX(30deg);
    transform: translate3d(100%, 0, 0) skewX(30deg);
    opacity: 0;
  }
}
@keyframes lightSpeedOutRight {
  from {
    opacity: 1;
  }

  to {
    -webkit-transform: translate3d(100%, 0, 0) skewX(30deg);
    transform: translate3d(100%, 0, 0) skewX(30deg);
    opacity: 0;
  }
}
.animate__lightSpeedOutRight {
  -webkit-animation-name: lightSpeedOutRight;
  animation-name: lightSpeedOutRight;
  -webkit-animation-timing-function: ease-in;
  animation-timing-function: ease-in;
}
@-webkit-keyframes lightSpeedOutLeft {
  from {
    opacity: 1;
  }

  to {
    -webkit-transform: translate3d(-100%, 0, 0) skewX(-30deg);
    transform: translate3d(-100%, 0, 0) skewX(-30deg);
    opacity: 0;
  }
}
@keyframes lightSpeedOutLeft {
  from {
    opacity: 1;
  }

  to {
    -webkit-transform: translate3d(-100%, 0, 0) skewX(-30deg);
    transform: translate3d(-100%, 0, 0) skewX(-30deg);
    opacity: 0;
  }
}
.animate__lightSpeedOutLeft {
  -webkit-animation-name: lightSpeedOutLeft;
  animation-name: lightSpeedOutLeft;
  -webkit-animation-timing-function: ease-in;
  animation-timing-function: ease-in;
}
/* Rotating entrances */
@-webkit-keyframes rotateIn {
  from {
    -webkit-transform: rotate3d(0, 0, 1, -200deg);
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}
@keyframes rotateIn {
  from {
    -webkit-transform: rotate3d(0, 0, 1, -200deg);
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}
.animate__rotateIn {
  -webkit-animation-name: rotateIn;
  animation-name: rotateIn;
  -webkit-transform-origin: center;
  transform-origin: center;
}
@-webkit-keyframes rotateInDownLeft {
  from {
    -webkit-transform: rotate3d(0, 0, 1, -45deg);
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}
@keyframes rotateInDownLeft {
  from {
    -webkit-transform: rotate3d(0, 0, 1, -45deg);
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}
.animate__rotateInDownLeft {
  -webkit-animation-name: rotateInDownLeft;
  animation-name: rotateInDownLeft;
  -webkit-transform-origin: left bottom;
  transform-origin: left bottom;
}
@-webkit-keyframes rotateInDownRight {
  from {
    -webkit-transform: rotate3d(0, 0, 1, 45deg);
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}
@keyframes rotateInDownRight {
  from {
    -webkit-transform: rotate3d(0, 0, 1, 45deg);
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}
.animate__rotateInDownRight {
  -webkit-animation-name: rotateInDownRight;
  animation-name: rotateInDownRight;
  -webkit-transform-origin: right bottom;
  transform-origin: right bottom;
}
@-webkit-keyframes rotateInUpLeft {
  from {
    -webkit-transform: rotate3d(0, 0, 1, 45deg);
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}
@keyframes rotateInUpLeft {
  from {
    -webkit-transform: rotate3d(0, 0, 1, 45deg);
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}
.animate__rotateInUpLeft {
  -webkit-animation-name: rotateInUpLeft;
  animation-name: rotateInUpLeft;
  -webkit-transform-origin: left bottom;
  transform-origin: left bottom;
}
@-webkit-keyframes rotateInUpRight {
  from {
    -webkit-transform: rotate3d(0, 0, 1, -90deg);
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}
@keyframes rotateInUpRight {
  from {
    -webkit-transform: rotate3d(0, 0, 1, -90deg);
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}
.animate__rotateInUpRight {
  -webkit-animation-name: rotateInUpRight;
  animation-name: rotateInUpRight;
  -webkit-transform-origin: right bottom;
  transform-origin: right bottom;
}
/* Rotating exits */
@-webkit-keyframes rotateOut {
  from {
    opacity: 1;
  }

  to {
    -webkit-transform: rotate3d(0, 0, 1, 200deg);
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
}
@keyframes rotateOut {
  from {
    opacity: 1;
  }

  to {
    -webkit-transform: rotate3d(0, 0, 1, 200deg);
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
}
.animate__rotateOut {
  -webkit-animation-name: rotateOut;
  animation-name: rotateOut;
  -webkit-transform-origin: center;
  transform-origin: center;
}
@-webkit-keyframes rotateOutDownLeft {
  from {
    opacity: 1;
  }

  to {
    -webkit-transform: rotate3d(0, 0, 1, 45deg);
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
}
@keyframes rotateOutDownLeft {
  from {
    opacity: 1;
  }

  to {
    -webkit-transform: rotate3d(0, 0, 1, 45deg);
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
}
.animate__rotateOutDownLeft {
  -webkit-animation-name: rotateOutDownLeft;
  animation-name: rotateOutDownLeft;
  -webkit-transform-origin: left bottom;
  transform-origin: left bottom;
}
@-webkit-keyframes rotateOutDownRight {
  from {
    opacity: 1;
  }

  to {
    -webkit-transform: rotate3d(0, 0, 1, -45deg);
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
}
@keyframes rotateOutDownRight {
  from {
    opacity: 1;
  }

  to {
    -webkit-transform: rotate3d(0, 0, 1, -45deg);
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
}
.animate__rotateOutDownRight {
  -webkit-animation-name: rotateOutDownRight;
  animation-name: rotateOutDownRight;
  -webkit-transform-origin: right bottom;
  transform-origin: right bottom;
}
@-webkit-keyframes rotateOutUpLeft {
  from {
    opacity: 1;
  }

  to {
    -webkit-transform: rotate3d(0, 0, 1, -45deg);
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
}
@keyframes rotateOutUpLeft {
  from {
    opacity: 1;
  }

  to {
    -webkit-transform: rotate3d(0, 0, 1, -45deg);
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
}
.animate__rotateOutUpLeft {
  -webkit-animation-name: rotateOutUpLeft;
  animation-name: rotateOutUpLeft;
  -webkit-transform-origin: left bottom;
  transform-origin: left bottom;
}
@-webkit-keyframes rotateOutUpRight {
  from {
    opacity: 1;
  }

  to {
    -webkit-transform: rotate3d(0, 0, 1, 90deg);
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
}
@keyframes rotateOutUpRight {
  from {
    opacity: 1;
  }

  to {
    -webkit-transform: rotate3d(0, 0, 1, 90deg);
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
}
.animate__rotateOutUpRight {
  -webkit-animation-name: rotateOutUpRight;
  animation-name: rotateOutUpRight;
  -webkit-transform-origin: right bottom;
  transform-origin: right bottom;
}
/* Specials */
@-webkit-keyframes hinge {
  0% {
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
  }

  20%,
  60% {
    -webkit-transform: rotate3d(0, 0, 1, 80deg);
    transform: rotate3d(0, 0, 1, 80deg);
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
  }

  40%,
  80% {
    -webkit-transform: rotate3d(0, 0, 1, 60deg);
    transform: rotate3d(0, 0, 1, 60deg);
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  to {
    -webkit-transform: translate3d(0, 700px, 0);
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
}
@keyframes hinge {
  0% {
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
  }

  20%,
  60% {
    -webkit-transform: rotate3d(0, 0, 1, 80deg);
    transform: rotate3d(0, 0, 1, 80deg);
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
  }

  40%,
  80% {
    -webkit-transform: rotate3d(0, 0, 1, 60deg);
    transform: rotate3d(0, 0, 1, 60deg);
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  to {
    -webkit-transform: translate3d(0, 700px, 0);
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
}
.animate__hinge {
  -webkit-animation-duration: calc(1s * 2);
  animation-duration: calc(1s * 2);
  -webkit-animation-duration: calc(var(--animate-duration) * 2);
  animation-duration: calc(var(--animate-duration) * 2);
  -webkit-animation-name: hinge;
  animation-name: hinge;
  -webkit-transform-origin: top left;
  transform-origin: top left;
}
@-webkit-keyframes jackInTheBox {
  from {
    opacity: 0;
    -webkit-transform: scale(0.1) rotate(30deg);
    transform: scale(0.1) rotate(30deg);
    -webkit-transform-origin: center bottom;
    transform-origin: center bottom;
  }

  50% {
    -webkit-transform: rotate(-10deg);
    transform: rotate(-10deg);
  }

  70% {
    -webkit-transform: rotate(3deg);
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
@keyframes jackInTheBox {
  from {
    opacity: 0;
    -webkit-transform: scale(0.1) rotate(30deg);
    transform: scale(0.1) rotate(30deg);
    -webkit-transform-origin: center bottom;
    transform-origin: center bottom;
  }

  50% {
    -webkit-transform: rotate(-10deg);
    transform: rotate(-10deg);
  }

  70% {
    -webkit-transform: rotate(3deg);
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
.animate__jackInTheBox {
  -webkit-animation-name: jackInTheBox;
  animation-name: jackInTheBox;
}
/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */
@-webkit-keyframes rollIn {
  from {
    opacity: 0;
    -webkit-transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@keyframes rollIn {
  from {
    opacity: 0;
    -webkit-transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
.animate__rollIn {
  -webkit-animation-name: rollIn;
  animation-name: rollIn;
}
/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */
@-webkit-keyframes rollOut {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
}
@keyframes rollOut {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
}
.animate__rollOut {
  -webkit-animation-name: rollOut;
  animation-name: rollOut;
}
/* Zooming entrances */
@-webkit-keyframes zoomIn {
  from {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
}
@keyframes zoomIn {
  from {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
}
.animate__zoomIn {
  -webkit-animation-name: zoomIn;
  animation-name: zoomIn;
}
@-webkit-keyframes zoomInDown {
  from {
    opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
}
@keyframes zoomInDown {
  from {
    opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
}
.animate__zoomInDown {
  -webkit-animation-name: zoomInDown;
  animation-name: zoomInDown;
}
@-webkit-keyframes zoomInLeft {
  from {
    opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
}
@keyframes zoomInLeft {
  from {
    opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
}
.animate__zoomInLeft {
  -webkit-animation-name: zoomInLeft;
  animation-name: zoomInLeft;
}
@-webkit-keyframes zoomInRight {
  from {
    opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
}
@keyframes zoomInRight {
  from {
    opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
}
.animate__zoomInRight {
  -webkit-animation-name: zoomInRight;
  animation-name: zoomInRight;
}
@-webkit-keyframes zoomInUp {
  from {
    opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
}
@keyframes zoomInUp {
  from {
    opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
}
.animate__zoomInUp {
  -webkit-animation-name: zoomInUp;
  animation-name: zoomInUp;
}
/* Zooming exits */
@-webkit-keyframes zoomOut {
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
}
@keyframes zoomOut {
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
}
.animate__zoomOut {
  -webkit-animation-name: zoomOut;
  animation-name: zoomOut;
}
@-webkit-keyframes zoomOutDown {
  40% {
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
}
@keyframes zoomOutDown {
  40% {
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
}
.animate__zoomOutDown {
  -webkit-animation-name: zoomOutDown;
  animation-name: zoomOutDown;
  -webkit-transform-origin: center bottom;
  transform-origin: center bottom;
}
@-webkit-keyframes zoomOutLeft {
  40% {
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    -webkit-transform: scale(0.1) translate3d(-2000px, 0, 0);
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
}
@keyframes zoomOutLeft {
  40% {
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    -webkit-transform: scale(0.1) translate3d(-2000px, 0, 0);
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
}
.animate__zoomOutLeft {
  -webkit-animation-name: zoomOutLeft;
  animation-name: zoomOutLeft;
  -webkit-transform-origin: left center;
  transform-origin: left center;
}
@-webkit-keyframes zoomOutRight {
  40% {
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    -webkit-transform: scale(0.1) translate3d(2000px, 0, 0);
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
}
@keyframes zoomOutRight {
  40% {
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    -webkit-transform: scale(0.1) translate3d(2000px, 0, 0);
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
}
.animate__zoomOutRight {
  -webkit-animation-name: zoomOutRight;
  animation-name: zoomOutRight;
  -webkit-transform-origin: right center;
  transform-origin: right center;
}
@-webkit-keyframes zoomOutUp {
  40% {
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
}
@keyframes zoomOutUp {
  40% {
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
}
.animate__zoomOutUp {
  -webkit-animation-name: zoomOutUp;
  animation-name: zoomOutUp;
  -webkit-transform-origin: center bottom;
  transform-origin: center bottom;
}
/* Sliding entrances */
@-webkit-keyframes slideInDown {
  from {
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@keyframes slideInDown {
  from {
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
.animate__slideInDown {
  -webkit-animation-name: slideInDown;
  animation-name: slideInDown;
}
@-webkit-keyframes slideInLeft {
  from {
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@keyframes slideInLeft {
  from {
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
.animate__slideInLeft {
  -webkit-animation-name: slideInLeft;
  animation-name: slideInLeft;
}
@-webkit-keyframes slideInRight {
  from {
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@keyframes slideInRight {
  from {
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
.animate__slideInRight {
  -webkit-animation-name: slideInRight;
  animation-name: slideInRight;
}
@-webkit-keyframes slideInUp {
  from {
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@keyframes slideInUp {
  from {
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
.animate__slideInUp {
  -webkit-animation-name: slideInUp;
  animation-name: slideInUp;
}
/* Sliding exits */
@-webkit-keyframes slideOutDown {
  from {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }
}
@keyframes slideOutDown {
  from {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }
}
.animate__slideOutDown {
  -webkit-animation-name: slideOutDown;
  animation-name: slideOutDown;
}
@-webkit-keyframes slideOutLeft {
  from {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }
}
@keyframes slideOutLeft {
  from {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }
}
.animate__slideOutLeft {
  -webkit-animation-name: slideOutLeft;
  animation-name: slideOutLeft;
}
@-webkit-keyframes slideOutRight {
  from {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
  }
}
@keyframes slideOutRight {
  from {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
  }
}
.animate__slideOutRight {
  -webkit-animation-name: slideOutRight;
  animation-name: slideOutRight;
}
@-webkit-keyframes slideOutUp {
  from {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }
}
@keyframes slideOutUp {
  from {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }
}
.animate__slideOutUp {
  -webkit-animation-name: slideOutUp;
  animation-name: slideOutUp;
}
`)();
var Landing_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "h1.svelte-18q8awg.svelte-18q8awg{padding-top:.5rem;padding-bottom:.5rem;margin:0}section.svelte-18q8awg.svelte-18q8awg{height:100vh}#home.svelte-18q8awg.svelte-18q8awg{display:flex;flex-flow:column wrap;justify-content:center;align-items:center}article.svelte-18q8awg img.svelte-18q8awg{height:24px}#react-window.svelte-18q8awg.svelte-18q8awg{display:flex;text-align:center;border-radius:8px 8px 0px 0px}#react-window.svelte-18q8awg span.svelte-18q8awg{margin:0 auto}article.svelte-18q8awg.svelte-18q8awg{box-sizing:border-box;width:380px;display:inline-block;border-radius:8px}@media(max-width: 375px){article.svelte-18q8awg.svelte-18q8awg{width:95vw}}@media(max-width: 310){article.svelte-18q8awg.svelte-18q8awg{width:95vw}}")();
const css$7 = {
  code: "h1.svelte-18q8awg.svelte-18q8awg{padding-top:.5rem;padding-bottom:.5rem;margin:0}section.svelte-18q8awg.svelte-18q8awg{height:100vh}#home.svelte-18q8awg.svelte-18q8awg{display:flex;flex-flow:column wrap;justify-content:center;align-items:center}article.svelte-18q8awg img.svelte-18q8awg{height:24px}#react-window.svelte-18q8awg.svelte-18q8awg{display:flex;text-align:center;border-radius:8px 8px 0px 0px}#react-window.svelte-18q8awg span.svelte-18q8awg{margin:0 auto}article.svelte-18q8awg.svelte-18q8awg{box-sizing:border-box;width:380px;display:inline-block;border-radius:8px}@media(max-width: 375px){article.svelte-18q8awg.svelte-18q8awg{width:95vw}}@media(max-width: 310){article.svelte-18q8awg.svelte-18q8awg{width:95vw}}",
  map: null
};
const Landing = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$7);
  return `<section id="${"home"}" class="${"svelte-18q8awg"}"><h1 class="${"slide-in-fwd-top svelte-18q8awg"}"><span class="${"text-lblue"}">Welcome,</span><span class="${"text-pink"}">\${</span><span class="${"text-lblue"}">&#39;</span><span class="${"text-green"}">Visitor!</span><span class="${"text-lblue"}">&#39;</span><span class="${"text-pink"}">}</span></h1>
    <h1 class="${"slide-in-fwd-top-delay-4 svelte-18q8awg"}"><span class="${"text-pink"}">Thank</span> <span class="${"text-ulblue"}">you</span> <span class="${"text-pink"}">for</span> <span class="${"text-lblue"}">visiting </span><span class="${"text-green"}">my site</span></h1>
    <div><article class="${"bg-light svelte-18q8awg"}"><div id="${"react-window"}" class="${"bg-window svelte-18q8awg"}"><img src="${"dots.svg"}" alt="${"aa"}" class="${"svelte-18q8awg"}">
                <span class="${"svelte-18q8awg"}">App.jsx</span></div>
            ${validate_component(ReactWindow, "ReactWindow").$$render($$result, {}, {}, {})}</article></div>
    
</section>`;
});
var Project_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".project.svelte-kasg1l.svelte-kasg1l{max-width:400px;display:flex;flex-flow:column wrap}img.svelte-kasg1l.svelte-kasg1l{width:100%;aspect-ratio:1}#project-window.svelte-kasg1l.svelte-kasg1l{width:100%;display:flex;align-items:center;position:relative;border-bottom:1px solid #20212e;border-radius:.5rem .5rem 0 0}#project-window.svelte-kasg1l img.svelte-kasg1l{all:unset;height:20px}#project-window.svelte-kasg1l span.svelte-kasg1l{font-size:.8rem;position:absolute;left:40%}.buttons.svelte-kasg1l.svelte-kasg1l{display:flex;flex-flow:row nowrap;justify-content:space-around}a.svelte-kasg1l.svelte-kasg1l{padding-top:.5rem;padding-bottom:.5rem;text-decoration:none}")();
const css$6 = {
  code: ".project.svelte-kasg1l.svelte-kasg1l{max-width:400px;display:flex;flex-flow:column wrap}img.svelte-kasg1l.svelte-kasg1l{width:100%;aspect-ratio:1}#project-window.svelte-kasg1l.svelte-kasg1l{width:100%;display:flex;align-items:center;position:relative;border-bottom:1px solid #20212e;border-radius:.5rem .5rem 0 0}#project-window.svelte-kasg1l img.svelte-kasg1l{all:unset;height:20px}#project-window.svelte-kasg1l span.svelte-kasg1l{font-size:.8rem;position:absolute;left:40%}.buttons.svelte-kasg1l.svelte-kasg1l{display:flex;flex-flow:row nowrap;justify-content:space-around}a.svelte-kasg1l.svelte-kasg1l{padding-top:.5rem;padding-bottom:.5rem;text-decoration:none}",
  map: null
};
const Project = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { project } = $$props;
  let { linkGithub } = $$props;
  let { linkDemo } = $$props;
  let { img } = $$props;
  let { id } = $$props;
  if ($$props.project === void 0 && $$bindings.project && project !== void 0)
    $$bindings.project(project);
  if ($$props.linkGithub === void 0 && $$bindings.linkGithub && linkGithub !== void 0)
    $$bindings.linkGithub(linkGithub);
  if ($$props.linkDemo === void 0 && $$bindings.linkDemo && linkDemo !== void 0)
    $$bindings.linkDemo(linkDemo);
  if ($$props.img === void 0 && $$bindings.img && img !== void 0)
    $$bindings.img(img);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  $$result.css.add(css$6);
  return `<div class="${"project svelte-kasg1l"}"${add_attribute("id", id, 0)}><h1>${escape(project)}</h1>
    <div id="${"project-window"}" class="${"bg-light svelte-kasg1l"}"><img src="${"dots.svg"}" alt="${""}" class="${"svelte-kasg1l"}">
        <span class="${"svelte-kasg1l"}">Project</span></div>
    <img${add_attribute("src", img, 0)} alt="${"random"}" class="${"svelte-kasg1l"}">
    <div class="${"buttons svelte-kasg1l"}"><a class="${"text-lblue svelte-kasg1l"}"${add_attribute("href", linkGithub, 0)} target="${"_blank"}">Github</a>
        
        <a class="${"text-pink svelte-kasg1l"}"${add_attribute("href", linkDemo, 0)} target="${"_blank"}">Demo</a></div>
</div>`;
});
var Projects_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "#projects-container.svelte-1uaa0fx{max-width:900px;margin:0 auto;display:grid;align-items:center;justify-items:center;grid-template-columns:repeat(auto-fit, minmax(240px, 1fr))}h1.svelte-1uaa0fx{text-align:center;padding:0;margin:0;padding-top:4rem}")();
const css$5 = {
  code: "#projects-container.svelte-1uaa0fx{max-width:900px;margin:0 auto;display:grid;align-items:center;justify-items:center;grid-template-columns:repeat(auto-fit, minmax(240px, 1fr))}h1.svelte-1uaa0fx{text-align:center;padding:0;margin:0;padding-top:4rem}",
  map: null
};
const Projects = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$5);
  return `<section id="${"projects"}"><pre><code>
<h1 class="${"svelte-1uaa0fx"}">&gt; npm run showMyProjects</h1>
</code></pre>
<div id="${"projects-container"}" class="${"svelte-1uaa0fx"}">${validate_component(Project, "Project").$$render($$result, {
    id: "project-1",
    project: "Blog Back-End",
    linkGithub: "https://github.com/Zaniuk/Blog-backend",
    linkDemo: "https://ancient-badlands-91189.herokuapp.com/api/posts",
    img: "blog.png"
  }, {}, {})}
    ${validate_component(Project, "Project").$$render($$result, {
    id: "project-2",
    project: "The Wine Valley",
    linkGithub: "https://github.com/Zaniuk/TiendaVinos",
    linkDemo: "https://winevalley.pages.dev/",
    img: "wine.png"
  }, {}, {})}</div>
</section>`;
});
var Card_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "h1.svelte-1xtdqm5.svelte-1xtdqm5{text-align:center;margin-top:.5rem;margin-bottom:.5rem}article.svelte-1xtdqm5.svelte-1xtdqm5{box-sizing:border-box;padding-top:.5rem;padding-bottom:.5rem;padding-right:.2rem;padding-left:.2rem}.img-wrapper.svelte-1xtdqm5.svelte-1xtdqm5{width:240px;height:240px;box-sizing:border-box;display:flex;justify-content:center;align-items:center;text-align:center;padding:.5rem;border-radius:.5rem}.img-wrapper.svelte-1xtdqm5 img.svelte-1xtdqm5{width:90%;height:auto}")();
const css$4 = {
  code: "h1.svelte-1xtdqm5.svelte-1xtdqm5{text-align:center;margin-top:.5rem;margin-bottom:.5rem}article.svelte-1xtdqm5.svelte-1xtdqm5{box-sizing:border-box;padding-top:.5rem;padding-bottom:.5rem;padding-right:.2rem;padding-left:.2rem}.img-wrapper.svelte-1xtdqm5.svelte-1xtdqm5{width:240px;height:240px;box-sizing:border-box;display:flex;justify-content:center;align-items:center;text-align:center;padding:.5rem;border-radius:.5rem}.img-wrapper.svelte-1xtdqm5 img.svelte-1xtdqm5{width:90%;height:auto}",
  map: null
};
const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { technology } = $$props;
  let { color1 } = $$props;
  let { img } = $$props;
  let { exc } = $$props;
  let { id } = $$props;
  if ($$props.technology === void 0 && $$bindings.technology && technology !== void 0)
    $$bindings.technology(technology);
  if ($$props.color1 === void 0 && $$bindings.color1 && color1 !== void 0)
    $$bindings.color1(color1);
  if ($$props.img === void 0 && $$bindings.img && img !== void 0)
    $$bindings.img(img);
  if ($$props.exc === void 0 && $$bindings.exc && exc !== void 0)
    $$bindings.exc(exc);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  $$result.css.add(css$4);
  return `<article${add_attribute("id", id, 0)} class="${"svelte-1xtdqm5"}"><h1 class="${escape(null_to_empty(color1), true) + " svelte-1xtdqm5"}">${escape(technology)}</h1>
    <div class="${"img-wrapper bg-light svelte-1xtdqm5"}"><img class="${escape(null_to_empty(exc), true) + " svelte-1xtdqm5"}"${add_attribute("src", img, 0)} alt="${"random"}"></div>
</article>`;
});
var Skills_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "div.svelte-1uglg7r{max-width:900px;margin:0 auto;display:grid;align-items:center;justify-items:center;grid-template-columns:repeat(auto-fit, minmax(240px, 1fr))}h1.svelte-1uglg7r{text-align:center;padding:0;margin:0;padding-top:4rem}")();
const css$3 = {
  code: "div.svelte-1uglg7r{max-width:900px;margin:0 auto;display:grid;align-items:center;justify-items:center;grid-template-columns:repeat(auto-fit, minmax(240px, 1fr))}h1.svelte-1uglg7r{text-align:center;padding:0;margin:0;padding-top:4rem}",
  map: null
};
const Skills = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `<section id="${"skills"}"><h1 class="${"svelte-1uglg7r"}"><span class="${"text-pink"}">console</span>.<span class="${"text-lblue"}">log</span><span class="${"text-ulblue"}">(</span><span class="${"text-green"}">&#39;My Skills&#39;</span><span class="${"text-ulblue"}">)</span>;</h1>

<div class="${"svelte-1uglg7r"}">${validate_component(Card, "Card").$$render($$result, {
    id: "card-1",
    color1: "text-green",
    technology: "NodeJS",
    img: "nodejs.png"
  }, {}, {})}
        ${validate_component(Card, "Card").$$render($$result, {
    id: "card-2",
    color1: "text-purple",
    technology: "React",
    img: "react.png"
  }, {}, {})}
        ${validate_component(Card, "Card").$$render($$result, {
    id: "card-3",
    color1: "text-ulblue",
    technology: "MongoDB",
    img: "mongo.png"
  }, {}, {})}
        ${validate_component(Card, "Card").$$render($$result, {
    id: "card-4",
    color1: "text-lblue",
    technology: "ExpressJS",
    img: "express.png"
  }, {}, {})}
        ${validate_component(Card, "Card").$$render($$result, {
    id: "card-5",
    color1: "text-yellow",
    technology: "JavaScript",
    img: "js.png"
  }, {}, {})}
        ${validate_component(Card, "Card").$$render($$result, {
    id: "card-6",
    color1: "text-pink",
    technology: "HTML/CSS",
    img: "htmlcss.png",
    exc: "html-img"
  }, {}, {})}</div>
</section>`;
});
var Window_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "article.svelte-a80smr img.svelte-a80smr{height:24px}#react-window.svelte-a80smr.svelte-a80smr{display:flex;text-align:center;border-radius:8px 8px 0px 0px;position:relative}#react-window.svelte-a80smr span.svelte-a80smr{position:absolute;left:40%}article.svelte-a80smr.svelte-a80smr{width:380px;display:inline-block;border-radius:8px;height:300px}@media(max-width: 375px){article.svelte-a80smr.svelte-a80smr{font-size:1rem;width:100%}}@media(max-width: 367px){article.svelte-a80smr.svelte-a80smr{height:max-content}}@media(max-width: 310){article.svelte-a80smr.svelte-a80smr{font-size:.9rem;width:100%}}")();
const css$2 = {
  code: "article.svelte-a80smr img.svelte-a80smr{height:24px}#react-window.svelte-a80smr.svelte-a80smr{display:flex;text-align:center;border-radius:8px 8px 0px 0px;position:relative}#react-window.svelte-a80smr span.svelte-a80smr{position:absolute;left:40%}article.svelte-a80smr.svelte-a80smr{width:380px;display:inline-block;border-radius:8px;height:300px}@media(max-width: 375px){article.svelte-a80smr.svelte-a80smr{font-size:1rem;width:100%}}@media(max-width: 367px){article.svelte-a80smr.svelte-a80smr{height:max-content}}@media(max-width: 310){article.svelte-a80smr.svelte-a80smr{font-size:.9rem;width:100%}}",
  map: null
};
const Window = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { text } = $$props;
  let { title } = $$props;
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  $$result.css.add(css$2);
  return `<div><article class="${"bg-light svelte-a80smr"}"><div id="${"react-window"}" class="${"bg-window svelte-a80smr"}"><img src="${"dots.svg"}" alt="${"aa"}" class="${"svelte-a80smr"}">
                <span class="${"svelte-a80smr"}">${escape(title)}</span></div>
            <p>${escape(text)}</p></article>
    </div>`;
});
var About_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "#title.svelte-1cwjyyf{margin-top:5rem}section.svelte-1cwjyyf{display:flex;flex-flow:column nowrap;align-items:center}.about-windows.svelte-1cwjyyf{display:flex;flex-flow:row wrap;justify-content:center}.window.svelte-1cwjyyf{padding:.5rem}#about-img.svelte-1cwjyyf{text-align:center}img.svelte-1cwjyyf{width:50%}")();
const css$1 = {
  code: "#title.svelte-1cwjyyf{margin-top:5rem}section.svelte-1cwjyyf{display:flex;flex-flow:column nowrap;align-items:center}.about-windows.svelte-1cwjyyf{display:flex;flex-flow:row wrap;justify-content:center}.window.svelte-1cwjyyf{padding:.5rem}#about-img.svelte-1cwjyyf{text-align:center}img.svelte-1cwjyyf{width:50%}",
  map: null
};
const About = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<section id="${"about"}" class="${"svelte-1cwjyyf"}"><h1 id="${"title"}" class="${"text-purple svelte-1cwjyyf"}">About</h1>
    <div id="${"about-img"}" class="${"svelte-1cwjyyf"}"><img src="${"person.png"}" alt="${"person"}" class="${"svelte-1cwjyyf"}"></div>
    <div class="${"about-windows svelte-1cwjyyf"}"><div id="${"window-1"}" class="${"window svelte-1cwjyyf"}"><h1><span class="${"text-green"}">&gt;</span> <span class="${"text-lblue"}">tsc</span> <span class="${"text-pink"}">aBitOfMe</span>.<span class="${"text-lblue"}">ts</span></h1>
            ${validate_component(Window, "Window").$$render($$result, {
    title: "aboutMe.ts",
    text: "Mi camino en la tecnolog\xEDa empez\xF3 a los 4 a\xF1os, cuando me regalaron una PC HP Pavilion 7910. Con esa m\xE1quina que me acompa\xF1\xF3 hasta llegar a mi adolescencia descubr\xED el internet y el mundo del hardware y de la programaci\xF3n, aprendiendo HTML, CSS y Python. Desde 2018 que trabajo freelance como soporte t\xE9cnico de computadoras. En 2021 me propuse dedicarme de lleno a estudiar programaci\xF3n, algo que me apasiona  y me motiva d\xEDa a d\xEDa a seguir aprendiendo m\xE1s y m\xE1s, a d\xEDa de hoy dir\xEDa que mi lenguaje de dominio principal es JavaScript."
  }, {}, {})}</div>
        
        <div id="${"window-2"}" class="${"window svelte-1cwjyyf"}"><h1><span class="${"text-yellow"}">&gt;</span> <span class="${"text-green"}">python</span> <span class="${"text-pink"}">whyMe</span>.<span class="${"text-green"}">py</span></h1>
            ${validate_component(Window, "Window").$$render($$result, {
    title: "whyMe.py",
    text: "Soy una persona muy autodidacta, que no le cuesta preguntar o ayudar a sus compa\xF1eros. Me considero un muy buen compa\xF1ero de equipo, suelo tomar mucho las iniciativas, aprendo r\xE1pido, tengo conocimientos de SCRUM y KANBAN. Me apasiona estar costantemente aprendiendo y resolviendo problemas y todo lo que hago lo hago con la pasi\xF3n y la ambici\xF3n de crecer como persona y como profesional."
  }, {}, {})}</div></div>
</section>`;
});
var Contact_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "h1.svelte-b669vv.svelte-b669vv{text-align:center}h1.svelte-b669vv span.svelte-b669vv{display:inline}b.svelte-b669vv.svelte-b669vv{font-weight:normal}form.svelte-b669vv.svelte-b669vv{display:flex;flex-flow:column nowrap}form.svelte-b669vv span.svelte-b669vv{display:flex;flex-flow:column nowrap;width:95%;margin:0 auto}@media(min-width: 600px){form.svelte-b669vv span.svelte-b669vv{width:90%;margin:0 auto}}@media(min-width: 1000px){form.svelte-b669vv span.svelte-b669vv{width:900px;margin:0 auto}}input.svelte-b669vv.svelte-b669vv{color:white;background-color:#1A1B26;border-radius:.3rem;padding:1rem 2rem}textarea.svelte-b669vv.svelte-b669vv{color:white;resize:none;background-color:#1A1B26;border-radius:.3rem}b.svelte-b669vv.svelte-b669vv{padding-top:.5rem;padding-bottom:.5rem}.send-button.svelte-b669vv.svelte-b669vv{display:flex;justify-content:center;margin-top:1rem}.send-button.svelte-b669vv input.svelte-b669vv{background-color:#1A1B26;padding:.5rem 2rem;font-size:1.2rem;border-radius:.5rem;transition:250ms ease-in-out}.send-button.svelte-b669vv input.svelte-b669vv:hover{background-color:var(--lblue);color:white}")();
const css = {
  code: "h1.svelte-b669vv.svelte-b669vv{text-align:center}h1.svelte-b669vv span.svelte-b669vv{display:inline}b.svelte-b669vv.svelte-b669vv{font-weight:normal}form.svelte-b669vv.svelte-b669vv{display:flex;flex-flow:column nowrap}form.svelte-b669vv span.svelte-b669vv{display:flex;flex-flow:column nowrap;width:95%;margin:0 auto}@media(min-width: 600px){form.svelte-b669vv span.svelte-b669vv{width:90%;margin:0 auto}}@media(min-width: 1000px){form.svelte-b669vv span.svelte-b669vv{width:900px;margin:0 auto}}input.svelte-b669vv.svelte-b669vv{color:white;background-color:#1A1B26;border-radius:.3rem;padding:1rem 2rem}textarea.svelte-b669vv.svelte-b669vv{color:white;resize:none;background-color:#1A1B26;border-radius:.3rem}b.svelte-b669vv.svelte-b669vv{padding-top:.5rem;padding-bottom:.5rem}.send-button.svelte-b669vv.svelte-b669vv{display:flex;justify-content:center;margin-top:1rem}.send-button.svelte-b669vv input.svelte-b669vv{background-color:#1A1B26;padding:.5rem 2rem;font-size:1.2rem;border-radius:.5rem;transition:250ms ease-in-out}.send-button.svelte-b669vv input.svelte-b669vv:hover{background-color:var(--lblue);color:white}",
  map: null
};
const Contact = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<section id="${"contact"}"><h1 class="${"svelte-b669vv"}"><span class="${"text-purple svelte-b669vv"}">&gt;</span> <span class="${"text-green svelte-b669vv"}">node</span> <span class="${"text-pink svelte-b669vv"}">contact</span>.<span class="${"text-yellow svelte-b669vv"}">js</span></h1>
    <form id="${"contactForm"}" action="${"https://formsubmit.co/023b700a72f3537aafd55f633b1e11ba"}" method="${"POST"}" class="${"svelte-b669vv"}"><input type="${"text"}" name="${"_honey"}" style="${"display:none;"}" class="${"svelte-b669vv"}">
        <input type="${"hidden"}" name="${"_captcha"}" value="${"false"}" class="${"svelte-b669vv"}">
        <input type="${"hidden"}" name="${"_next"}" value="${"https://portfolio-f01.pages.dev/sucess"}" class="${"svelte-b669vv"}">
        <span class="${"svelte-b669vv"}"><b class="${"text-pink svelte-b669vv"}">Name</b>
            <input class="${"border-pink caret-pink svelte-b669vv"}" type="${"text"}" name="${"Name"}" id="${"name-input"}" placeholder="${"Show me how much awsome your name is! \u2728 "}"></span>
        <span class="${"svelte-b669vv"}"><b class="${"text-green svelte-b669vv"}">Email</b>
            <input class="${"border-green caret-green svelte-b669vv"}" type="${"email"}" name="${"Email"}" id="${"email-input"}" required placeholder="${"Put a beatiful email here... \u{1F525}"}"></span>
        <span class="${"svelte-b669vv"}"><b class="${"text-lblue svelte-b669vv"}">Company (optional)</b>
            <input class="${"border-lblue caret-lblue svelte-b669vv"}" type="${"text"}" name="${"Company"}" id="${"company-input"}" placeholder="${"Talking from a company? \u{1F440}"}"></span>
        <span class="${"svelte-b669vv"}"><b class="${"text-purple svelte-b669vv"}">Message</b>
            <textarea placeholder="${"Do you have something interesing to say?\u2600\uFE0F"}" class="${"border-purple caret-purple svelte-b669vv"}" name="${"Message"}" id="${"message-input"}" cols="${"30"}" rows="${"10"}" required></textarea></span>
        <div class="${"send-button svelte-b669vv"}"><input type="${"submit"}" id="${"sendButton"}" class="${"text-lblue border-lblue svelte-b669vv"}" value="${"Send"}"></div></form>
</section>`;
});
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Geronimo Zaniuk&#39;s Portfolio</title>`, ""}`, ""}
${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}
${validate_component(Landing, "Landing").$$render($$result, {}, {}, {})}
${validate_component(Projects, "Projects").$$render($$result, {}, {}, {})}
${validate_component(Skills, "Skills").$$render($$result, {}, {}, {})}
${validate_component(About, "About").$$render($$result, {}, {}, {})}
${validate_component(Contact, "Contact").$$render($$result, {}, {}, {})}`;
});
export { Routes as default };
