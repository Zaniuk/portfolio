import { c as create_ssr_component, b as createEventDispatcher, d as add_attribute, f as each, e as escape, o as onDestroy, v as validate_component } from "../../chunks/index-34bc8443.js";
import "codemirror-ssr";
import "codemirror-ssr/addon/display/placeholder.js";
import "codemirror-ssr/addon/mode/overlay.js";
import "codemirror-ssr/mode/xml/xml.js";
import "codemirror-ssr/mode/markdown/markdown.js";
import "codemirror-ssr/mode/gfm/gfm.js";
import "codemirror-ssr/mode/yaml/yaml.js";
import "codemirror-ssr/mode/yaml-frontmatter/yaml-frontmatter.js";
import "codemirror-ssr/addon/edit/continuelist.js";
import { V as Viewer } from "../../chunks/viewer-cbd5a51c.js";
import { visit } from "unist-util-visit";
import wordCount from "word-count";
import gfm from "@bytemd/plugin-gfm";
import "crypto-js";
import "unified";
import "remark-parse";
import "remark-rehype";
import "rehype-raw";
import "rehype-sanitize";
import "rehype-stringify";
import "hast-util-sanitize";
var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
var freeGlobal$1 = freeGlobal;
var freeSelf = typeof self == "object" && self && self.Object === Object && self;
var root = freeGlobal$1 || freeSelf || Function("return this")();
var root$1 = root;
var Symbol$1 = root$1.Symbol;
var Symbol$2 = Symbol$1;
var objectProto$1 = Object.prototype;
var hasOwnProperty = objectProto$1.hasOwnProperty;
var nativeObjectToString$1 = objectProto$1.toString;
var symToStringTag$1 = Symbol$2 ? Symbol$2.toStringTag : void 0;
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag$1), tag = value[symToStringTag$1];
  try {
    value[symToStringTag$1] = void 0;
    var unmasked = true;
  } catch (e) {
  }
  var result = nativeObjectToString$1.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}
var objectProto = Object.prototype;
var nativeObjectToString = objectProto.toString;
function objectToString(value) {
  return nativeObjectToString.call(value);
}
var nullTag = "[object Null]", undefinedTag = "[object Undefined]";
var symToStringTag = Symbol$2 ? Symbol$2.toStringTag : void 0;
function baseGetTag(value) {
  if (value == null) {
    return value === void 0 ? undefinedTag : nullTag;
  }
  return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}
function isObjectLike(value) {
  return value != null && typeof value == "object";
}
var symbolTag = "[object Symbol]";
function isSymbol(value) {
  return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
}
var reWhitespace = /\s/;
function trimmedEndIndex(string) {
  var index2 = string.length;
  while (index2-- && reWhitespace.test(string.charAt(index2))) {
  }
  return index2;
}
var reTrimStart = /^\s+/;
function baseTrim(string) {
  return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
}
function isObject(value) {
  var type = typeof value;
  return value != null && (type == "object" || type == "function");
}
var NAN = 0 / 0;
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
var reIsBinary = /^0b[01]+$/i;
var reIsOctal = /^0o[0-7]+$/i;
var freeParseInt = parseInt;
function toNumber(value) {
  if (typeof value == "number") {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == "function" ? value.valueOf() : value;
    value = isObject(other) ? other + "" : other;
  }
  if (typeof value != "string") {
    return value === 0 ? value : +value;
  }
  value = baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}
var now = function() {
  return root$1.Date.now();
};
var now$1 = now;
var FUNC_ERROR_TEXT = "Expected a function";
var nativeMax = Math.max, nativeMin = Math.min;
function debounce(func, wait, options) {
  var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
  if (typeof func != "function") {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = "maxWait" in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = "trailing" in options ? !!options.trailing : trailing;
  }
  function invokeFunc(time) {
    var args = lastArgs, thisArg = lastThis;
    lastArgs = lastThis = void 0;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }
  function leadingEdge(time) {
    lastInvokeTime = time;
    timerId = setTimeout(timerExpired, wait);
    return leading ? invokeFunc(time) : result;
  }
  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
    return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
  }
  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
    return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
  }
  function timerExpired() {
    var time = now$1();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    timerId = setTimeout(timerExpired, remainingWait(time));
  }
  function trailingEdge(time) {
    timerId = void 0;
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = void 0;
    return result;
  }
  function cancel() {
    if (timerId !== void 0) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = void 0;
  }
  function flush() {
    return timerId === void 0 ? result : trailingEdge(now$1());
  }
  function debounced() {
    var time = now$1(), isInvoking = shouldInvoke(time);
    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;
    if (isInvoking) {
      if (timerId === void 0) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === void 0) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}
