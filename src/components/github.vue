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
        console.log(this.$store.state);
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
    // async getUser() {
    //   const response = await fetch(
    //     `https://api.github.com/users/${this.username}`
    //   );
    //   const data = await response.json();
    //   console.log(data);
    //   await this.$router.push({ name: "preview" });
    // },
  },
};
</script>

<style scoped></style>
