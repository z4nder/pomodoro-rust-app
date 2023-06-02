<template>
  <div>
    <div class="sm:hidden">
      <label for="tabs" class="sr-only">Select a tab</label>
      <!-- Use an "onChange" listener to redirect the user to the selected tab URL. -->
      <select
        id="tabs"
        name="tabs"
        class="bg-secondary-500 block w-full rounded-md border-gray-300 hover:ring-primary-500"
      >
        <option v-for="tab in tabs" :key="tab.name" :selected="tab.current">
          {{ tab.name }}
        </option>
      </select>
    </div>
    <div class="hidden sm:block">
      <nav class="flex space-x-4" aria-label="Tabs">
        <a
          v-for="tab in tabs"
          :key="tab.name"
          :href="tab.href"
          :class="[
            tab.current
              ? 'bg-secondary-600 text-gray-50'
              : 'text-gray-100 hover:text-gray-200',
            'rounded-md px-3 py-2 text-sm font-medium',
          ]"
          :aria-current="tab.current ? 'page' : undefined"
          >{{ tab.name }}</a
        >
      </nav>
    </div>
  </div>
</template>

<script setup>
const tabs = [
  { name: "Pomodoro", href: "#", current: true },
  { name: "Short Break", href: "#", current: false },
  { name: "Long  Break", href: "#", current: false },
];
</script>
