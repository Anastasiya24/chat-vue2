<template>
  <div class="wrapper">
    <h1 class="title">Nice to meet you</h1>
    <p class="subtitle">What is your name?</p>
    <Input v-model="nickName" placeholder="Nickname" @onSave="onSaveNickName" />
    <Button
      text="Chat!"
      @onClick="onSaveNickName"
      :invalid="isInvalidNickName"
      :style="{ 'margin-top': '20px' }"
    />
  </div>
</template>

<script>
import Input from '../components/Input.vue';
import Button from '../components/Button.vue';

export default {
  name: 'GreetingPage',
  components: { Input, Button },
  data: function () {
    return {
      nickName: null,
    };
  },
  computed: {
    isInvalidNickName: function () {
      return !this.nickName || !this.nickName?.trim();
    },
  },
  methods: {
    onSaveNickName() {
      localStorage.setItem('nickName', this.nickName);
      this.$router.push('/')
    },
  },
};
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.title {
  text-shadow: 5px -2px 0px var(--secondary-color);
  font-family: 'NotoSansTC Bold';
  font-size: 65px;
  color: var(--primary-color);
  margin-bottom: 20px;
}

.subtitle {
  padding: 10px 0;
  color: var(--primary-color);
  font-family: 'NotoSansTC Bold';
  font-size: 17px;
}

@media (max-width: 600px) {
  .wrapper {
    margin: 40px 20px;
  }

  .title {
    margin-bottom: 30px;
  }
}
</style>
