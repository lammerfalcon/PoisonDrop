import Vue from "vue";
import VueRouter from "vue-router";
import PersonalDForm from "../components/personal";
import EducationForm from "../components/education";
import ExperienceForm from "../components/experience";
import GithubForm from "../components/github";
import previewForm from "../components/preview";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "personal",
    component: PersonalDForm,
  },
  {
    path: "/education",
    name: "education",
    component: EducationForm,
  },
  {
    path: "/experience",
    name: "experience",
    component: ExperienceForm,
  },
  {
    path: "/github",
    name: "github",
    component: GithubForm,
  },
  {
    path: "/preview",
    name: "preview",
    component: previewForm,
  },
];

const router = new VueRouter({
  mode: "history",
  base: "/",
  routes,
});

export default router;
