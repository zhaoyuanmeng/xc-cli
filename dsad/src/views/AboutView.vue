<template>
  <div class="about">
    <h1>This is an about page</h1>

    <h1>{{ useTabStore1.activeTabName }}</h1>
    <button @click="setName">更改activeTabName</button>
  </div>
</template>

<script setup>
import { useTabStore } from "@/store/modules/tab";
let useTabStore1 = useTabStore();

function setName() {
  useTabStore1.setActiveTabName("two");
}
</script>

<style scoped lang="scss"></style>
