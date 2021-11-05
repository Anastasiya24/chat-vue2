<template>
  <div>
    <div class="container">
      <div class="header">
        <div class="logo" @click="onLinkMainPage">
          <img :src="chatSvg" />
        </div>
        <div class="profileIcon" @click="setOpenAccountModal">
          {{ name | modifyFirstLetterToUpperCase }}
        </div>
      </div>
      <div class="content"><slot></slot></div>

      <div class="footer">
        <div class="logo" @click="onLinkMainPage">
          <img :src="chatSvg" />
        </div>
        <p>Chat app</p>
      </div>
    </div>
    <Modal
      v-if="isOpenAccountModal"
      @onClose="setOpenAccountModal"
      title="Profile Settings"
    >
      <ProfileSettings :name="name" @onChangeUserName="onChangeUserName" />
    </Modal>
  </div>
</template>

<script>
import Modal from '../components/Modal';
import ProfileSettings from '../components/ProfileSettings';
import chatSvg from '../assets/icons/chat.svg';
import { EDIT_USER_NAME } from '../store/actions.type';

export default {
  name: 'ChatContainer',
  components: { ProfileSettings, Modal },
  props: {
    name: String,
  },
  data() {
    return {
      chatSvg: chatSvg,
      isOpenAccountModal: false,
    };
  },
  computed: {
    isValidMessage: function () {
      return this.newMessageTest && this.newMessageTest?.trim();
    },
  },
  methods: {
    onLinkMainPage() {
      this.$router.push('/');
    },
    setOpenAccountModal() {
      const currentState = this.isOpenAccountModal;
      this.isOpenAccountModal = !currentState;
    },
    onChangeUserName(value) {
      this.$store.dispatch(EDIT_USER_NAME, value);
      this.setOpenAccountModal();
    },
  },
  filters: {
    modifyFirstLetterToUpperCase: function (value) {
      return value?.substring(0, 1)?.toUpperCase() || '';
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  min-height: 100%;
}

.header {
  display: flex;
  justify-content: space-between;

  background-color: var(--primary-color);
  padding: 10px 20px;
}

.logo img {
  width: 30px;
  filter: invert(1);
}

.profileIcon {
  cursor: pointer;
  background-color: var(--dark-color);
  color: var(--white-color);

  width: 34px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.content {
  flex: 1 0 auto;
}

.footer {
  background-color: var(--primary-color);
  padding: 20px;

  display: flex;
  align-items: center;
}

.footer p {
  color: var(--white-color);
  font-size: 20px;
  margin-left: 20px;
}
</style>
