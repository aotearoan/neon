<template>
  <li v-if="model" class="neon-tree-menu-item" :class="`neon-tree-menu-item--depth-${depth}`">
    <neon-link
      :no-style="true"
      :href="model.href"
      class="neon-tree-menu__link"
      :class="{ 'neon-tree-menu__link--no-click': !model.href }"
      >{{ model.label }}</neon-link
    >
    <ul v-if="model.children && model.children.length > 0" class="neon-tree-menu__children no-style">
      <neon-tree-menu-item v-for="child in model.children" :key="child.key" :model="child" :depth="depth + 1" />
    </ul>
  </li>
</template>

<script lang="ts" src="./NeonTreeMenuItem.ts"></script>
