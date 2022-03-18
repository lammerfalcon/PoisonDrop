<template>
  <form action="">
    <div
      class="form-item"
      :class="{ 'required--error': this.$v.user.lastname.$error }"
    >
      <label>Фамилия</label>
      <input v-model="user.lastname" type="text" />
      <span class="required" v-if="!$v.user.lastname.required">
        Обязательное поле
      </span>
      <span class="required" v-if="!$v.user.lastname.minLength">
        Минимальное колличество символов: 3
      </span>
    </div>
    <div class="form-item" :class="{ 'required--error': this.$v.user.$error }">
      <label>Имя</label>
      <input v-model="user.name" />
      <span class="required" v-if="!$v.user.name.required">
        Обязательное поле
      </span>
      <span class="required" v-if="!$v.user.name.minLength">
        Минимальное колличество символов: 3
      </span>
    </div>
    <div class="form-item" :class="{ 'required--error': this.$v.user.$error }">
      <label>Email</label> <input type="email" v-model="user.email" />
      <span class="required" v-if="!this.$v.user.email.email">
        Введите корректный Email
      </span>
    </div>
    <div class="form-item" :class="{ 'required--error': this.$v.user.$error }">
      <label>Дата рождения</label>
      <v-date-picker :model-config="modelConfig" v-model="user.birthdate">
        <template v-slot="{ inputValue, inputEvents }">
          <input
            id="birthDate"
            class=""
            v-on="inputEvents"
            :value="inputValue"
          />
        </template>
      </v-date-picker>
      <span class="required birthdate" v-if="!$v.user.birthdate.required">
        Обязательное поле
      </span>
    </div>
    <div class="form-item" :class="{ 'required--error': this.$v.user.$error }">
      <label>Телефон</label>
      <input maxlength="12" type="tel" v-model="user.phone" />
      <div>
        <span
          class="required"
          v-if="
            this.$v.user.phone.required && this.$v.user.phone.$model === '+7'
          "
        >
          Обязательное поле
        </span>
        <span class="required" v-else-if="this.$v.user.phone.$error">
          Введите корректный номер
        </span>
      </div>
    </div>
    <div class="form-item">
      <div class="gender-items">
        <p>
          <input
            v-model="user.gender"
            value="Муж"
            type="radio"
            id="gender1"
            name="gender"
            checked
          />
          <label for="gender1">Муж.</label>
        </p>
        <p>
          <input
            v-model="user.gender"
            value="Жен"
            type="radio"
            id="gender2"
            name="gender"
          />
          <label for="gender2">Жен.</label>
        </p>
      </div>
    </div>
    <div class="form-item buttons">
      <button @click.prevent="toRoute('education')">Вперед</button>
    </div>
  </form>
</template>

<script>
import { required, email, minLength, helpers } from "vuelidate/lib/validators";
const isPhone = (value) => /^[+8]\d{11}$/.test(value);
export const cyrillic = helpers.regex("alphaCyrillic", /^[a-zA-ZА-я]*$/);
export default {
  validations: {
    user: {
      lastname: {
        required,
        minLength: minLength(3),
        alphaCyrillic: cyrillic,
      },
      name: {
        required,
        minLength: minLength(3),
        isCyrillic: cyrillic,
      },
      phone: {
        required,
        phoneValid: isPhone,
      },
      email: {
        email,
      },
      birthdate: {
        required,
      },
    },
  },
  name: "personalForm",
  data() {
    return {
      modelConfig: {
        type: "string",
        mask: "DD-MM-YYYY",
      },
    };
  },
  created() {
    this.$store.commit("setterModule", "Персональные данные");
  },
  computed: {
    user: {
      get() {
        return this.$store.state.user;
      },
      set(value) {
        this.$v.$touch();
        this.$store.commit("setterUser", value);
      },
    },
  },
  methods: {
    toRoute(route) {
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }
      this.$router.push({ name: route });
    },
  },
};
</script>

<style scoped lang="scss"></style>
