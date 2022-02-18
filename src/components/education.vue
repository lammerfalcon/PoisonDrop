<template>
  <form action="">
    <div class="form-item">
      <label>Образование</label>
      <v-select
        label="name"
        @input="setterGrade"
        :options="$store.state.grade"
        :value="$store.state.activeGrade"
      ></v-select>
    </div>
    <div class="form-item">
      <label>Навыки</label>
      <v-select
        label="name"
        taggable
        multiple
        @input="setterSkills"
        :options="$store.state.skills"
        :value="$store.state.activeSkill"
      />
    </div>
    <div class="form-item sms-notification">
      <label class="container">
        <input v-model="user.sms" type="checkbox" checked="checked" />
        <span class="checkmark"></span>
        Оповестить по SMS
      </label>
    </div>
    <div class="form-item buttons">
      <button @click.prevent="$router.push({ name: 'home' })">Назад</button>
      <button @click.prevent="$router.push({ name: 'experience' })">
        Вперед
      </button>
    </div>
  </form>
</template>
<script>
export default {
  name: "educationForm",
  data() {
    return {};
  },
  created() {
    this.$store.commit("setterModule", "Данные об образовании");
  },
  methods: {
    setterGrade(val) {
      this.$store.commit("setterGrade", val);
    },
    setterSkills(val) {
      this.$store.commit("setterSkills", val);
    },
  },
  computed: {
    store() {
      return this.$store.state;
    },
    user: {
      get() {
        return this.$store.state.user;
      },
      set(value) {
        this.$store.commit("setterUser", value);
      },
    },
  },
};
</script>

<style scoped></style>
