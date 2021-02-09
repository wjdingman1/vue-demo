import Buttons from "../components/Buttons.vue";
import Looping from "../components/Looping.vue";
import Conditionals from "../components/Conditionals.vue";

const routes = [
  { path: "/buttons", component: Buttons, name: "Buttons" },
  { path: "/looping", component: Looping, name: "Looping" },
  { path: "/conditionals", component: Conditionals, name: "Conditionals" }
];

export default routes;
