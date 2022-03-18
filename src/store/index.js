import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token_bot: "5034858680:AAEHeqBDtBk0BBl4gSdKfCumnh9B3XvtdUI",
    module: "",
    user: {
      name: "",
      lastname: "",
      email: "",
      phone: "+7",
      birthdate: "",
      gender: "",
      sms: true,
    },
    grade: [
      { name: "Среднее" },
      { name: "Средне-специальное" },
      { name: "Неоконченное высшее" },
      { name: "Бакалавр" },
      { name: "Магистрант" },
      { name: "Аспирант" },
    ],
    skills: [
      { name: "Vue" },
      { name: "React" },
      { name: "Angular" },
      { name: "Svelte" },
      { name: "Ember.js" },
    ],
    activeGrade: [],
    activeSkill: [],

    experience: [
      {
        name: "",
      },
    ],
    githubData: {},
  },
  getters: {
    githubData: (state) => state.githubData,
    module: (state) => state.module,
    user: (state) => state.user,
    options: (state) => state.options,
    experience: (state) => state.experience,
    activeGrade: (state) => state.activeGrade,
  },
  mutations: {
    setterGrade: (state, options) => (state.activeGrade = options),
    setterGithubData: (state, options) => (state.githubData = options),
    setterSkills: (state, options) => (state.activeSkill = options),
    setterUser: (state, user) => (state.user = user),
    setterModule: (state, module) => (state.module = module),
    setterExperience: (state, options) => (state.experience = options),
  },
  actions: {
    async getData({ commit, state }) {
      const username = state.user.username;
      const response = await fetch(`https://api.github.com/users/${username}`);
      const data = await response.json();
      commit("setterGithubData", data);
    },

    setUser({ commit }) {
      commit("setterUser");
    },
    setModule({ commit }) {
      commit("setterModule");
    },
    setExperience({ commit }) {
      commit("setterExperience");
    },
  },
  modules: {},
});
