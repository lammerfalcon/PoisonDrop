<template>
  <form action="">
    <div
      class="form-item"
      :class="{ 'required--error': this.$v.activeGrade.$error }"
    >
      <label>Образование</label>

      <v-select
        label="name"
        @input="setterGrade"
        :options="$store.state.grade"
        :value="$store.state.activeGrade"
      ></v-select>
      <span class="required" v-if="!$v.activeGrade.required">
        Обязательное поле
      </span>
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
        <input v-model="user.sms" type="checkbox" />
        <span class="checkmark"></span>
        Оповестить по SMS
      </label>
    </div>
    <div class="form-item buttons">
      <button @click.prevent="$router.push({ name: 'personal' })">Назад</button>
      <button @click.prevent="toRoute('experience')">Вперед</button>
    </div>
  </form>
</template>
<script>
import { required } from "vuelidate/lib/validators";
export default {
  validations: {
    activeGrade: {
      required,
    },
  },
  name: "educationForm",
  created() {
    this.$store.commit("setterModule", "Данные об образовании");
  },
  methods: {
    async setterGrade(val) {
      await this.$v.$touch();
      this.$store.commit("setterGrade", val);
    },
    setterSkills(val) {
      this.$store.commit("setterSkills", val);
    },
    toRoute(route) {
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }
      this.$router.push({ name: route });
    },
  },
  computed: {
    user: {
      get() {
        return this.$store.state.user;
      },
      set(value) {
        this.$store.commit("setterUser", value);
      },
    },
    activeGrade: {
      get() {
        return this.$store.state.activeGrade;
      },
      set(value) {
        this.$v.$touch();
        this.$store.commit("setterGrade", value);
      },
    },
  },
};
</script>

<style scoped></style>
