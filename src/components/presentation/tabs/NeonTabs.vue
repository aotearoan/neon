<template>
  <div class="neon-tabs" :class="[`neon-tabs--${size}`, `neon-tabs--${color}`]">
    <div class="neon-tabs__menu-items">
      <div
        v-for="tab in tabs"
        :key="tab.key"
        class="neon-tabs__menu-item"
        :class="{ 'neon-tabs__menu-item--selected': tab.key === value }"
        @click="onClick(tab.key)"
      >
        <neon-icon v-if="tab.icon" class="neon-tabs__menu-icon" :name="tab.icon" />
        <span v-if="tab.label" class="neon-tabs__menu-label">{{ tab.label }}</span>
      </div>
    </div>
    <!-- @slot Add tabs here (NeonTab). NOTE: Tabs can also be added outside of the component if required -->
    <slot></slot>
  </div>
</template>

<script lang="ts" src="./NeonTabs.ts"></script>
