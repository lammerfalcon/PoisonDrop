<template>
  <form action="">
    <div class="form-item">
      <label>Github</label>
      <input
        type="text"
        placeholder="Введите Github логин"
        v-model="user.username"
      />
    </div>
    <div class="form-item buttons">
      <button @click.prevent="$router.push({ name: 'experience' })">
        Назад
      </button>
      <button @click.prevent="routePreview()">Вперед</button>
    </div>
  </form>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "githubForm",
  computed: {
    user: {
      get() {
        return this.$store.state.user;
      },
      set(value) {
        this.$store.commit("setterUser", value);
      },
    },
    ...mapGetters({
      githubData: "githubData",
    }),
  },
  created() {
    this.$store.commit("setterModule", "Профиль Github");
  },
  methods: {
    routePreview() {
      this.getGithubData();
      this.$router.push({ name: "preview" });
    },
    ...mapActions({
      getGithubData: "getData",
    }),
  },
};
</script>

<style scoped></style>
