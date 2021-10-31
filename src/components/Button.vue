<template>
  <div :class="buttonClass" @click="buttonClick">
    <p>{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: 'Button',
  props: {
    text: String,
    invalid: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    buttonClass() {
      return `wrapper ${this.invalid && 'invalid'}`;
    },
  },
  methods: {
    buttonClick() {
      if (!this.invalid) this.$emit('onClick');
    },
  },
};
</script>

<style scoped>
.wrapper {
  cursor: pointer;
  background-color: var(--primary-color);
  border-radius: 4px;
  padding: 15px 20px;

  color: var(--white-color);
  font-size: 20px;
  text-align: center;
}

.wrapper p {
  font-family: 'NotoSansTC Bold';
}

.wrapper:hover {
  background-color: var(--dark-color);
  transition: 300ms linear;
}

.wrapper:hover p {
  text-shadow: 3px -2px 0px var(--extra-dark-color);
  transition: 500ms linear;
}

.invalid,
.invalid:hover {
  background-color: var(--grey-color);
  color: var(--white-color);
  cursor: auto;
}

.invalid:hover p {
  text-shadow: none;
  cursor: auto;
}
</style>
