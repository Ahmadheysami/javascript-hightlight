import hljs from "highlight.js";

// css
import "./src/css/main.css";
import "highlight.js/styles/tokyo-night-dark.css";
// init bg gradient
var gradient = new Gradient();
gradient.initGradient("#canvas");

document.querySelector(".code code pre").innerHTML = hljs.highlight(
  document.querySelector(".code code pre").innerHTML,
  {
    language: "js",
    // ignoreIllegal    s: false,
  }
).value;
