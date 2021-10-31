<template>
  <div class="chatContainer">
      <div class="messages">messages</div>
      <div class="footer">new messages</div>
  </div>
</template>

<script>
export default {
  name: 'ChatPage',
  props: {
    msg: String,
  },
};
</script>

<style scoped>
.chatContainer {
  margin: 20px;
}

.messages {
  min-height: calc(100vh - 248px);
}

.footer {
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