var createInputFile = function(ref) {
  if (ref === void 0)
    ref = {};
  var accept = ref.accept;
  if (accept === void 0)
    accept = "";
  var capture = ref.capture;
  if (capture === void 0)
    capture = false;
  var multiple = ref.multiple;
  if (multiple === void 0)
    multiple = false;
  var input = document.createElement("input");
  input.type = "file";
  input.accept = accept;
  input.capture = capture;
  input.multiple = multiple;
  return input;
};
var selectFiles = function(options) {
  return new Promise(function(resolve) {
    var input = createInputFile(options);
    input.addEventListener("change", function() {
      return resolve(input.files || null);
    });
    setTimeout(function() {
      var event = new MouseEvent("click");
      input.dispatchEvent(event);
    }, 0);
  });
};
var DEFAULT_ICON_CONFIGS = {
  size: "1em",
  strokeWidth: 4,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  theme: "outline",
  colors: {
    outline: {
      fill: "#333",
      background: "transparent"
    },
    filled: {
      fill: "#333",
      background: "#FFF"
    },
    twoTone: {
      fill: "#333",
      twoTone: "#2F88FF"
    },
    multiColor: {
      outStrokeColor: "#333",
      outFillColor: "#2F88FF",
      innerStrokeColor: "#FFF",
      innerFillColor: "#43CCF8"
    }
  },
  prefix: "i"
};
function guid() {
  return "icon-" + ((1 + Math.random()) * 4294967296 | 0).toString(16).substring(1);
}
function IconConverter(id, icon, config) {
  var fill = typeof icon.fill === "string" ? [icon.fill] : icon.fill || [];
  var colors = [];
  var theme = icon.theme || config.theme;
  switch (theme) {
    case "outline":
      colors.push(typeof fill[0] === "string" ? fill[0] : "currentColor");
      colors.push("none");
      colors.push(typeof fill[0] === "string" ? fill[0] : "currentColor");
      colors.push("none");
      break;
    case "filled":
      colors.push(typeof fill[0] === "string" ? fill[0] : "currentColor");
      colors.push(typeof fill[0] === "string" ? fill[0] : "currentColor");
      colors.push("#FFF");
      colors.push("#FFF");
      break;
    case "two-tone":
      colors.push(typeof fill[0] === "string" ? fill[0] : "currentColor");
      colors.push(typeof fill[1] === "string" ? fill[1] : config.colors.twoTone.twoTone);
      colors.push(typeof fill[0] === "string" ? fill[0] : "currentColor");
      colors.push(typeof fill[1] === "string" ? fill[1] : config.colors.twoTone.twoTone);
      break;
    case "multi-color":
      colors.push(typeof fill[0] === "string" ? fill[0] : "currentColor");
      colors.push(typeof fill[1] === "string" ? fill[1] : config.colors.multiColor.outFillColor);
      colors.push(typeof fill[2] === "string" ? fill[2] : config.colors.multiColor.innerStrokeColor);
      colors.push(typeof fill[3] === "string" ? fill[3] : config.colors.multiColor.innerFillColor);
      break;
  }
  return {
    size: icon.size || config.size,
    strokeWidth: icon.strokeWidth || config.strokeWidth,
    strokeLinecap: icon.strokeLinecap || config.strokeLinecap,
    strokeLinejoin: icon.strokeLinejoin || config.strokeLinejoin,
    colors,
    id
  };
}
var currentConfig = DEFAULT_ICON_CONFIGS;
function getConfig() {
  return currentConfig;
}
function IconWrapper(name, render) {
  return function(props) {
    var config = getConfig();
    var svgProps = IconConverter(guid(), props, config);
    return render(svgProps);
  };
}
var AlignTextLeftOne = IconWrapper("align-text-left-one", function(props) {
  return '<?xml version="1.0" encoding="UTF-8"?><svg width="' + props.size + '" height="' + props.size + '" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M39 6H9C7.34315 6 6 7.34315 6 9V39C6 40.6569 7.34315 42 9 42H39C40.6569 42 42 40.6569 42 39V9C42 7.34315 40.6569 6 39 6Z" fill="' + props.colors[1] + '" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linejoin="' + props.strokeLinejoin + '"/><path d="M26 24H14" stroke="' + props.colors[2] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/><path d="M34 15H14" stroke="' + props.colors[2] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/><path d="M32 33H14" stroke="' + props.colors[2] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/></svg>';
});
var Close = IconWrapper("close", function(props) {
  return '<?xml version="1.0" encoding="UTF-8"?><svg width="' + props.size + '" height="' + props.size + '" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 8L40 40" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/><path d="M8 40L40 8" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/></svg>';
});
var Code = IconWrapper("code", function(props) {
  return '<?xml version="1.0" encoding="UTF-8"?><svg width="' + props.size + '" height="' + props.size + '" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 13L4 25.4322L16 37" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/><path d="M32 13L44 25.4322L32 37" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/><path d="M28 4L21 44" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '"/></svg>';
});
var CodeBrackets = IconWrapper("code-brackets", function(props) {
  return '<?xml version="1.0" encoding="UTF-8"?><svg width="' + props.size + '" height="' + props.size + '" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 4C14 4 11 5 11 9C11 13 11 15 11 18C11 21 6 23 6 23C6 23 11 25 11 28C11 31 11 35 11 39C11 43 14 44 16 44" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/><path d="M32 4C34 4 37 5 37 9C37 13 37 15 37 18C37 21 42 23 42 23C42 23 37 25 37 28C37 31 37 35 37 39C37 43 34 44 32 44" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/></svg>';
});
var DividingLine = IconWrapper("dividing-line", function(props) {
  return '<?xml version="1.0" encoding="UTF-8"?><svg width="' + props.size + '" height="' + props.size + '" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 24H43" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/><path d="M21 38H27" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/><path d="M37 38H43" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/><path d="M21 10H27" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/><path d="M5 38H11" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/><path d="M5 10H11" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/><path d="M37 10H43" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/></svg>';
});
var FullScreen = IconWrapper("full-screen", function(props) {
  return '<?xml version="1.0" encoding="UTF-8"?><svg width="' + props.size + '" height="' + props.size + '" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M33 6H42V15" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/><path d="M42 33V42H33" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/><path d="M15 42H6V33" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/><path d="M6 15V6H15" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/></svg>';
});
var GithubOne = IconWrapper("github-one", function(props) {
  return '<?xml version="1.0" encoding="UTF-8"?><svg width="' + props.size + '" height="' + props.size + '" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M29.3444 30.4765C31.7481 29.977 33.9292 29.1108 35.6247 27.8391C38.5202 25.6676 40 22.3136 40 18.9999C40 16.6752 39.1187 14.505 37.5929 12.6668C36.7427 11.6425 39.2295 3.99989 37.02 5.02919C34.8105 6.05848 31.5708 8.33679 29.8726 7.83398C28.0545 7.29565 26.0733 6.99989 24 6.99989C22.1992 6.99989 20.4679 7.22301 18.8526 7.6344C16.5046 8.23237 14.2591 5.99989 12 5.02919C9.74086 4.05848 10.9736 11.9632 10.3026 12.7944C8.84119 14.6051 8 16.7288 8 18.9999C8 22.3136 9.79086 25.6676 12.6863 27.8391C14.6151 29.2857 17.034 30.2076 19.7401 30.6619" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '"/><path d="M19.7397 30.6619C18.5812 31.937 18.002 33.1478 18.002 34.2944C18.002 35.441 18.002 38.3464 18.002 43.0106" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '"/><path d="M29.3446 30.4766C30.4423 31.9174 30.9912 33.211 30.9912 34.3576C30.9912 35.5042 30.9912 38.3885 30.9912 43.0107" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '"/><path d="M6 31.2155C6.89887 31.3254 7.56554 31.7387 8 32.4554C8.65169 33.5303 11.0742 37.518 13.8251 37.518C15.6591 37.518 17.0515 37.518 18.0024 37.518" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '"/></svg>';
});
var H = IconWrapper("h", function(props) {
  return '<?xml version="1.0" encoding="UTF-8"?><svg width="' + props.size + '" height="' + props.size + '" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 5V43" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/><path d="M36 5V43" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/><path d="M12 24L36 24" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/></svg>';
});
var H1 = IconWrapper("h1", function(props) {
  return '<?xml version="1.0" encoding="UTF-8"?><svg width="' + props.size + '" height="' + props.size + '" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 8V40" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/><path d="M25 8V40" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/><path d="M6 24H25" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/><path d="M34.2261 24L39.0001 19.0166V40" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/></svg>';
});
var H2 = IconWrapper("h2", function(props) {
  return '<?xml version="1.0" encoding="UTF-8"?><svg width="' + props.size + '" height="' + props.size + '" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 8V40" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/><path d="M24 8V40" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/><path d="M7 24H23" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/><path d="M32 25C32 21.8334 34.6667 20 37 20C39.3334 20 42 21.8334 42 25C42 30.7 32 34.9333 32 40H42" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/></svg>';
});
var H3 = IconWrapper("h3", function(props) {
  return '<?xml version="1.0" encoding="UTF-8"?><svg width="' + props.size + '" height="' + props.size + '" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 8V40" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/><path d="M24 8V40" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/><path d="M7 24H23" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/><path d="M32 20H42L35 29C39 29 42 31 42 35C42 39 39 40 37 40C34.619 40 33 39 32 37.9" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/></svg>';
});
var Helpcenter = IconWrapper("helpcenter", function(props) {
  return '<?xml version="1.0" encoding="UTF-8"?><svg width="' + props.size + '" height="' + props.size + '" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M39 6H9C7.34315 6 6 7.34315 6 9V39C6 40.6569 7.34315 42 9 42H39C40.6569 42 42 40.6569 42 39V9C42 7.34315 40.6569 6 39 6Z" fill="' + props.colors[1] + '" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linejoin="' + props.strokeLinejoin + '"/><path d="M24 28.625V24.625C27.3137 24.625 30 21.9387 30 18.625C30 15.3113 27.3137 12.625 24 12.625C20.6863 12.625 18 15.3113 18 18.625" stroke="' + props.colors[2] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/><path fill-rule="evenodd" clip-rule="evenodd" d="M24 37.625C25.3807 37.625 26.5 36.5057 26.5 35.125C26.5 33.7443 25.3807 32.625 24 32.625C22.6193 32.625 21.5 33.7443 21.5 35.125C21.5 36.5057 22.6193 37.625 24 37.625Z" fill="' + props.colors[2] + '"/></svg>';
});
var LeftExpand = IconWrapper("left-expand", function(props) {
  return '<?xml version="1.0" encoding="UTF-8"?><svg width="' + props.size + '" height="' + props.size + '" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="6" y="6" width="28" height="36" rx="2" fill="' + props.colors[1] + '" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/><path d="M42 6V42" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/></svg>';
});
var LevelFiveTitle = IconWrapper("level-five-title", function(props) {
  return '<?xml version="1.0" encoding="UTF-8"?><svg width="' + props.size + '" height="' + props.size + '" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 8V40" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/><path d="M24 8V40" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/><path d="M7 24H23" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/><path d="M40 21.0093H32V28.0341C32 28 34 27 37 27C40 27 41 29.5339 41 33.5C41 37.4661 40 40 36 40C33 40 32 38 32 36.0078" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/></svg>';
});
var LevelFourTitle = IconWrapper("level-four-title", function(props) {
  return '<?xml version="1.0" encoding="UTF-8"?><svg width="' + props.size + '" height="' + props.size + '" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 8V40" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/><path d="M24 8V40" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/><path d="M7 24H23" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/><path d="M39.9767 40V20L31 32.9967V35.0199H43" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/></svg>';
});
var LevelSixTitle = IconWrapper("level-six-title", function(props) {
  return '<?xml version="1.0" encoding="UTF-8"?><svg width="' + props.size + '" height="' + props.size + '" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 8V40" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/><path d="M24 8V40" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/><path d="M7 24H23" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/><path d="M36.5 40C39.5376 40 42 37.5376 42 34.5C42 31.4624 39.5376 29 36.5 29C33.4624 29 31 31.4624 31 34.5C31 37.5376 33.4624 40 36.5 40Z" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '"/><path d="M41.5962 24.7392C40.7778 22.5461 38.8044 21 36.5 21C33.4624 21 31 23.6863 31 27V34" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/></svg>';
});
var LinkOne = IconWrapper("link-one", function(props) {
  return '<?xml version="1.0" encoding="UTF-8"?><svg width="' + props.size + '" height="' + props.size + '" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M26.2401 16.373L17.1001 7.23303C14.4388 4.57168 10.0653 4.6303 7.33158 7.36397C4.59791 10.0976 4.53929 14.4712 7.20064 17.1325L15.1359 25.0678" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/><path d="M32.9027 23.0031L40.838 30.9384C43.4994 33.5998 43.4407 37.9733 40.7071 40.707C37.9734 43.4407 33.5999 43.4993 30.9385 40.8379L21.7985 31.6979" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/><path d="M26.1093 26.1416C28.843 23.4079 28.9016 19.0344 26.2403 16.373" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/><path d="M21.7989 21.7984C19.0652 24.5321 19.0066 28.9056 21.6679 31.5669" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/></svg>';
});
var ListTwo = IconWrapper("list-two", function(props) {
  return '<?xml version="1.0" encoding="UTF-8"?><svg width="' + props.size + '" height="' + props.size + '" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 42C11.2091 42 13 40.2091 13 38C13 35.7909 11.2091 34 9 34C6.79086 34 5 35.7909 5 38C5 40.2091 6.79086 42 9 42Z" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linejoin="' + props.strokeLinejoin + '"/><path d="M9 14C11.2091 14 13 12.2092 13 10C13 7.79086 11.2091 6 9 6C6.79086 6 5 7.79086 5 10C5 12.2092 6.79086 14 9 14Z" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linejoin="' + props.strokeLinejoin + '"/><path d="M9 28C11.2091 28 13 26.2092 13 24C13 21.7908 11.2091 20 9 20C6.79086 20 5 21.7908 5 24C5 26.2092 6.79086 28 9 28Z" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linejoin="' + props.strokeLinejoin + '"/><path d="M21 24H43" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/><path d="M21 38H43" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/><path d="M21 10H43" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/></svg>';
});
var OffScreen = IconWrapper("off-screen", function(props) {
  return '<?xml version="1.0" encoding="UTF-8"?><svg width="' + props.size + '" height="' + props.size + '" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M33 6V15H42" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/><path d="M15 6V15H6" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/><path d="M15 42V33H6" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/><path d="M33 42V33H41.8995" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/></svg>';
});
var OrderedList = IconWrapper("ordered-list", function(props) {
  return '<?xml version="1.0" encoding="UTF-8"?><svg width="' + props.size + '" height="' + props.size + '" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 4V13" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/><path d="M12 13H6" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/><path d="M12 27H6" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/><path d="M6 19.9998C6 19.9998 9 16.9998 11 19.9998C13 22.9999 6 26.9998 6 26.9998" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/><path d="M6.00016 34.5001C6.00016 34.5001 8.00016 31.5 11.0002 33.5C14.0002 35.5 11.0002 38 11.0002 38C11.0002 38 14.0002 40.5 11.0002 42.5C8.00015 44.5 6.00015 41.5 6.00015 41.5" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/><path d="M11 38H9" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/><path d="M9 4L6 6" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/><path d="M21 24H43" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/><path d="M21 38H43" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/><path d="M21 10H43" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/></svg>';
});
var Pic = IconWrapper("pic", function(props) {
  return '<?xml version="1.0" encoding="UTF-8"?><svg width="' + props.size + '" height="' + props.size + '" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5 10C5 8.89543 5.89543 8 7 8L41 8C42.1046 8 43 8.89543 43 10V38C43 39.1046 42.1046 40 41 40H7C5.89543 40 5 39.1046 5 38V10Z" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/><path fill-rule="evenodd" clip-rule="evenodd" d="M14.5 18C15.3284 18 16 17.3284 16 16.5C16 15.6716 15.3284 15 14.5 15C13.6716 15 13 15.6716 13 16.5C13 17.3284 13.6716 18 14.5 18Z" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/><path d="M15 24L20 28L26 21L43 34V38C43 39.1046 42.1046 40 41 40H7C5.89543 40 5 39.1046 5 38V34L15 24Z" fill="' + props.colors[1] + '" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linejoin="' + props.strokeLinejoin + '"/></svg>';
});
var Quote = IconWrapper("quote", function(props) {
  return '<?xml version="1.0" encoding="UTF-8"?><svg width="' + props.size + '" height="' + props.size + '" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.8533 9.11587C11.3227 13.9521 7.13913 19.5811 6.30256 26.0028C5.00021 35.9999 13.9404 40.8932 18.4703 36.4966C23.0002 32.1 20.2848 26.5195 17.0047 24.9941C13.7246 23.4686 11.7187 23.9999 12.0686 21.9614C12.4185 19.923 17.0851 14.2712 21.1849 11.6391C21.4569 11.4078 21.5604 10.959 21.2985 10.6185C21.1262 10.3946 20.7883 9.95545 20.2848 9.30102C19.8445 8.72875 19.4227 8.75017 18.8533 9.11587Z" fill="' + props.colors[0] + '"/><path fill-rule="evenodd" clip-rule="evenodd" d="M38.6789 9.11587C31.1484 13.9521 26.9648 19.5811 26.1282 26.0028C24.8259 35.9999 33.7661 40.8932 38.296 36.4966C42.8259 32.1 40.1105 26.5195 36.8304 24.9941C33.5503 23.4686 31.5443 23.9999 31.8943 21.9614C32.2442 19.923 36.9108 14.2712 41.0106 11.6391C41.2826 11.4078 41.3861 10.959 41.1241 10.6185C40.9519 10.3946 40.614 9.95545 40.1105 9.30102C39.6702 8.72875 39.2484 8.75017 38.6789 9.11587Z" fill="' + props.colors[0] + '"/></svg>';
});
var RightExpand = IconWrapper("right-expand", function(props) {
  return '<?xml version="1.0" encoding="UTF-8"?><svg width="' + props.size + '" height="' + props.size + '" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="14" y="6" width="28" height="36" rx="2" fill="' + props.colors[1] + '" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/><path d="M6 6V42" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/></svg>';
});
var TextBold = IconWrapper("text-bold", function(props) {
  return '<?xml version="1.0" encoding="UTF-8"?><svg width="' + props.size + '" height="' + props.size + '" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M24 24C29.5056 24 33.9688 19.5228 33.9688 14C33.9688 8.47715 29.5056 4 24 4H11V24H24Z" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/><path fill-rule="evenodd" clip-rule="evenodd" d="M28.0312 44C33.5368 44 38 39.5228 38 34C38 28.4772 33.5368 24 28.0312 24H11V44H28.0312Z" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/></svg>';
});
var TextItalic = IconWrapper("text-italic", function(props) {
  return '<?xml version="1.0" encoding="UTF-8"?><svg width="' + props.size + '" height="' + props.size + '" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 6H36" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/><path d="M12 42H28" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/><path d="M29 5.95215L19 41.9998" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/></svg>';
});
function createEditorUtils(codemirror, editor) {
  return {
    wrapText(before, after = before) {
      const range = editor.somethingSelected() ? editor.listSelections()[0] : editor.findWordAt(editor.getCursor());
      const from = range.from();
      const to = range.to();
      const text = editor.getRange(from, to);
      const fromBefore = codemirror.Pos(from.line, from.ch - before.length);
      const toAfter = codemirror.Pos(to.line, to.ch + after.length);
      if (editor.getRange(fromBefore, from) === before && editor.getRange(to, toAfter) === after) {
        editor.replaceRange(text, fromBefore, toAfter);
        editor.setSelection(fromBefore, codemirror.Pos(fromBefore.line, fromBefore.ch + text.length));
      } else {
        editor.replaceRange(before + text + after, from, to);
        const cursor = editor.getCursor();
        editor.setSelection(codemirror.Pos(cursor.line, cursor.ch - after.length - text.length), codemirror.Pos(cursor.line, cursor.ch - after.length));
      }
    },
    replaceLines(replace) {
      const [selection] = editor.listSelections();
      const range = [
        codemirror.Pos(selection.from().line, 0),
        codemirror.Pos(selection.to().line)
      ];
      const lines2 = editor.getRange(...range).split("\n");
      editor.replaceRange(lines2.map(replace).join("\n"), ...range);
      editor.setSelection(...range);
    },
    appendBlock(content) {
      const cursor = editor.getCursor();
      let emptyLine = -1;
      for (let i = cursor.line; i < editor.lineCount(); i++) {
        if (!editor.getLine(i).trim()) {
          emptyLine = i;
          break;
        }
      }
      if (emptyLine === -1) {
        editor.replaceRange("\n", codemirror.Pos(editor.lineCount()));
        emptyLine = editor.lineCount();
      }
      editor.replaceRange("\n" + content, codemirror.Pos(emptyLine));
      return codemirror.Pos(emptyLine + 1, 0);
    },
    selectFiles
  };
}
const getShortcutWithPrefix = (key, shift = false) => {
  const shiftPrefix = shift ? "Shift-" : "";
  const CmdPrefix = typeof navigator !== "undefined" && /Mac/.test(navigator.platform) ? "Cmd-" : "Ctrl-";
  return shiftPrefix + CmdPrefix + key;
};
async function handleImageUpload({ editor, appendBlock, codemirror }, uploadImages, files) {
  const imgs = await uploadImages(files);
  const pos = appendBlock(imgs.map(({ url, alt, title }, i) => {
    alt = alt ?? files[i].name;
    return `![${alt}](${url}${title ? ` "${title}"` : ""})`;
  }).join("\n\n"));
  editor.setSelection(pos, codemirror.Pos(pos.line + imgs.length * 2 - 2));
  editor.focus();
}
function getBuiltinActions(locale, plugins, uploadImages) {
  const items = [
    {
      icon: H({}),
      handler: {
        type: "dropdown",
        actions: [1, 2, 3, 4, 5, 6].map((level) => ({
          title: locale[`h${level}`],
          icon: [
            H1({}),
            H2({}),
            H3({}),
            LevelFourTitle({}),
            LevelFiveTitle({}),
            LevelSixTitle({})
          ][level - 1],
          cheatsheet: level <= 3 ? `${"#".repeat(level)} ${locale.headingText}` : void 0,
          handler: {
            type: "action",
            click({ replaceLines, editor }) {
              replaceLines((line) => {
                line = line.trim().replace(/^#*/, "").trim();
                line = "#".repeat(level) + " " + line;
                return line;
              });
              editor.focus();
            }
          }
        }))
      }
    },
    {
      title: locale.bold,
      icon: TextBold({}),
      cheatsheet: `**${locale.boldText}**`,
      handler: {
        type: "action",
        shortcut: getShortcutWithPrefix("B"),
        click({ wrapText, editor }) {
          wrapText("**");
          editor.focus();
        }
      }
    },
    {
      title: locale.italic,
      icon: TextItalic({}),
      cheatsheet: `*${locale.italicText}*`,
      handler: {
        type: "action",
        shortcut: getShortcutWithPrefix("I"),
        click({ wrapText, editor }) {
          wrapText("*");
          editor.focus();
        }
      }
    },
    {
      title: locale.quote,
      icon: Quote({}),
      cheatsheet: `> ${locale.quotedText}`,
      handler: {
        type: "action",
        click({ replaceLines, editor }) {
          replaceLines((line) => "> " + line);
          editor.focus();
        }
      }
    },
    {
      title: locale.link,
      icon: LinkOne({}),
      cheatsheet: `[${locale.linkText}](url)`,
      handler: {
        type: "action",
        shortcut: getShortcutWithPrefix("K"),
        click({ editor, wrapText, codemirror }) {
          wrapText("[", "](url)");
          const cursor = editor.getCursor();
          editor.setSelection(codemirror.Pos(cursor.line, cursor.ch + 2), codemirror.Pos(cursor.line, cursor.ch + 5));
          editor.focus();
        }
      }
    },
    {
      title: locale.image,
      icon: Pic({}),
      cheatsheet: `![${locale.imageAlt}](url "${locale.imageTitle}")`,
      handler: uploadImages ? {
        type: "action",
        shortcut: getShortcutWithPrefix("I", true),
        async click(ctx) {
          const fileList = await selectFiles({
            accept: "image/*",
            multiple: true
          });
          if (fileList == null ? void 0 : fileList.length) {
            await handleImageUpload(ctx, uploadImages, Array.from(fileList));
          }
        }
      } : void 0
    },
    {
      title: locale.code,
      icon: Code({}),
      cheatsheet: "`" + locale.codeText + "`",
      handler: {
        type: "action",
        shortcut: getShortcutWithPrefix("K", true),
        click({ wrapText, editor }) {
          wrapText("`");
          editor.focus();
        }
      }
    },
    {
      title: locale.codeBlock,
      icon: CodeBrackets({}),
      cheatsheet: "```" + locale.codeLang + "\u21B5",
      handler: {
        type: "action",
        shortcut: getShortcutWithPrefix("C", true),
        click({ editor, appendBlock, codemirror }) {
          const pos = appendBlock("```js\n```");
          editor.setSelection(codemirror.Pos(pos.line, 3), codemirror.Pos(pos.line, 5));
          editor.focus();
        }
      }
    },
    {
      title: locale.ul,
      icon: ListTwo({}),
      cheatsheet: `- ${locale.ulItem}`,
      handler: {
        type: "action",
        shortcut: getShortcutWithPrefix("U", true),
        click({ replaceLines, editor }) {
          replaceLines((line) => "- " + line);
          editor.focus();
        }
      }
    },
    {
      title: locale.ol,
      icon: OrderedList({}),
      cheatsheet: `1. ${locale.olItem}`,
      handler: {
        type: "action",
        shortcut: getShortcutWithPrefix("O", true),
        click({ replaceLines, editor }) {
          replaceLines((line, i) => `${i + 1}. ${line}`);
          editor.focus();
        }
      }
    },
    {
      title: locale.hr,
      icon: DividingLine({}),
      cheatsheet: "---"
    }
  ];
  plugins.forEach(({ actions }) => {
    if (actions)
      items.push(...actions);
  });
  return items;
}
const tippyClass = "bytemd-tippy";
const tippyClassRight = "bytemd-tippy-right";
const Toolbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let tocActive;
  let helpActive;
  let writeActive;
  let previewActive;
  let rightActions;
  const dispatch = createEventDispatcher();
  let toolbar;
  let { context } = $$props;
  let { split } = $$props;
  let { activeTab } = $$props;
  let { fullscreen: fullscreen2 } = $$props;
  let { sidebar } = $$props;
  let { locale } = $$props;
  let { actions } = $$props;
  if ($$props.context === void 0 && $$bindings.context && context !== void 0)
    $$bindings.context(context);
  if ($$props.split === void 0 && $$bindings.split && split !== void 0)
    $$bindings.split(split);
  if ($$props.activeTab === void 0 && $$bindings.activeTab && activeTab !== void 0)
    $$bindings.activeTab(activeTab);
  if ($$props.fullscreen === void 0 && $$bindings.fullscreen && fullscreen2 !== void 0)
    $$bindings.fullscreen(fullscreen2);
  if ($$props.sidebar === void 0 && $$bindings.sidebar && sidebar !== void 0)
    $$bindings.sidebar(sidebar);
  if ($$props.locale === void 0 && $$bindings.locale && locale !== void 0)
    $$bindings.locale(locale);
  if ($$props.actions === void 0 && $$bindings.actions && actions !== void 0)
    $$bindings.actions(actions);
  tocActive = sidebar === "toc";
  helpActive = sidebar === "help";
  writeActive = activeTab === "write";
  previewActive = activeTab === "preview";
  rightActions = [
    {
      title: tocActive ? locale.closeToc : locale.toc,
      icon: AlignTextLeftOne({}),
      handler: {
        type: "action",
        click() {
          dispatch("click", "toc");
        }
      },
      active: tocActive
    },
    {
      title: helpActive ? locale.closeHelp : locale.help,
      icon: Helpcenter({}),
      handler: {
        type: "action",
        click() {
          dispatch("click", "help");
        }
      },
      active: helpActive
    },
    {
      title: writeActive ? locale.exitWriteOnly : locale.writeOnly,
      icon: LeftExpand({}),
      handler: {
        type: "action",
        click() {
          dispatch("tab", "write");
        }
      },
      active: writeActive,
      hidden: !split
    },
    {
      title: previewActive ? locale.exitPreviewOnly : locale.previewOnly,
      icon: RightExpand({}),
      handler: {
        type: "action",
        click() {
          dispatch("tab", "preview");
        }
      },
      active: previewActive,
      hidden: !split
    },
    {
      title: fullscreen2 ? locale.exitFullscreen : locale.fullscreen,
      icon: fullscreen2 ? OffScreen({}) : FullScreen({}),
      handler: {
        type: "action",
        click() {
          dispatch("click", "fullscreen");
        }
      }
    },
    {
      title: locale.source,
      icon: GithubOne({}),
      handler: {
        type: "action",
        click() {
          window.open("https://github.com/bytedance/bytemd");
        }
      }
    }
  ];
  return `<div class="${"bytemd-toolbar"}"${add_attribute("this", toolbar, 0)}><div class="${"bytemd-toolbar-left"}">${split ? `${each(actions, (item, index2) => {
    return `${item.handler ? `<div${add_attribute("class", ["bytemd-toolbar-icon", tippyClass].join(" "), 0)}${add_attribute("bytemd-tippy-path", index2, 0)}><!-- HTML_TAG_START -->${item.icon}<!-- HTML_TAG_END --></div>` : ``}`;
  })}` : `<div class="${[
    "bytemd-toolbar-tab",
    activeTab !== "preview" ? "bytemd-toolbar-tab-active" : ""
  ].join(" ").trim()}">${escape(locale.write)}</div><div class="${[
    "bytemd-toolbar-tab",
    activeTab === "preview" ? "bytemd-toolbar-tab-active" : ""
  ].join(" ").trim()}">${escape(locale.preview)}</div>`}</div><div class="${"bytemd-toolbar-right"}">${each(rightActions, (item, index2) => {
    return `${!item.hidden ? `<div class="${[
      escape(["bytemd-toolbar-icon", tippyClass, tippyClassRight].join(" "), true),
      item.active ? "bytemd-toolbar-icon-active" : ""
    ].join(" ").trim()}"${add_attribute("bytemd-tippy-path", index2, 0)}><!-- HTML_TAG_START -->${item.icon}<!-- HTML_TAG_END --></div>` : ``}`;
  })}</div></div>`;
});
const Toc = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { hast } = $$props;
  let { currentBlockIndex } = $$props;
  let { locale } = $$props;
  let { visible } = $$props;
  createEventDispatcher();
  let items;
  let minLevel = 6;
  let currentHeadingIndex = 0;
  function stringifyHeading(e) {
    let result = "";
    visit(e, (node) => {
      if (node.type === "text") {
        result += node.value;
      }
    });
    return result;
  }
  if ($$props.hast === void 0 && $$bindings.hast && hast !== void 0)
    $$bindings.hast(hast);
  if ($$props.currentBlockIndex === void 0 && $$bindings.currentBlockIndex && currentBlockIndex !== void 0)
    $$bindings.currentBlockIndex(currentBlockIndex);
  if ($$props.locale === void 0 && $$bindings.locale && locale !== void 0)
    $$bindings.locale(locale);
  if ($$props.visible === void 0 && $$bindings.visible && visible !== void 0)
    $$bindings.visible(visible);
  {
    (() => {
      items = [];
      currentHeadingIndex = 0;
      hast.children.filter((v) => v.type === "element").forEach((node, index2) => {
        if (node.tagName[0] === "h" && !!node.children.length) {
          const i = Number(node.tagName[1]);
          minLevel = Math.min(minLevel, i);
          items.push({ level: i, text: stringifyHeading(node) });
        }
        if (currentBlockIndex >= index2) {
          currentHeadingIndex = items.length - 1;
        }
      });
    })();
  }
  return `<div class="${["bytemd-toc", !visible ? "bytemd-hidden" : ""].join(" ").trim()}"><h2>${escape(locale.toc)}</h2><ul>${each(items, (item, index2) => {
    return `<li class="${[
      escape(`bytemd-toc-${item.level}`, true),
      (currentHeadingIndex === index2 ? "bytemd-toc-active" : "") + " " + (item.level === minLevel ? "bytemd-toc-first" : "")
    ].join(" ").trim()}"${add_attribute("style", `padding-left:${(item.level - minLevel) * 16 + 8}px`, 0)}>${escape(item.text)}</li>`;
  })}</ul></div>`;
});
const Status = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let words2;
  let lines2;
  let { showSync } = $$props;
  let { value } = $$props;
  let { syncEnabled } = $$props;
  let { locale } = $$props;
  let { islimited } = $$props;
  createEventDispatcher();
  if ($$props.showSync === void 0 && $$bindings.showSync && showSync !== void 0)
    $$bindings.showSync(showSync);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.syncEnabled === void 0 && $$bindings.syncEnabled && syncEnabled !== void 0)
    $$bindings.syncEnabled(syncEnabled);
  if ($$props.locale === void 0 && $$bindings.locale && locale !== void 0)
    $$bindings.locale(locale);
  if ($$props.islimited === void 0 && $$bindings.islimited && islimited !== void 0)
    $$bindings.islimited(islimited);
  words2 = wordCount(value);
  lines2 = value.split("\n").length;
  return `<div class="${"bytemd-status"}"><div class="${"bytemd-status-left"}"><span>${escape(locale.words)}: <strong>${escape(words2)}</strong></span><span>${escape(locale.lines)}: <strong>${escape(lines2)}</strong></span>${islimited ? `<span class="${"bytemd-status-error"}">${escape(locale.limited)}</span>` : ``}</div><div class="${"bytemd-status-right"}">${showSync ? `<label><input type="${"checkbox"}" ${syncEnabled ? "checked" : ""}>${escape(locale.sync)}</label>` : ``}<span>${escape(locale.top)}</span></div></div>`;
});
const Help = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let items;
  let { actions } = $$props;
  let { locale } = $$props;
  let { visible } = $$props;
  function flatItems(actions2) {
    let items2 = [];
    actions2.forEach((action) => {
      const { handler, cheatsheet: cheatsheet2 } = action;
      if ((handler == null ? void 0 : handler.type) === "dropdown") {
        items2.push(...flatItems(handler.actions));
      }
      if (cheatsheet2) {
        items2.push(action);
      }
    });
    return items2;
  }
  if ($$props.actions === void 0 && $$bindings.actions && actions !== void 0)
    $$bindings.actions(actions);
  if ($$props.locale === void 0 && $$bindings.locale && locale !== void 0)
    $$bindings.locale(locale);
  if ($$props.visible === void 0 && $$bindings.visible && visible !== void 0)
    $$bindings.visible(visible);
  items = flatItems(actions);
  return `<div class="${["bytemd-help", !visible ? "bytemd-hidden" : ""].join(" ").trim()}"><h2>${escape(locale.cheatsheet)}</h2><ul>${each(items, (action) => {
    return `${action.cheatsheet ? `<li><div class="${"bytemd-help-icon"}"><!-- HTML_TAG_START -->${action.icon}<!-- HTML_TAG_END --></div><div class="${"bytemd-help-title"}">${escape(action.title)}</div><div class="${"bytemd-help-content"}"><code>${escape(action.cheatsheet)}</code></div></li>` : ``}`;
  })}</ul><h2>${escape(locale.shortcuts)}</h2><ul>${each(items, (action) => {
    return `${action.handler && action.handler.type === "action" && action.handler.shortcut ? `<li><div class="${"bytemd-help-icon"}"><!-- HTML_TAG_START -->${action.icon}<!-- HTML_TAG_END --></div><div class="${"bytemd-help-title"}">${escape(action.title)}</div><div class="${"bytemd-help-content"}"><kbd>${escape(action.handler.shortcut)}</kbd></div></li>` : ``}`;
  })}</ul></div>`;
});
const bold = "Bold";
const boldText = "bold text";
const cheatsheet = "Markdown Cheatsheet";
const closeHelp = "Close help";
const closeToc = "Close table of contents";
const code = "Code";
const codeBlock = "Code block";
const codeLang = "lang";
const codeText = "code";
const exitFullscreen = "Exit fullscreen";
const exitPreviewOnly = "Exit preview only";
const exitWriteOnly = "Exit write only";
const fullscreen = "Fullscreen";
const h1 = "Heading 1";
const h2 = "Heading 2";
const h3 = "Heading 3";
const h4 = "Heading 4";
const h5 = "Heading 5";
const h6 = "Heading 6";
const headingText = "heading";
const help = "Help";
const hr = "Horizontal rule";
const image = "Image";
const imageAlt = "alt";
const imageTitle = "title";
const italic = "Italic";
const italicText = "italic text";
const limited = "The maximum character limit has been reached";
const lines = "Lines";
const link = "Link";
const linkText = "link text";
const ol = "Ordered list";
const olItem = "item";
const preview = "Preview";
const previewOnly = "Preview only";
const quote = "Quote";
const quotedText = "quoted text";
const shortcuts = "Shortcuts";
const source = "Source code";
const sync = "Scroll sync";
const toc = "Table of contents";
const top = "Scroll to top";
const ul = "Unordered list";
const ulItem = "item";
const words = "Words";
const write = "Write";
const writeOnly = "Write only";
var en = {
  bold,
  boldText,
  cheatsheet,
  closeHelp,
  closeToc,
  code,
  codeBlock,
  codeLang,
  codeText,
  exitFullscreen,
  exitPreviewOnly,
  exitWriteOnly,
  fullscreen,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  headingText,
  help,
  hr,
  image,
  imageAlt,
  imageTitle,
  italic,
  italicText,
  limited,
  lines,
  link,
  linkText,
  ol,
  olItem,
  preview,
  previewOnly,
  quote,
  quotedText,
  shortcuts,
  source,
  sync,
  toc,
  top,
  ul,
  ulItem,
  words,
  write,
  writeOnly
};
const Editor = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let mergedLocale;
  let actions;
  let split;
  let styles;
  let context;
  let { value = "" } = $$props;
  let { plugins = [] } = $$props;
  let { sanitize = void 0 } = $$props;
  let { remarkRehype = void 0 } = $$props;
  let { mode = "auto" } = $$props;
  let { previewDebounce = 300 } = $$props;
  let { placeholder = void 0 } = $$props;
  let { editorConfig = void 0 } = $$props;
  let { locale = void 0 } = $$props;
  let { uploadImages = void 0 } = $$props;
  let { overridePreview = void 0 } = $$props;
  let { maxLength = Infinity } = $$props;
  createEventDispatcher();
  let root2;
  let editorEl;
  let previewEl;
  let containerWidth = Infinity;
  let codemirror;
  let editor;
  let activeTab;
  let fullscreen2 = false;
  let sidebar = false;
  let cbs = [];
  let keyMap = {};
  function off() {
    cbs.forEach((cb) => cb && cb());
    editor == null ? void 0 : editor.removeKeyMap(keyMap);
  }
  let debouncedValue = value;
  const setDebouncedValue = debounce((value2) => {
    debouncedValue = value2;
    overridePreview == null ? void 0 : overridePreview(previewEl, {
      value: debouncedValue,
      plugins,
      sanitize,
      remarkRehype
    });
  }, previewDebounce);
  let syncEnabled = true;
  let hast = { type: "root", children: [] };
  let currentBlockIndex = 0;
  onDestroy(off);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.plugins === void 0 && $$bindings.plugins && plugins !== void 0)
    $$bindings.plugins(plugins);
  if ($$props.sanitize === void 0 && $$bindings.sanitize && sanitize !== void 0)
    $$bindings.sanitize(sanitize);
  if ($$props.remarkRehype === void 0 && $$bindings.remarkRehype && remarkRehype !== void 0)
    $$bindings.remarkRehype(remarkRehype);
  if ($$props.mode === void 0 && $$bindings.mode && mode !== void 0)
    $$bindings.mode(mode);
  if ($$props.previewDebounce === void 0 && $$bindings.previewDebounce && previewDebounce !== void 0)
    $$bindings.previewDebounce(previewDebounce);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.editorConfig === void 0 && $$bindings.editorConfig && editorConfig !== void 0)
    $$bindings.editorConfig(editorConfig);
  if ($$props.locale === void 0 && $$bindings.locale && locale !== void 0)
    $$bindings.locale(locale);
  if ($$props.uploadImages === void 0 && $$bindings.uploadImages && uploadImages !== void 0)
    $$bindings.uploadImages(uploadImages);
  if ($$props.overridePreview === void 0 && $$bindings.overridePreview && overridePreview !== void 0)
    $$bindings.overridePreview(overridePreview);
  if ($$props.maxLength === void 0 && $$bindings.maxLength && maxLength !== void 0)
    $$bindings.maxLength(maxLength);
  mergedLocale = { ...en, ...locale };
  actions = getBuiltinActions(mergedLocale, plugins, uploadImages);
  split = mode === "split" || mode === "auto" && containerWidth >= 800;
  {
    ((_) => {
      if (split)
        activeTab = false;
    })();
  }
  styles = (() => {
    let edit;
    let preview2;
    if (split && activeTab === false) {
      {
        edit = "width:50%";
        preview2 = "width:50%";
      }
    } else if (activeTab === "preview") {
      edit = "display:none";
      preview2 = `width:calc(100% - ${0}px)`;
    } else {
      edit = `width:calc(100% - ${0}px)`;
      preview2 = "display:none";
    }
    return { edit, preview: preview2 };
  })();
  context = (() => {
    const context2 = {
      codemirror,
      editor,
      root: root2,
      ...createEditorUtils(codemirror, editor)
    };
    return context2;
  })();
  {
    setDebouncedValue(value);
  }
  return `<div class="${[
    "bytemd",
    (split && activeTab === false ? "bytemd-split" : "") + " "
  ].join(" ").trim()}"${add_attribute("this", root2, 0)}>${validate_component(Toolbar, "Toolbar").$$render($$result, {
    context,
    split,
    activeTab,
    sidebar,
    fullscreen: fullscreen2,
    locale: mergedLocale,
    actions
  }, {}, {})}<div class="${"bytemd-body"}"><div class="${"bytemd-editor"}"${add_attribute("style", styles.edit, 0)}${add_attribute("this", editorEl, 0)}></div><div class="${"bytemd-preview"}"${add_attribute("style", styles.preview, 0)}${add_attribute("this", previewEl, 0)}>${!overridePreview ? `${validate_component(Viewer, "Viewer").$$render($$result, {
    value: debouncedValue,
    plugins,
    sanitize,
    remarkRehype
  }, {}, {})}` : ``}</div><div class="${["bytemd-sidebar", "bytemd-hidden"].join(" ").trim()}"><div class="${"bytemd-sidebar-close"}"><!-- HTML_TAG_START -->${Close({})}<!-- HTML_TAG_END --></div>${validate_component(Help, "Help").$$render($$result, {
    locale: mergedLocale,
    actions,
    visible: sidebar === "help"
  }, {}, {})}${validate_component(Toc, "Toc").$$render($$result, {
    hast,
    locale: mergedLocale,
    currentBlockIndex,
    visible: sidebar === "toc"
  }, {}, {})}</div></div>${validate_component(Status, "Status").$$render($$result, {
    locale: mergedLocale,
    showSync: !overridePreview && split,
    value: debouncedValue,
    syncEnabled,
    islimited: value.length > maxLength
  }, {}, {})}</div>`;
});
var index = /* @__PURE__ */ (() => '.CodeMirror{font-family:monospace;height:300px;color:#000;direction:ltr}.CodeMirror-lines{padding:4px 0}.CodeMirror pre.CodeMirror-line,.CodeMirror pre.CodeMirror-line-like{padding:0 4px}.CodeMirror-scrollbar-filler,.CodeMirror-gutter-filler{background-color:#fff}.CodeMirror-gutters{border-right:1px solid #ddd;background-color:#f7f7f7;white-space:nowrap}.CodeMirror-linenumber{padding:0 3px 0 5px;min-width:20px;text-align:right;color:#999;white-space:nowrap}.CodeMirror-guttermarker{color:#000}.CodeMirror-guttermarker-subtle{color:#999}.CodeMirror-cursor{border-left:1px solid black;border-right:none;width:0}.CodeMirror div.CodeMirror-secondarycursor{border-left:1px solid silver}.cm-fat-cursor .CodeMirror-cursor{width:auto;border:0!important;background:#7e7}.cm-fat-cursor div.CodeMirror-cursors{z-index:1}.cm-fat-cursor .CodeMirror-line::selection,.cm-fat-cursor .CodeMirror-line>span::selection,.cm-fat-cursor .CodeMirror-line>span>span::selection{background:transparent}.cm-fat-cursor .CodeMirror-line::-moz-selection,.cm-fat-cursor .CodeMirror-line>span::-moz-selection,.cm-fat-cursor .CodeMirror-line>span>span::-moz-selection{background:transparent}.cm-fat-cursor{caret-color:transparent}@-moz-keyframes blink{50%{background-color:transparent}}@-webkit-keyframes blink{50%{background-color:transparent}}@keyframes blink{50%{background-color:transparent}}.cm-tab{display:inline-block;text-decoration:inherit}.CodeMirror-rulers{position:absolute;inset:-50px 0 0;overflow:hidden}.CodeMirror-ruler{border-left:1px solid #ccc;top:0;bottom:0;position:absolute}.cm-s-default .cm-header{color:#00f}.cm-s-default .cm-quote{color:#090}.cm-negative{color:#d44}.cm-positive{color:#292}.cm-header,.cm-strong{font-weight:700}.cm-em{font-style:italic}.cm-link{text-decoration:underline}.cm-strikethrough{text-decoration:line-through}.cm-s-default .cm-keyword{color:#708}.cm-s-default .cm-atom{color:#219}.cm-s-default .cm-number{color:#164}.cm-s-default .cm-def{color:#00f}.cm-s-default .cm-variable-2{color:#05a}.cm-s-default .cm-variable-3,.cm-s-default .cm-type{color:#085}.cm-s-default .cm-comment{color:#a50}.cm-s-default .cm-string{color:#a11}.cm-s-default .cm-string-2{color:#f50}.cm-s-default .cm-meta,.cm-s-default .cm-qualifier{color:#555}.cm-s-default .cm-builtin{color:#30a}.cm-s-default .cm-bracket{color:#997}.cm-s-default .cm-tag{color:#170}.cm-s-default .cm-attribute{color:#00c}.cm-s-default .cm-hr{color:#999}.cm-s-default .cm-link{color:#00c}.cm-s-default .cm-error,.cm-invalidchar{color:red}.CodeMirror-composing{border-bottom:2px solid}div.CodeMirror span.CodeMirror-matchingbracket{color:#0b0}div.CodeMirror span.CodeMirror-nonmatchingbracket{color:#a22}.CodeMirror-matchingtag{background:rgba(255,150,0,.3)}.CodeMirror-activeline-background{background:#e8f2ff}.CodeMirror{position:relative;overflow:hidden;background:white}.CodeMirror-scroll{overflow:scroll!important;margin-bottom:-50px;margin-right:-50px;padding-bottom:50px;height:100%;outline:none;position:relative;z-index:0}.CodeMirror-sizer{position:relative;border-right:50px solid transparent}.CodeMirror-vscrollbar,.CodeMirror-hscrollbar,.CodeMirror-scrollbar-filler,.CodeMirror-gutter-filler{position:absolute;z-index:6;display:none;outline:none}.CodeMirror-vscrollbar{right:0;top:0;overflow-x:hidden;overflow-y:scroll}.CodeMirror-hscrollbar{bottom:0;left:0;overflow-y:hidden;overflow-x:scroll}.CodeMirror-scrollbar-filler{right:0;bottom:0}.CodeMirror-gutter-filler{left:0;bottom:0}.CodeMirror-gutters{position:absolute;left:0;top:0;min-height:100%;z-index:3}.CodeMirror-gutter{white-space:normal;height:100%;display:inline-block;vertical-align:top;margin-bottom:-50px}.CodeMirror-gutter-wrapper{position:absolute;z-index:4;background:none!important;border:none!important}.CodeMirror-gutter-background{position:absolute;top:0;bottom:0;z-index:4}.CodeMirror-gutter-elt{position:absolute;cursor:default;z-index:4}.CodeMirror-gutter-wrapper ::selection{background-color:transparent}.CodeMirror-gutter-wrapper ::-moz-selection{background-color:transparent}.CodeMirror-lines{cursor:text;min-height:1px}.CodeMirror pre.CodeMirror-line,.CodeMirror pre.CodeMirror-line-like{-moz-border-radius:0;-webkit-border-radius:0;border-radius:0;border-width:0;background:transparent;font-family:inherit;font-size:inherit;margin:0;white-space:pre;word-wrap:normal;line-height:inherit;color:inherit;z-index:2;position:relative;overflow:visible;-webkit-tap-highlight-color:transparent;-webkit-font-variant-ligatures:contextual;font-variant-ligatures:contextual}.CodeMirror-wrap pre.CodeMirror-line,.CodeMirror-wrap pre.CodeMirror-line-like{word-wrap:break-word;white-space:pre-wrap;word-break:normal}.CodeMirror-linebackground{position:absolute;inset:0;z-index:0}.CodeMirror-linewidget{position:relative;z-index:2;padding:.1px}.CodeMirror-rtl pre{direction:rtl}.CodeMirror-code{outline:none}.CodeMirror-scroll,.CodeMirror-sizer,.CodeMirror-gutter,.CodeMirror-gutters,.CodeMirror-linenumber{-moz-box-sizing:content-box;box-sizing:content-box}.CodeMirror-measure{position:absolute;width:100%;height:0;overflow:hidden;visibility:hidden}.CodeMirror-cursor{position:absolute;pointer-events:none}.CodeMirror-measure pre{position:static}div.CodeMirror-cursors{visibility:hidden;position:relative;z-index:3}div.CodeMirror-dragcursors,.CodeMirror-focused div.CodeMirror-cursors{visibility:visible}.CodeMirror-selected{background:#d9d9d9}.CodeMirror-focused .CodeMirror-selected{background:#d7d4f0}.CodeMirror-crosshair{cursor:crosshair}.CodeMirror-line::selection,.CodeMirror-line>span::selection,.CodeMirror-line>span>span::selection{background:#d7d4f0}.CodeMirror-line::-moz-selection,.CodeMirror-line>span::-moz-selection,.CodeMirror-line>span>span::-moz-selection{background:#d7d4f0}.cm-searching{background-color:#ffa;background-color:#ff06}.cm-force-border{padding-right:.1px}@media print{.CodeMirror div.CodeMirror-cursors{visibility:hidden}}.cm-tab-wrap-hack:after{content:""}span.CodeMirror-selectedtext{background:none}.tippy-box[data-animation=fade][data-state=hidden]{opacity:0}[data-tippy-root]{max-width:calc(100vw - 10px)}.tippy-box{position:relative;background-color:#333;color:#fff;border-radius:4px;font-size:14px;line-height:1.4;white-space:normal;outline:0;transition-property:transform,visibility,opacity}.tippy-box[data-placement^=top]>.tippy-arrow{bottom:0}.tippy-box[data-placement^=top]>.tippy-arrow:before{bottom:-7px;left:0;border-width:8px 8px 0;border-top-color:initial;transform-origin:center top}.tippy-box[data-placement^=bottom]>.tippy-arrow{top:0}.tippy-box[data-placement^=bottom]>.tippy-arrow:before{top:-7px;left:0;border-width:0 8px 8px;border-bottom-color:initial;transform-origin:center bottom}.tippy-box[data-placement^=left]>.tippy-arrow{right:0}.tippy-box[data-placement^=left]>.tippy-arrow:before{border-width:8px 0 8px 8px;border-left-color:initial;right:-7px;transform-origin:center left}.tippy-box[data-placement^=right]>.tippy-arrow{left:0}.tippy-box[data-placement^=right]>.tippy-arrow:before{left:-7px;border-width:8px 8px 8px 0;border-right-color:initial;transform-origin:center right}.tippy-box[data-inertia][data-state=visible]{transition-timing-function:cubic-bezier(.54,1.5,.38,1.11)}.tippy-arrow{width:16px;height:16px;color:#333}.tippy-arrow:before{content:"";position:absolute;border-color:transparent;border-style:solid}.tippy-content{position:relative;padding:5px 9px;z-index:1}.tippy-box[data-theme~=light-border]{background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,8,16,.15);color:#333;box-shadow:0 4px 14px -2px #00081014}.tippy-box[data-theme~=light-border]>.tippy-backdrop{background-color:#fff}.tippy-box[data-theme~=light-border]>.tippy-arrow:after,.tippy-box[data-theme~=light-border]>.tippy-svg-arrow:after{content:"";position:absolute;z-index:-1}.tippy-box[data-theme~=light-border]>.tippy-arrow:after{border-color:transparent;border-style:solid}.tippy-box[data-theme~=light-border][data-placement^=top]>.tippy-arrow:before{border-top-color:#fff}.tippy-box[data-theme~=light-border][data-placement^=top]>.tippy-arrow:after{border-top-color:#00081033;border-width:7px 7px 0;top:17px;left:1px}.tippy-box[data-theme~=light-border][data-placement^=top]>.tippy-svg-arrow>svg{top:16px}.tippy-box[data-theme~=light-border][data-placement^=top]>.tippy-svg-arrow:after{top:17px}.tippy-box[data-theme~=light-border][data-placement^=bottom]>.tippy-arrow:before{border-bottom-color:#fff;bottom:16px}.tippy-box[data-theme~=light-border][data-placement^=bottom]>.tippy-arrow:after{border-bottom-color:#00081033;border-width:0 7px 7px;bottom:17px;left:1px}.tippy-box[data-theme~=light-border][data-placement^=bottom]>.tippy-svg-arrow>svg{bottom:16px}.tippy-box[data-theme~=light-border][data-placement^=bottom]>.tippy-svg-arrow:after{bottom:17px}.tippy-box[data-theme~=light-border][data-placement^=left]>.tippy-arrow:before{border-left-color:#fff}.tippy-box[data-theme~=light-border][data-placement^=left]>.tippy-arrow:after{border-left-color:#00081033;border-width:7px 0 7px 7px;left:17px;top:1px}.tippy-box[data-theme~=light-border][data-placement^=left]>.tippy-svg-arrow>svg{left:11px}.tippy-box[data-theme~=light-border][data-placement^=left]>.tippy-svg-arrow:after{left:12px}.tippy-box[data-theme~=light-border][data-placement^=right]>.tippy-arrow:before{border-right-color:#fff;right:16px}.tippy-box[data-theme~=light-border][data-placement^=right]>.tippy-arrow:after{border-width:7px 7px 7px 0;right:17px;top:1px;border-right-color:#00081033}.tippy-box[data-theme~=light-border][data-placement^=right]>.tippy-svg-arrow>svg{right:11px}.tippy-box[data-theme~=light-border][data-placement^=right]>.tippy-svg-arrow:after{right:12px}.tippy-box[data-theme~=light-border]>.tippy-svg-arrow{fill:#fff}.tippy-box[data-theme~=light-border]>.tippy-svg-arrow:after{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMCA2czEuNzk2LS4wMTMgNC42Ny0zLjYxNUM1Ljg1MS45IDYuOTMuMDA2IDggMGMxLjA3LS4wMDYgMi4xNDguODg3IDMuMzQzIDIuMzg1QzE0LjIzMyA2LjAwNSAxNiA2IDE2IDZIMHoiIGZpbGw9InJnYmEoMCwgOCwgMTYsIDAuMikiLz48L3N2Zz4=);background-size:16px 6px;width:16px;height:6px}.bytemd{box-sizing:border-box;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;color:#24292e;border:1px solid #e1e4e8;background-color:#fff;height:300px}.bytemd *{box-sizing:border-box}.bytemd-hidden{display:none!important}.bytemd .CodeMirror-scroll,.bytemd .CodeMirror-sizer,.bytemd .CodeMirror-gutter,.bytemd .CodeMirror-gutters,.bytemd .CodeMirror-linenumber{box-sizing:content-box}.bytemd .CodeMirror,.bytemd code,.bytemd kbd{font-family:SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace}.bytemd-toolbar{padding:4px 12px;border-bottom:1px solid #e1e4e8;background-color:#fafbfc;user-select:none;overflow:hidden}.bytemd-toolbar-left{float:left}.bytemd-toolbar-right{float:right}.bytemd-toolbar-tab{display:inline-block;cursor:pointer;padding-left:8px;padding-right:8px;line-height:24px;font-size:14px}.bytemd-toolbar-tab-active{color:#0366d6}.bytemd-toolbar-icon{display:inline-block;vertical-align:top;cursor:pointer;border-radius:4px;margin-left:6px;margin-right:6px}.bytemd-toolbar-icon svg,.bytemd-toolbar-icon img{display:block;padding:4px;width:24px;height:24px}.bytemd-toolbar-icon:hover{background-color:#e1e4e8}.bytemd-toolbar-icon-active{color:#0366d6}.bytemd-toolbar .tippy-content{padding-left:0;padding-right:0}.bytemd-dropdown{max-height:300px;overflow:auto;font-size:14px}.bytemd-dropdown-title{margin:0 12px;font-weight:500;border-bottom:1px solid #e1e4e8;line-height:32px;color:#444d56}.bytemd-dropdown-item{padding:4px 12px;height:32px;cursor:pointer}.bytemd-dropdown-item:hover{background-color:#f6f8fa}.bytemd-dropdown-item-icon{display:inline-block}.bytemd-dropdown-item-icon svg{display:block;padding:4px;width:24px;height:24px}.bytemd-dropdown-item-title{display:inline-block;line-height:24px;vertical-align:top}.bytemd-body{height:calc(100% - 58px);overflow:auto}.bytemd-editor{display:inline-block;vertical-align:top;height:100%;overflow:hidden}.bytemd-editor .CodeMirror{height:100%;font-size:14px;line-height:1.5}.bytemd-editor .CodeMirror pre.CodeMirror-placeholder{color:#959da5}.bytemd-editor .CodeMirror .CodeMirror-lines{max-width:800px;margin:0 auto;padding:16px 0}.bytemd-editor .CodeMirror pre.CodeMirror-line,.bytemd-editor .CodeMirror pre.CodeMirror-line-like{padding:0 4%}.bytemd-preview{display:inline-block;vertical-align:top;height:100%;overflow:auto}.bytemd-preview .markdown-body{max-width:800px;margin:0 auto;padding:16px 4%}.bytemd-sidebar{display:inline-block;vertical-align:top;height:100%;overflow:auto;font-size:16px;border-left:1px solid #e1e4e8;width:280px;position:relative;padding:0 16px}.bytemd-sidebar-close{position:absolute;padding:16px;top:0;right:0;cursor:pointer}.bytemd-sidebar-close:hover{color:#0366d6}.bytemd-sidebar h2{font-size:16px;font-weight:600;margin:32px 0 16px}.bytemd-sidebar ul{padding-left:0;color:#959da5}.bytemd-help{font-size:13px}.bytemd-help ul{line-height:20px}.bytemd-help ul svg{width:16px;height:16px;display:block}.bytemd-help ul div{display:inline-block;vertical-align:top}.bytemd-help li{list-style:none;margin-bottom:12px}.bytemd-help-icon{padding:2px 0}.bytemd-help-title{padding-left:8px}.bytemd-help-content{float:right;font-size:12px}.bytemd-toc li{list-style:none;margin-bottom:4px;font-size:14px;line-height:2;cursor:pointer;text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.bytemd-toc-active{color:#0366d6;background-color:#f6f8fa}.bytemd-toc-first{font-weight:500}.bytemd-status{font-size:12px;line-height:24px;border-top:1px solid #e1e4e8;user-select:none}.bytemd-status-left{float:left}.bytemd-status-left span{padding-left:16px}.bytemd-status-left strong{font-weight:600}.bytemd-status-right{float:right}.bytemd-status-right label,.bytemd-status-right span{margin-right:16px;cursor:pointer}.bytemd-status-right span:hover{color:#0366d6}.bytemd-status-right input{vertical-align:middle;margin-right:3px}.bytemd-status-error{color:#d73a49}.bytemd-fullscreen.bytemd{position:fixed;inset:0;border:none;height:100vh!important}.bytemd-split .bytemd-preview{border-left:1px solid #e1e4e8}.tippy-box{font-size:12px}\n')();
var create_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;700&display=swap');\r\n:root{\r\n    --lblue: #3C91E6;\r\n    --green: #75B150;\r\n    --pink: #AE415C;\r\n    --purple: #A78ADD;\r\n    --yellow: #FFF500;\r\n    --white: white;\r\n    --ulblue: #7BCFCE;\r\n    --bg-dark: #16161E;\r\n    --bg-light: #1A1B26 ;\r\n    --bg-window:rgba(217, 217, 217, .03);\r\n}\r\nhtml{\r\n    scroll-behavior: smooth;\r\n}\r\nbody{\r\n    font-family: 'Inter', sans-serif;\r\n    background-color: var(--bg-dark);\r\n    color: var(--white);\r\n    margin: 0;\r\n    overflow-x: hidden;\r\n    \r\n}\r\n.caret-lblue{\r\n    caret-color: var(--lblue);\r\n}\r\n.caret-pink{\r\n    caret-color: var(--pink);\r\n}\r\n.caret-purple{\r\n    caret-color: var(--purple);\r\n}\r\n.caret-green{\r\n    caret-color: var(--green);\r\n}\r\n.border-pink{\r\n    border: solid 2px var(--pink);\r\n}\r\n.border-lblue{\r\n    border: solid 2px var(--lblue);\r\n}\r\n.border-green{\r\n    border: solid 2px var(--green);\r\n}\r\n.border-purple{\r\n    border: solid 2px var(--purple);\r\n}\r\n.text-white{\r\n    color: var(--white);\r\n}\r\n.text-ulblue{\r\n    color: var(--ulblue);\r\n}\r\n.text-lblue{\r\n    color: var(--lblue);\r\n}\r\n.text-purple{\r\n    color: var(--purple);\r\n}\r\n.text-green{\r\n    color: var(--green);\r\n}\r\n.text-pink{\r\n    color: var(--pink);\r\n}\r\n.text-yellow{\r\n    color: var(--yellow);\r\n}\r\n.bg-dark{\r\n    background-color: var(--bg-dark);\r\n}\r\n.bg-light{\r\n    background-color: var(--bg-light);\r\n}\r\n.bg-window{\r\n    background-color: var(--bg-window);\r\n}\r\nsection{\r\n    min-height: 100vh;\r\n}\r\n.scale-up-center {\r\n	-webkit-animation: scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;\r\n	        animation: scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;\r\n}\r\n@-webkit-keyframes scale-up-center {\r\n  0% {\r\n    -webkit-transform: scale(0.5);\r\n            transform: scale(0.5);\r\n  }\r\n  100% {\r\n    -webkit-transform: scale(1);\r\n            transform: scale(1);\r\n  }\r\n}\r\n@keyframes scale-up-center {\r\n  0% {\r\n    -webkit-transform: scale(0.5);\r\n            transform: scale(0.5);\r\n  }\r\n  100% {\r\n    -webkit-transform: scale(1);\r\n            transform: scale(1);\r\n  }\r\n}\r\n.slide-in-fwd-top {\r\n	-webkit-animation: slide-in-fwd-top-delay-4 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) 0.4s both;\r\n	        animation: slide-in-fwd-top-delay-4 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) 0.4s both;\r\n}\r\n.slide-in-fwd-top-delay-4 {\r\n	-webkit-animation: slide-in-fwd-top 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) 0.8s both;\r\n	        animation: slide-in-fwd-top 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) 0.8s both;\r\n}\r\n@-webkit-keyframes slide-in-fwd-top-delay-4 {\r\n    0% {\r\n      -webkit-transform: translateZ(-1400px) translateY(-800px);\r\n              transform: translateZ(-1400px) translateY(-800px);\r\n      opacity: 0;\r\n    }\r\n    100% {\r\n      -webkit-transform: translateZ(0) translateY(0);\r\n              transform: translateZ(0) translateY(0);\r\n      opacity: 1;\r\n    }\r\n  }\r\n@keyframes slide-in-fwd-top {\r\n    0% {\r\n      -webkit-transform: translateZ(-1400px) translateY(-800px);\r\n              transform: translateZ(-1400px) translateY(-800px);\r\n      opacity: 0;\r\n    }\r\n    100% {\r\n      -webkit-transform: translateZ(0) translateY(0);\r\n              transform: translateZ(0) translateY(0);\r\n      opacity: 1;\r\n    }\r\n  }\r\n@-webkit-keyframes slide-in-fwd-top {\r\n    0% {\r\n      -webkit-transform: translateZ(-1400px) translateY(-800px);\r\n              transform: translateZ(-1400px) translateY(-800px);\r\n      opacity: 0;\r\n    }\r\n    100% {\r\n      -webkit-transform: translateZ(0) translateY(0);\r\n              transform: translateZ(0) translateY(0);\r\n      opacity: 1;\r\n    }\r\n  }\r\n@keyframes slide-in-fwd-top {\r\n    0% {\r\n      -webkit-transform: translateZ(-1400px) translateY(-800px);\r\n              transform: translateZ(-1400px) translateY(-800px);\r\n      opacity: 0;\r\n    }\r\n    100% {\r\n      -webkit-transform: translateZ(0) translateY(0);\r\n              transform: translateZ(0) translateY(0);\r\n      opacity: 1;\r\n    }\r\n  }\r\n/* CARDS ANIMATIONS */\r\n.fade-in-bottom {\r\n    -webkit-animation: fade-in-bottom 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) 0.1s both;\r\n            animation: fade-in-bottom 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) 0.1s both;\r\n  }\r\n.fade-in-bottom-d-1 {\r\n    -webkit-animation: fade-in-bottom 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) 0.2s both;\r\n            animation: fade-in-bottom 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) 0.2s both;\r\n  }\r\n.fade-in-bottom-d-2 {\r\n    -webkit-animation: fade-in-bottom 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) 0.3s both;\r\n            animation: fade-in-bottom 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) 0.3s both;\r\n  }\r\n.fade-in-bottom-d-3 {\r\n    -webkit-animation: fade-in-bottom 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) 0.4s both;\r\n            animation: fade-in-bottom 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) 0.4s both;\r\n  }\r\n.fade-in-bottom-d-4 {\r\n    -webkit-animation: fade-in-bottom 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) 0.5s both;\r\n            animation: fade-in-bottom 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) 0.5s both;\r\n  }\r\n.fade-in-bottom-d-5 {\r\n    -webkit-animation: fade-in-bottom 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) 0.6s both;\r\n            animation: fade-in-bottom 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) 0.6s both;\r\n  }\r\n.fade-in-bottom-d-6 {\r\n    -webkit-animation: fade-in-bottom 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) 0.7s both;\r\n            animation: fade-in-bottom 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) 0.7s both;\r\n  }\r\n.hide-project{\r\n    visibility: hidden;\r\n}\r\n@-webkit-keyframes fade-in-bottom {\r\n    0% {\r\n      -webkit-transform: translateY(50px);\r\n              transform: translateY(50px);\r\n      opacity: 0;\r\n    }\r\n    100% {\r\n      -webkit-transform: translateY(0);\r\n              transform: translateY(0);\r\n      opacity: 1;\r\n    }\r\n  }\r\n@keyframes fade-in-bottom {\r\n    0% {\r\n      -webkit-transform: translateY(50px);\r\n              transform: translateY(50px);\r\n      opacity: 0;\r\n    }\r\n    100% {\r\n      -webkit-transform: translateY(0);\r\n              transform: translateY(0);\r\n      opacity: 1;\r\n    }\r\n  }\r\n.date{\r\n    font-size: .75rem;\r\n    color: gray;\r\n}\r\n.bytemd {\r\n  height: calc(100vh - 175px);\r\n}\r\n.bytemd{\r\n  background-color: var(--bg-dark);\r\n  color: white;\r\n}\r\n.bytemd-toolbar{\r\n  color: white;\r\n  background-color: var(--bg-dark);\r\n}\r\n.CodeMirror{\r\n  color: white;\r\n  background-color: var(--bg-dark);\r\n}\r\n.markdown-body{\r\n  max-width: 900px;\r\n  margin: 0 auto;\r\n  padding: 0 .5rem ;\r\n  word-wrap: break-word;\r\n}\r\n.markdown-body code{\r\n  max-width: 100%;\r\n  word-wrap: break-word;\r\n}\r\n.markdown-body img{\r\n  width: 100%;\r\n  border-radius: 1rem;\r\n}\r\n.markdown-body a{\r\n    color: var(--green);\r\n}\r\n.markdown-body h1{\r\n  color: var(--lblue);\r\n}\r\n.markdown-body h2{\r\n  color: var(--pink);\r\n}\r\n:root{--lblue:#3C91E6;--green:#75B150;--pink:#AE415C;--purple:#A78ADD;--yellow:#FFF500;--white:white;--ulblue:#7BCFCE;--bg-dark:#16161E;--bg-light:#1A1B26 ;--bg-window:rgba(217, 217, 217, .03)}\r\nh1.svelte-1pwpz9v.svelte-1pwpz9v{text-align:center}\r\nform.svelte-1pwpz9v.svelte-1pwpz9v{box-sizing:border-box;margin:.4rem 1rem ;display:flex;gap:1rem}\r\nlabel.svelte-1pwpz9v.svelte-1pwpz9v{width:33%}\r\nlabel.svelte-1pwpz9v input.svelte-1pwpz9v{box-sizing:border-box;width:100%;padding:.5rem;background-color:rgb(27, 27, 27);border-radius:.2rem}\r\n#submit-post.svelte-1pwpz9v.svelte-1pwpz9v{align-self:self-end;padding:.5rem;margin-left:auto;background-color:var(--bg-dark);border:solid 2px var(--purple);color:var(--purple);border-radius:.2rem}\r\n#submit-post.svelte-1pwpz9v.svelte-1pwpz9v:hover{background-color:var(--purple);color:white}\r\n#p-desc.svelte-1pwpz9v.svelte-1pwpz9v{color:var(--pink)}\r\n#desc.svelte-1pwpz9v.svelte-1pwpz9v{color:var(--pink);border:2px solid var(--pink)}\r\n#p-image.svelte-1pwpz9v.svelte-1pwpz9v{color:var(--lblue)}\r\n#image.svelte-1pwpz9v.svelte-1pwpz9v{color:var(--lblue);border:2px solid var(--lblue)}\r\n#p-title.svelte-1pwpz9v.svelte-1pwpz9v{color:var(--green)}\r\n#title.svelte-1pwpz9v.svelte-1pwpz9v{color:var(--lblue);border:2px solid var(--green)}")();
const css = {
  code: "@import '../css/global.css';:root{--lblue:#3C91E6;--green:#75B150;--pink:#AE415C;--purple:#A78ADD;--yellow:#FFF500;--white:white;--ulblue:#7BCFCE;--bg-dark:#16161E;--bg-light:#1A1B26 ;--bg-window:rgba(217, 217, 217, .03)}h1.svelte-1pwpz9v.svelte-1pwpz9v{text-align:center}form.svelte-1pwpz9v.svelte-1pwpz9v{box-sizing:border-box;margin:.4rem 1rem ;display:flex;gap:1rem}label.svelte-1pwpz9v.svelte-1pwpz9v{width:33%}label.svelte-1pwpz9v input.svelte-1pwpz9v{box-sizing:border-box;width:100%;padding:.5rem;background-color:rgb(27, 27, 27);border-radius:.2rem}#submit-post.svelte-1pwpz9v.svelte-1pwpz9v{align-self:self-end;padding:.5rem;margin-left:auto;background-color:var(--bg-dark);border:solid 2px var(--purple);color:var(--purple);border-radius:.2rem}#submit-post.svelte-1pwpz9v.svelte-1pwpz9v:hover{background-color:var(--purple);color:white}#p-desc.svelte-1pwpz9v.svelte-1pwpz9v{color:var(--pink)}#desc.svelte-1pwpz9v.svelte-1pwpz9v{color:var(--pink);border:2px solid var(--pink)}#p-image.svelte-1pwpz9v.svelte-1pwpz9v{color:var(--lblue)}#image.svelte-1pwpz9v.svelte-1pwpz9v{color:var(--lblue);border:2px solid var(--lblue)}#p-title.svelte-1pwpz9v.svelte-1pwpz9v{color:var(--green)}#title.svelte-1pwpz9v.svelte-1pwpz9v{color:var(--lblue);border:2px solid var(--green)}",
  map: null
};
const Create = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let value;
  const plugins = [gfm()];
  $$result.css.add(css);
  return `<h1 class="${"svelte-1pwpz9v"}">Create new post</h1>

<form class="${"svelte-1pwpz9v"}"><label class="${"svelte-1pwpz9v"}"><p id="${"p-title"}" class="${"svelte-1pwpz9v"}">Title</p>
        <input type="${"text"}" id="${"title"}" class="${"svelte-1pwpz9v"}"></label>
    <label class="${"svelte-1pwpz9v"}"><p id="${"p-desc"}" class="${"svelte-1pwpz9v"}">Description</p>
        <input type="${"text"}" id="${"desc"}" class="${"svelte-1pwpz9v"}"></label>
    <label class="${"svelte-1pwpz9v"}"><p id="${"p-image"}" class="${"svelte-1pwpz9v"}">Thumbnail</p>
        <input type="${"text"}" id="${"image"}" class="${"svelte-1pwpz9v"}"></label>
    <input type="${"submit"}" id="${"submit-post"}" class="${"svelte-1pwpz9v"}"></form>
<div class="${"post-editor"}">${validate_component(Editor, "Editor").$$render($$result, { value, plugins }, {}, {})}
</div>`;
});
export { Create as default };
