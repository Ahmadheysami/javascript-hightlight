import hljs from "highlight.js";

// css
import "./src/css/main.css";
import "highlight.js/styles/stackoverflow-dark.css";
// init bg gradient
var gradient = new Gradient();
gradient.initGradient("#canvas");

// hightlight js
// document.querySelector(".code code").innerHTML = hljs.highlightAuto(
//   document.querySelector(".code code ").innerHTML
// ).value;

document.querySelector(".code code pre").innerHTML = hljs.highlight(
  document.querySelector(".code code pre").innerHTML,
  {
    language: "javascript",
    ignoreIllegals: false,
  }
).value;
