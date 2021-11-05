<template>
  <div class="message">
    <p class="sender">{{ sender }}:</p>
    <div class="textSection">
      <p class="text">{{ text }}</p>
      <p class="time">{{ time }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Message',
  props: {
    sender: String,
    text: String,
    time: String,
  },
};
</script>

<style scoped>
.message {
  display: flex;
  margin-bottom: 15px;
  padding: 10px;
  background-color: var(--light-primary-color);
  border-radius: 8px;
}

.sender {
  margin: 1px 10px 0 0;
  color: var(--dark-color);
  font-family: 'NotoSansTC Bold';
}

.textSection {
  width: 100%;
}

.text {
  line-height: 20px;
}

.time {
  text-align: end;
  font-size: 14px;
  color: var(--dark-color);
  margin-top: 5px;
}

@media (max-width: 600px) {
  .message {
    display: block;
  }
}
</style>
