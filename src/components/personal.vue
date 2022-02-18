<template>
  <form action="">
    <div class="form-item">
      <label>Фамилия</label>
      <input v-model="user.lastname" type="text" />
    </div>
    <div class="form-item">
      <label>Имя</label> <input v-model="user.name" />
    </div>
    <div class="form-item">
      <label>Email</label> <input v-model="user.email" />
    </div>
    <div class="form-item">
      <v-date-picker :model-config="modelConfig" v-model="user.birthdate">
        <template v-slot="{ inputValue, inputEvents }">
          <label>Дата рождения</label>
          <input
            id="birthDate"
            class=""
            v-on="inputEvents"
            :value="inputValue"
          />
        </template>
      </v-date-picker>
    </div>
    <div class="form-item">
      <label>Телефон</label>
      <input type="tel" v-model="user.phone" maxlength="12" />
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
      <button @click.prevent="$router.push({ name: 'education' })">
        Вперед
      </button>
    </div>
  </form>
</template>

<script>
export default {
  name: "personalForm",
  data() {
    return {
      userNumber: "+7",
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
        this.$store.commit("setterUser", value);
      },
    },
  },

  watch: {
    userNumber: function (newNumber) {
      if (newNumber.length < 2) {
        this.$store.state.user.phone = "+7";
      }
    },
  },
};
</script>

<style scoped lang="scss"></style>
