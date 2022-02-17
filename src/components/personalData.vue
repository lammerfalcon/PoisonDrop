<template>
  <form action="">
    <div class="form-item">
      <label>Фамилия</label>
      <input class="" id="lastname" />
    </div>
    <div class="form-item"><label>Имя</label> <input class="" id="name" /></div>
    <div class="form-item">
      <label>Email</label> <input class="" id="email" />
    </div>
    <div class="form-item">
      <v-date-picker v-model="birthDate">
        <template v-slot="{ inputValue, inputEvents }">
          <label>Дата рождения</label>
          <input
            id="birthDate"
            class=""
            :value="inputValue"
            v-on="inputEvents"
          />
        </template>
      </v-date-picker>
    </div>
    <div class="form-item">
      <label>Телефон</label>
      <input type="tel" v-model="userNumber" maxlength="12" />
    </div>
    <div class="form-item">
      <div class="gender-items">
        <p>
          <input type="radio" id="test1" name="radio-group" checked />
          <label for="test1">Муж.</label>
        </p>
        <p>
          <input type="radio" id="test2" name="radio-group" />
          <label for="test2">Жен.</label>
        </p>
      </div>
    </div>
    <div class="form-item buttons">
      <button>Назад</button>
      <button @click.prevent="$router.push({ name: 'education' })">
        Вперед
      </button>
    </div>
  </form>
</template>

<script>
export default {
  name: "FormName",
  data() {
    return {
      birthDate: new Date(),
      userNumber: "+7",
      gender: null,
    };
  },
  watch: {
    userNumber: function (newNumber) {
      if (newNumber.length < 2) {
        this.userNumber = "+7";
      }
    },
  },
};
</script>

<style scoped lang="scss"></style>
