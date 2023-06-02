<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Tabs from "./components/Tabs.vue";
import Pomodoro from "./components/Pomodoro.vue";
</script>

<template>
  <div class="flex flex-col items-center justify-center py-32">
    <div>
      <h1 class="text-center text-4xl">Hive Pomodoro</h1>

      <a
        class="flex justify-center"
        href="https://discord.gg/JspQr3GPve"
        target="_blank"
      >
        <img src="./assets/logo_render.svg" alt="Hive logo" />
      </a>
    </div>

    <Tabs />
    <Pomodoro />
  </div>
</template>

<style scoped>
.logo.vite:hover {
  filter: drop-shadow(0 0 2em #747bff);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #249b73);
}
</style>
