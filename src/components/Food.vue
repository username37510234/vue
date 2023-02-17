<script setup lang="ts">
import { onMounted,ref, type Ref } from 'vue';
import axios from 'axios';
let foods:Ref = ref([]);
onMounted(async ()=>{
  const res = await axios.get("http://localhost:3300/test");
  console.log(res.data)
  console.log(res)
  foods.value = res.data;
})
</script>

<template>
  <h2>푸드 리스트</h2>
  <div>
    <ul>
      <li v-for="food in foods">{{ food.name }}의 가격은 {{ food.price }}원 입니다.</li>
    </ul>
  </div>
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
