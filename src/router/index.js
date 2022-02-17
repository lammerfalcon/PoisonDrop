import Vue from "vue";
import VueRouter from "vue-router";
import PersonalData from "../components/personalData";
import EducationData from "../components/education";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: PersonalData,
  },
  {
    path: "/education",
    name: "education",
    component: EducationData,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
