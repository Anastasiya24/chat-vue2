<template>
  <div class="container">
    <h1>Page not found</h1>
    <div class="button" @click="goBack">
      <p>Go back</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFoundPage',
  methods: {
    goBack() {
      this.$router.push('/');
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.container h1 {
  text-shadow: 5px -2px 0px var(--extra-dark-color);
  font-family: 'NotoSansTC Bold';
  font-size: 65px;
  color: var(--dark-color);
  margin-bottom: 20px;
}

.button {
  margin-top: 20px;
  padding: 10px 20px;
  border: 2px solid var(--extra-dark-color);
  border-radius: 7px;
  cursor: pointer;

  font-family: 'NotoSansTC Bold';
  font-size: 17px;
}

.button:hover {
  background-color: var(--dark-color);
  color: var(--white-color);
}
</style>
