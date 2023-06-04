<script setup lang="ts">
import { ref, computed } from "vue";
import { invoke } from "@tauri-apps/api/tauri";

// const greetMsg = ref("");
// const name = ref("");

// async function greet() {
//   // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
//   greetMsg.value = await invoke("greet", { name: name.value });
// }

const totalTime = ref(1500);
const currentTime = ref(0);
const timer = ref();
const showTime = computed(() =>
  formatSeconds(totalTime.value - currentTime.value)
);

async function start() {
  timer.value = setInterval(() => {
    currentTime.value = currentTime.value + 1;
  }, 1000);
}

async function stop() {
  clearInterval(timer.value);
}

function formatSeconds(time: number): String {
  const minutes = Math.trunc(time / 60);
  const seconds = time % 60;
  return `${minutes}:${formatSecondsValue(seconds)}`;
}

function formatSecondsValue(seconds: number): String {
  if (seconds.toString().length === 1) {
    return `0${seconds}`;
  }

  return seconds.toString();
}
</script>

<template>
  <div class="flex flex-col pt-10">
    <h1 class="text-7xl">{{ showTime }}</h1>

    <div class="pt-5">
      <button
        @click="start"
        class="w-full rounded-md bg-primary-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
      >
        Start
      </button>
      <button
        @click="stop"
        class="mt-5 w-full rounded-md bg-primary-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
      >
        Stop
      </button>
    </div>
  </div>

  <!-- <form class="row" @submit.prevent="greet">
    <input id="greet-input" v-model="name" placeholder="Enter a name..." />
    <button type="submit">Greet</button>
  </form>

  <p>{{ greetMsg }}</p> -->
</template>
