<script setup lang="ts">
import { ref } from "vue";
import { invoke } from "@tauri-apps/api/tauri";

const greetMsg = ref("");
const name = ref("");

async function greet() {
  // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
  greetMsg.value = await invoke("greet", { name: name.value });
}
</script>

<template>
  <form class="flex flex-col pt-10" @submit.prevent="greet">
    <h1 class="text-7xl">25:00</h1>

    <div class="pt-5">
      <button
        class="w-full rounded-md bg-primary-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
        type="submit"
      >
        Start
      </button>
    </div>
  </form>

  <p>{{ greetMsg }}</p>
</template>
