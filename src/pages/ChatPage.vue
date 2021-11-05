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
      name: 'Nastya',
      newMessageTest: '',
      // TODO GET MESSAGES
      messages: [
        {
          _id: '614362325d69f78bfe860c1a',
          senderId: '6143622e5d69f78bfe860c17',
          text: 'Hi',
          time: '11:26',
          __v: 0,
        },
        {
          _id: '614362365d69f78bfe860c1c',
          senderId: '6143622e5d69f78bfe860c17',
          text: 'Testing.',
          time: '11:26',
          __v: 0,
        },
      ],
    };
  },
  computed: {
    isValidMessage: function () {
      return this.newMessageTest && this.newMessageTest?.trim();
    },
  },
  methods: {
    sendMessage() {
      console.log('this.newMessageTest', this.newMessageTest);
      // TODO : save msg
      // TODO : clean msg
      this.newMessageTest = '';
    },
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
