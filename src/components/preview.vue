<template>
  <div v-if="$store.state.user.name" class="preview">
    <div class="form-item">
      <span>
        {{ $store.state.user.lastname }} {{ $store.state.user.name }}</span
      >
      <span>{{ $store.state.user.email }}</span>
      <span>{{ $store.state.user.birthdate }}</span>
      <span>{{ $store.state.user.phone }}</span>
      <span>{{ $store.state.user.gender }}</span>
      <span v-if="$store.state.user.sms">Оповестить по смс</span>
    </div>
    <hr class="hr" />
    <div class="form-item">
      <span>{{ $store.state.activeGrade.name }}</span>

      <span v-for="(item, index) in $store.state.activeSkill" :key="index">
        {{ item.name }}</span
      >
    </div>
    <div class="form-item buttons">
      <button
        @click.prevent="setActiveTab('experience')"
        :class="{ active: activeTab === 'experience' }"
      >
        Опыт работы
      </button>
      <button
        @click.prevent="setActiveTab('github')"
        :class="{ active: activeTab === 'github' }"
      >
        Github профиль
      </button>
    </div>
    <div v-if="activeTab === 'experience'" class="form-item experience">
      <span
        class="exp"
        v-for="(item, index) in $store.state.experience"
        :key="index"
        >{{ item.name }}
        <hr class="hr"
      /></span>
    </div>
    <div v-else class="form-item">
      <span>Login: {{ $store.state.githubData.login }}</span>
      <span>Id: {{ $store.state.githubData.id }}</span>
      <span>Url: {{ $store.state.githubData.url }}</span>
      <span>Name: {{ $store.state.githubData.name }}</span>
      <span>Location: {{ $store.state.githubData.location }}</span>
      <span>Public: {{ $store.state.githubData.public_repos }}</span>
      <span>Followers: {{ $store.state.githubData.followers }}</span>
      <span>Following: {{ $store.state.githubData.following }}</span>
    </div>
    <div class="form-item buttons">
      <button @click.prevent="$router.push({ name: 'github' })">Назад</button>
      <button @click.prevent="sendData()">Отправить данные</button>
    </div>
    <div v-if="dialogVisible" class="alert-wrapper" @click.stop="hideDialog">
      <div @click.stop class="alert" role="alert">
        <span>Резюме отправлено</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "githubForm",
  data() {
    return {
      activeTab: "experience",
      dialogVisible: false,
      my_response: "",
    };
  },
  created() {
    this.$store.commit("setterModule", "Предпросмотр");
    this.my_response = `Имя: ${this.$store.state.user.name}
    %0AФамилия: ${this.$store.state.user.lastname}
    %0AEmail: ${this.$store.state.user.email}
    %0AТелефон: ${this.$store.state.user.phone}
    %0AДата рождения: ${this.$store.state.user.birthdate}
    %0AОбразование: ${this.$store.state.activeGrade.name}
    %0AНавыки: ${this.$store.state.activeSkill}
    %0AОпыт работы: ${this.$store.state.experience}
    %0AПрофиль github: ${this.$store.state.githubData.username}`;
    let each = this.$store.state.activeSkill;
    each.forEach((e) => console.log(e.name));
    return this.$store.state;
  },
  methods: {
    setActiveTab(tab) {
      this.activeTab = tab;
    },
    hideDialog() {
      this.dialogVisible = false;
    },
    async sendData() {
      this.dialogVisible = true;
      let response = await this.axios.post(
        `https://api.telegram.org/bot${this.$store.state.token_bot}/sendMessage?chat_id=-515941328&text=${this.my_response}`
      );
      console.log(response);
      console.log(this.$store.state.activeSkill);
      console.log(this.$store.state.user);
      console.log(this.$store.state.activeGrade);
      console.log(this.$store.state.activeSkill);
      console.log(this.$store.state.githubData);
      console.log(this.$store.state.experience);
      setTimeout(() => (this.dialogVisible = false), 1500);
    },
  },
};
</script>

<style scoped></style>
