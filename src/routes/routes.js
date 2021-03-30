import Restapi from "../components/Restapi.vue";
import Looping from "../components/Looping.vue";
import Conditionals from "../components/Conditionals.vue";

const routes = [
  { path: "/restapi", component: Restapi, name: "RestApi" },
  { path: "/looping", component: Looping, name: "Looping" },
  { path: "/conditionals", component: Conditionals, name: "Conditionals" }
];

export default routes;
