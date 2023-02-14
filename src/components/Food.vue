<script setup lang="ts">
defineProps<{
  name: string,
  type: string,
  price: string
}>()
</script>

<template>
  <h1>{{ name }}</h1>
  <h2>종류 : {{ type }}</h2>
  <h2 v-if="price !='0'">가격 : {{ price }} 원</h2>
  맛있다. (아마도) <br><br>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
