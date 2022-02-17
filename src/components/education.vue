<template>
  <form action="">
    <div class="form-item">
      <label>Образование</label>
      <v-select v-model="value" :options="options" />
      <!--      <select v-model="selected">-->
      <!--        <option v-for="option in options" :key="option.value">-->
      <!--          {{ option.text }}-->
      <!--        </option>-->
      <!--      </select>-->
    </div>
    <div class="form-item">
      <label>Навыки</label>
      <v-select
        taggable
        multiple
        :reduce="(option) => option.id"
        :options="options2"
      />
    </div>
    <div class="form-item sms-notification">
      <label class="container">
        <input type="checkbox" checked="checked" />
        <span class="checkmark"></span>
        Оповестить по SMS
      </label>
    </div>
    <div class="form-item buttons">
      <button @click.prevent="$router.push({ name: 'home' })">Назад</button>
      <button>Вперед</button>
    </div>
  </form>
</template>
<script>
export default {
  name: "educationData",
  data() {
    return {
      value: [],
      value2: [],
      selected: 1,
      options: [
        "Среднее",
        "Средне-специальное",
        "Неоконченное высшее",
        "Бакалавр",
        "Магистрант",
        "Аспирант",
      ],
      options2: [
        { label: "Vue", id: 1 },
        { label: "React", id: 2 },
        { label: "Angular", id: 3 },
        { label: "Svelte", id: 4 },
        { label: "Ember.js", id: 5 },
      ],
    };
  },
};
</script>

<style scoped></style>
