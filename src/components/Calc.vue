<script setup lang="ts">
import { ref } from 'vue';
addEventListener('keyup', function (key) {
  switch (key.code) {
    case "Numpad1": numpad(1); return;
    case "Numpad0": numpad(0); return;
    case "Numpad2": numpad(2); return;
    case "Numpad3": numpad(3); return;
    case "Numpad4": numpad(4); return;
    case "Numpad5": numpad(5); return;
    case "Numpad6": numpad(6); return;
    case "Numpad7": numpad(7); return;
    case "Numpad8": numpad(8); return;
    case "Numpad9": numpad(9); return;
    case "NumpadDecimal": numpad('.'); return;
    case "NumpadEnter":
    case "Enter": calc(); return;
    case "NumpadAdd": calcpad('+'); return;
    case "NumpadSubtract": calcpad('-'); return;
    case "NumpadMultiply": calcpad('*'); return;
    case "NumpadDivide": calcpad('/'); return;
    case "Delete":
    case "Backspace": delItem(); return;
  }
})
let fNumber = ref('');
let sNumber = ref('');
let lol = ref('');
let numpad = function (num: number | string) {
  fNumber.value += num;
}
let temp:string = '';
let calcpad = function (val: string) {
  if (lol.value != '') {temp= val; calc(); return; }
  sNumber.value = fNumber.value;
  fNumber.value = '';
  lol.value = val;
}
let inversion = function () {
  fNumber.value = Number(fNumber.value) * (-1) + '';
}
let clear = function () {
  fNumber.value = '';
}
let clearAll = function () {
  fNumber.value = '';
  sNumber.value = '';
  lol.value = '';
}
let delItem = function () {
  fNumber.value = fNumber.value.substring(0, fNumber.value.length - 1);
}
let calc = function () {
  if (fNumber.value == '') {
    lol.value = temp ? temp : '';
    return;
  }
  switch (lol.value) {
    case '+':
      sNumber.value = (Number(sNumber.value) + Number(fNumber.value)) + '';
      fNumber.value = '';
      lol.value = temp ? temp : '';  temp='';return;
    case '-':
      sNumber.value = (Number(sNumber.value) - Number(fNumber.value)) + '';
      fNumber.value = '';
      lol.value = temp ? temp : '';  temp=''; return;
    case '*':
      sNumber.value = (Number(sNumber.value) * Number(fNumber.value)) + '';
      fNumber.value = '';
      lol.value = temp ? temp : '';  temp=''; return;
    case '/':
      if (fNumber.value == '0') return;
      sNumber.value = (Number(sNumber.value) / Number(fNumber.value)) + '';
      fNumber.value = '';
      lol.value = temp ? temp : '';  temp=''; return;
    default:
  }
}
</script>

<template>
  <div>
    <input disabled v-model="sNumber"><br />
    <input disabled v-model="fNumber"><br />
    <button @click="calcpad('/')">/</button>
    <button @click="clearAll()">CE</button>
    <button @click="clear()">C</button>
    <button @click="delItem()">Del</button>
    <br />
    <button @click="numpad(7)">7</button>
    <button @click="numpad(8)">8</button>
    <button @click="numpad(9)">9</button>
    <button @click="calcpad('*')">X</button>
    <br />
    <button @click="numpad(4)">4</button>
    <button @click="numpad(5)">5</button>
    <button @click="numpad(6)">6</button>
    <button @click="calcpad('-')">-</button>
    <br />
    <button @click="numpad(1)">1</button>
    <button @click="numpad(2)">2</button>
    <button @click="numpad(3)">3</button>
    <button @click="calcpad('+')">+</button>
    <br />
    <button @click="inversion()">+/-</button>
    <button @click="numpad(0)">0</button>
    <button @click="numpad('.')">.</button>
    <button @click="calc()">=</button>
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

input {
  width: 200px;
  height: 50px;
  text-align: right;
  font-size: 30px;
  font-weight: bold;
}

button {
  width: 50px;
  height: 50px;
}
</style>