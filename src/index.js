// Remove the following lines, if you do not need any of Bootstrap's JavaScript features
import Popper from "popper.js";
window.jQuery = $;
window.$ = $;

require("bootstrap");

// Remove this demo code, that's only here to show how the .env file works!
if (process.env["HELLO"]) {
  console.log(`Hello ${process.env.HELLO}!`);
}
