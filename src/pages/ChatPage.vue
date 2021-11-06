<template>
  <ChatContainer :name="name">
    <div class="chatContainer">
      <div class="messages">
        <Message
          v-for="message in messages"
          :key="message._id"
          :sender="name"
          :time="message.time"
          :text="message.text"
        />
      </div>
      <div class="textareaFooter">
        <Textarea
          v-model="newMessageTest"
          ref="textarea"
          @onSave="sendMessage"
          placeholder="Your message"
        />
        <img
          v-if="isValidMessage"
          :src="sendSvg"
          class="sendIcon"
          @click="sendMessage"
        />
      </div>
    </div>
  </ChatContainer>
</template>

<script>
import { mapGetters } from 'vuex';
import { GET_USER_NAME, GET_MESSAGES_LIST, ADD_NEW_MESSAGE } from '../store/actions.type';

import ChatContainer from '../layouts/ChatContainer';
import Message from '../components/Message';
import Textarea from '../components/Textarea';
import sendSvg from '../assets/icons/send.svg';

export default {
  name: 'ChatPage',
  components: { ChatContainer, Message, Textarea },
  data() {
    return {
      sendSvg: sendSvg,
      newMessageTest: '',
    };
  },
  computed: {
    isValidMessage: function () {
      return this.newMessageTest && this.newMessageTest?.trim();
    },
    ...mapGetters(['name', 'messages']),
  },
  methods: {
    sendMessage() {
      this.$store.dispatch(ADD_NEW_MESSAGE, this.newMessageTest);
      this.newMessageTest = '';
      // clean child textarea
      this.$refs.textarea.onCleanTextarea();
    },
  },
  mounted() {
    this.$store.dispatch(GET_USER_NAME);
    this.$store.dispatch(GET_MESSAGES_LIST);
  },
};
</script>

<style scoped>
.chatContainer {
  margin: 20px;
}

.messages {
  min-height: calc(100vh - 245px);
}

.textareaFooter {
  display: flex;
}

.sendIcon {
  margin-left: 10px;
  width: 30px;
  filter: invert(30%) sepia(14%) saturate(1269%) hue-rotate(275deg)
    brightness(91%) contrast(89%);
  cursor: pointer;
}

@media (max-width: 600px) {
  .chatContainer {
    margin: 15px;
  }

  .sendIcon {
    margin-left: 6px;
    width: 24px;
  }
}
</style>
