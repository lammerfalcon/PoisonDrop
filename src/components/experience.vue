<template>
  <form action="">
    <label>Опыт работы</label>
    <div
      class="form-item"
      v-for="(experience, k) in $store.state.experience.slice(0, 3)"
      :key="k"
    >
      <textarea
        maxlength="180"
        rows="4"
        col="50"
        type="text"
        class="form-control"
        v-model="experience.name"
      />
      <span>
        <button
          class="btn del"
          @click.prevent="remove(k)"
          v-show="k || (!k && $store.state.experience.length > 1)"
        ></button>
        <button
          class="btn add"
          @click.prevent="add(k)"
          v-show="k == $store.state.experience.length - 1"
        ></button>
      </span>
    </div>
    <div class="form-item buttons">
      <button @click.prevent="$router.push({ name: 'education' })">
        Назад
      </button>
      <button @click.prevent="$router.push({ name: 'github' })">Вперед</button>
    </div>
  </form>
</template>

<script>
export default {
  name: "experienceForm",
  created() {
    this.$store.commit("setterModule", "Опыт работы");
  },
  computed: {
    user: {
      get() {
        return this.$store.state.user;
      },
      set(value) {
        this.$store.commit("setterExperience", value);
      },
    },
  },
  methods: {
    add() {
      this.$store.state.experience.push({ name: "" });
    },
    remove(index) {
      this.$store.state.experience.splice(index, 1);
    },
  },
};
</script>

<style scoped></style>
