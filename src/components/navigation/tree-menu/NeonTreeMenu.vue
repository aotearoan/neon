<template>
  <nav class="neon-tree-menu">
    <ul class="no-style">
      <neon-tree-menu-item v-for="item in model" :key="item.key" :model="item" @click="onClick(item.key)" />
    </ul>
  </nav>
</template>

<script lang="ts" src="./NeonTreeMenu.ts"></script>
