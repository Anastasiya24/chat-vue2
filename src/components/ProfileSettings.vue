<template>
  <div class="wrapper">
    <h1>Your nickname: {{ name }}</h1>
    <h1>Change your nickname</h1>
    <Input v-model="nickName" placeholder="Nickname" @onSave="onSaveNickName" />
    <Button
      text="Change"
      @onClick="onSaveNickName"
      :invalid="isInvalidNickName"
    />
  </div>
</template>

<script>
import Input from '../components/Input.vue';
import Button from '../components/Button.vue';

export default {
  name: 'ProfileSettings',
  components: { Input, Button },
  props: {
    name: String,
  },
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
      this.$emit('onChangeUserName', this.nickName);
    },
  },
};
</script>

<style scoped>
.wrapper h1 {
  margin: 0 0 9px;
  font-size: 15px;
}

.wrapper h1:first-child {
  text-decoration: underline;
}

.wrapper >>> .button {
  width: 200px;
  margin: 15px auto 0;
  padding: 10px;
  font-size: 15px;
}
</style>
